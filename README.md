# GPUN Homepage Hero Prototype

This prototype tests a Shift Up-style full-screen homepage hero using the TERRARIUM title video.

## Local Preview

Open this URL while the local server is running:

```text
http://127.0.0.1:8026/
```

The prototype is served from:

```text
C:\DEV\Private_Workspace\gpun_homepage_prototype
```

## Video Strategy

The original source video is:

```text
C:\Users\khueh\Downloads\TERRARIUM_title_2.mp4
```

Source profile:

- 3840x2160
- 80.08 seconds
- about 685 MB
- audio removed for web hero use

Hero export decision:

- Use the 50-62 second segment as a 12-second muted loop.
- Use the 1080p HQ export for desktop web.
- Use the 720x1280 vertical crop for mobile.
- Use the JPG poster while the video is loading.

## Prepared Assets

```text
assets\terrarium_hero_loop_1080p_hq.mp4
assets\terrarium_hero_loop_1080p.mp4
assets\terrarium_hero_loop_720p_notion.mp4
assets\terrarium_hero_loop_mobile_720x1280.mp4
assets\terrarium_hero_poster.jpg
assets\terrarium_overview_720p.mp4
assets\terrarium_overview_poster.jpg
assets\move\project_move_overview_720p.mp4
assets\move\project_move_overview_poster.jpg
```

## Gallery Assets

The gallery images were converted to WebP files under:

```text
assets\gallery
assets\move
assets\gpun
```

Current gallery payload covers 38 images across TERRARIUM, PROJECT MOVE, and GPUN. The original PNG/JPG files can be uploaded to Notion now that the workspace is on a paid plan, but the WebP versions are recommended for a public website.

## Media / Press and Trailers Sync

The Media page renders press cards and YouTube trailers from:

```text
assets\data\news.json
assets\data\trailers.json
```

The source of truth for Press is the Notion `Media / Press` data source:

```text
https://www.notion.so/2418fab6541844fb99517dcbcf71fe82
```

The source of truth for Trailers is the Notion `Media / Trailers` data source:

```text
https://www.notion.so/604561fe48aa46dfab15dacf888ff255
```

To sync locally, run this from `gpun_homepage_prototype` after setting a Notion integration token:

```powershell
$env:NOTION_API_KEY="secret_xxx"
$env:NOTION_NEWS_DATA_SOURCE_ID="67816770-aa05-4f6f-bb71-407ba46d3c83"
node scripts\sync-notion-news.mjs

$env:NOTION_TRAILERS_DATA_SOURCE_ID="820bc2c7-504a-4de0-a8e4-26bc01fd3183"
node scripts\sync-notion-trailers.mjs
```

For GitHub Pages, add these repository secrets:

```text
NOTION_API_KEY
NOTION_NEWS_DATA_SOURCE_ID
NOTION_TRAILERS_DATA_SOURCE_ID
```

Then run the `Sync GPUN media from Notion` workflow manually, or let the scheduled workflow refresh `assets/data/news.json` and `assets/data/trailers.json` daily. The browser never receives the Notion API key.

## Recommended Deployment

For the public homepage, host the MP4 files from the website server, S3, Cloudflare R2, or another CDN-backed storage. Notion can embed a video block, but it cannot reproduce this full-bleed video-background hero with overlay navigation and CTA in the same way as a custom webpage.
