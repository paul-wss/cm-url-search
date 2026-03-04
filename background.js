const MENU_ITEM_ID = "url-google-search";

// Register context menu entry on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: "Search in Google",
    contexts: ["selection"],
  });
});

// Update the title when the selection changes (sent from the content script)
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "selection") {
    const title = msg.text
      ? `Search for "${msg.text}" in Google`
      : "Search in Google";
    chrome.contextMenus.update(MENU_ITEM_ID, { title });
  }
});

// Click handler: open a new tab with the Google search
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== MENU_ITEM_ID || !info.selectionText) return;

  const query = encodeURIComponent(info.selectionText.trim());
  chrome.tabs.create({ url: `https://www.google.com/search?q=${query}` });
});
