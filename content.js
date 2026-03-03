// On right-click, send the current selection to the background service worker
// so it can update the context menu title before the menu appears.
document.addEventListener("contextmenu", () => {
  const text = window.getSelection()?.toString().trim();
  if (text) {
    chrome.runtime.sendMessage({ type: "selection", text });
  }
});
