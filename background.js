const MENU_ITEM_ID = "url-google-search";

// Kontextmenü-Eintrag beim Installieren anlegen
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: "In Google suchen",
    contexts: ["selection"],
  });
});

// Titel dynamisch anpassen, bevor das Menü angezeigt wird
chrome.contextMenus.onShown.addListener((info) => {
  if (!info.selectionText) return;

  const text = info.selectionText.trim();
  chrome.contextMenus.update(
    MENU_ITEM_ID,
    { title: `Nach "${text}" in Google suchen` },
    () => chrome.contextMenus.refresh()
  );
});

// Klick-Handler: neues Tab mit Google-Suche öffnen
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== MENU_ITEM_ID || !info.selectionText) return;

  const query = encodeURIComponent(info.selectionText.trim());
  chrome.tabs.create({ url: `https://www.google.com/search?q=${query}` });
});
