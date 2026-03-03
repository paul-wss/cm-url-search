# Search URL in Google – Chrome Extension

Adds a **"Search \"wikipedia.org\" in Google"** entry to the context menu when a **URL is selected**
(e.g. `wikipedia.org`) – exactly like Chrome already does for regular text selections.
Clicking it opens a new tab with the corresponding Google search.

## Installation (Developer Mode)

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **"Developer mode"** in the top-right corner.
3. Click **"Load unpacked"**.
4. Select this folder (`cm-url-search`).

The extension is active immediately – no restart required.

## Usage

1. Select a URL on any page (e.g. `wikipedia.org`).
2. Right-click → select **"Search \"wikipedia.org\" in Google"**.
3. A new tab opens with `https://www.google.com/search?q=wikipedia.org`.

## Files

| File | Description |
|---|---|
| `manifest.json` | Extension metadata (Manifest V3) |
| `background.js` | Service worker: creates and manages the context menu entry |
