import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const NOTION_VERSION = "2025-09-03";
const DEFAULT_DATA_SOURCE_ID = "67816770-aa05-4f6f-bb71-407ba46d3c83";
const DEFAULT_OUTPUT = "assets/data/news.json";

const token = process.env.NOTION_API_KEY || process.env.NOTION_TOKEN;
const dataSourceId = process.env.NOTION_NEWS_DATA_SOURCE_ID || DEFAULT_DATA_SOURCE_ID;
const outputPath = process.env.NEWS_OUTPUT_PATH || DEFAULT_OUTPUT;

const fallbackThumbnails = {
  "https://www.inven.co.kr/webzine/news/?news=307730": "assets/gallery/gallery_02_hangar_colossus.webp",
  "https://bbs.ruliweb.com/news/read/213589": "assets/gallery/gallery_01_ruins_character.webp",
  "https://www.thisisgame.com/articles/400692": "assets/gallery/gallery_07_fortress_wall.webp",
  "https://www.inven.co.kr/webzine/news/?news=307922": "assets/gallery/gallery_08_airship_ruins.webp",
  "https://www.gamevu.co.kr/news/articleView.html?idxno=50492": "assets/gallery/gallery_12_reactor_pool.webp",
  "https://zdnet.co.kr/view/?no=20250730161920": "assets/gallery/gallery_10_launcher_hangar.webp",
  "https://www.dailian.co.kr/news/view/1529902/?sc=Naver": "assets/gallery/gallery_13_commander.webp",
  "https://www.digitaltoday.co.kr/news/articleView.html?idxno=581561": "assets/gallery/gallery_06_underground_sector.webp",
  "https://m.inven.co.kr/webzine/wznews.php?iskin=to&hashtag=%EC%A7%80%ED%94%BC%EC%9C%A0%EC%97%94&idx=299730": "assets/gallery/gallery_03_lab_white_character.webp",
  "https://it.chosun.com/news/articleView.html?idxno=2023092124449": "assets/gallery/gallery_09_siege_artillery.webp",
  "https://www.dailian.co.kr/news/view/1370142/?sc=Naver": "assets/gallery/gallery_05_camp_character.webp",
  "https://www.inven.co.kr/webzine/news/?news=295409": "assets/gallery/gallery_14_statue_sanctum.webp",
  "https://www.newswhoplus.com/news/articleView.html?idxno=20474": "assets/gallery/gallery_11_construction_area.webp",
  "https://bbs.ruliweb.com/news/read/207043": "assets/gallery/gallery_04_rain_character.webp"
};

if (!token) {
  throw new Error("Missing NOTION_API_KEY or NOTION_TOKEN.");
}

const text = (property) => {
  if (!property) return "";
  const values = property.title || property.rich_text || [];
  return values.map((part) => part.plain_text || "").join("").trim();
};

const select = (property) => property?.select?.name || "";
const number = (property) => property?.number ?? null;
const checkbox = (property) => property?.checkbox === true;
const date = (property) => property?.date?.start || "";
const url = (property) => property?.url || "";

const thumbnail = (property) => {
  const file = property?.files?.[0];
  if (!file) return "";
  return file.external?.url || file.file?.url || "";
};

const normalizeUrl = (value) => {
  try {
    const parsed = new URL(value);
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return value;
  }
};

const notionRequest = async (body) => {
  const response = await fetch(`https://api.notion.com/v1/data_sources/${dataSourceId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_VERSION
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Notion API request failed: ${response.status} ${detail}`);
  }

  return response.json();
};

const fetchRows = async () => {
  const results = [];
  let startCursor;

  do {
    const payload = await notionRequest({
      page_size: 100,
      start_cursor: startCursor,
      filter: {
        property: "Visible",
        checkbox: {
          equals: true
        }
      },
      sorts: [
        {
          property: "Order",
          direction: "ascending"
        }
      ]
    });

    results.push(...payload.results);
    startCursor = payload.has_more ? payload.next_cursor : undefined;
  } while (startCursor);

  return results;
};

const toNewsItem = (page) => {
  const properties = page.properties || {};
  const articleUrl = normalizeUrl(url(properties.URL));
  const notionThumbnail = thumbnail(properties.Thumbnail);

  return {
    title: text(properties.Title),
    summary: text(properties.Summary),
    source: select(properties.Source),
    category: select(properties.Category),
    date: date(properties.Date),
    url: articleUrl,
    thumbnail: notionThumbnail || fallbackThumbnails[articleUrl] || "",
    thumbnailAlt: text(properties.Title),
    visible: checkbox(properties.Visible),
    order: number(properties.Order)
  };
};

const rows = await fetchRows();
const items = rows
  .map(toNewsItem)
  .filter((item) => item.title && item.url && item.visible)
  .sort((a, b) => (Number(a.order) || 9999) - (Number(b.order) || 9999));

const data = {
  generatedAt: new Date().toISOString(),
  source: {
    type: "notion",
    notionDataSourceId: dataSourceId
  },
  items
};

const resolvedOutput = path.resolve(outputPath);
await mkdir(path.dirname(resolvedOutput), { recursive: true });
await writeFile(resolvedOutput, `${JSON.stringify(data, null, 2)}\n`, "utf8");

console.log(`Wrote ${items.length} news items to ${outputPath}`);
