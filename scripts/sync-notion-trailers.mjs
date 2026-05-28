import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const NOTION_VERSION = "2025-09-03";
const DEFAULT_DATA_SOURCE_ID = "820bc2c7-504a-4de0-a8e4-26bc01fd3183";
const DEFAULT_OUTPUT = "docs/assets/data/trailers.json";

const token = process.env.NOTION_API_KEY || process.env.NOTION_TOKEN;
const dataSourceId = process.env.NOTION_TRAILERS_DATA_SOURCE_ID || DEFAULT_DATA_SOURCE_ID;
const outputPath = process.env.TRAILERS_OUTPUT_PATH || DEFAULT_OUTPUT;

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

const normalizeUrl = (value) => {
  try {
    const parsed = new URL(value);
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return value;
  }
};

const youtubeIdFromUrl = (value) => {
  try {
    const parsed = new URL(value);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v") || "";
    }
  } catch {
    return "";
  }

  return "";
};

const thumbnailFromVideoId = (videoId) => {
  if (!videoId) return "";
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
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

const toTrailerItem = (page) => {
  const properties = page.properties || {};
  const videoUrl = normalizeUrl(url(properties.URL));
  const videoId = text(properties["Video ID"]) || youtubeIdFromUrl(videoUrl);
  const thumbnail = url(properties.Thumbnail) || thumbnailFromVideoId(videoId);

  return {
    title: text(properties.Title),
    summary: text(properties.Summary),
    source: select(properties.Source),
    category: select(properties.Category),
    date: date(properties.Date),
    url: videoUrl,
    videoId,
    thumbnail,
    thumbnailAlt: text(properties.Title),
    visible: checkbox(properties.Visible),
    order: number(properties.Order)
  };
};

const rows = await fetchRows();
const items = rows
  .map(toTrailerItem)
  .filter((item) => item.title && item.url && item.visible)
  .sort((a, b) => (Number(a.order) || 9999) - (Number(b.order) || 9999));

const data = {
  generatedAt: new Date().toISOString(),
  source: {
    type: "notion"
  },
  items
};

const resolvedOutput = path.resolve(outputPath);
await mkdir(path.dirname(resolvedOutput), { recursive: true });
await writeFile(resolvedOutput, `${JSON.stringify(data, null, 2)}\n`, "utf8");

console.log(`Wrote ${items.length} trailer items to ${outputPath}`);
