const MENU_ITEM_ID = "url-google-search";

// Register context menu entry on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: "Search in Google",
    contexts: ["selection"],
  });
});

// Dynamically update the title just before the menu is shown
chrome.contextMenus.onShown.addListener((info) => {
  if (!info.selectionText) return;

  const text = info.selectionText.trim();
  chrome.contextMenus.update(
    MENU_ITEM_ID,
    { title: `Search "${text}" in Google` },
    () => chrome.contextMenus.refresh()
  );
});

// Click handler: open a new tab with the Google search
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== MENU_ITEM_ID || !info.selectionText) return;

  const query = encodeURIComponent(info.selectionText.trim());
  chrome.tabs.create({ url: `https://www.google.com/search?q=${query}` });
});
