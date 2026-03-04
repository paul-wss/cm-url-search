// Whenever the selection changes, immediately notify the background service
// worker so the context menu title is already up to date before the menu opens.
document.addEventListener("selectionchange", () => {
  const text = window.getSelection()?.toString().trim();
  chrome.runtime.sendMessage({ type: "selection", text: text || "" });
});
