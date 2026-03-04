// Returns the currently selected text, regardless of whether it is inside
// a regular element or an <input>/<textarea>.
function getSelectedText() {
  const el = document.activeElement;
  if (
    el &&
    (el.tagName === "INPUT" || el.tagName === "TEXTAREA") &&
    typeof el.selectionStart === "number"
  ) {
    return el.value.substring(el.selectionStart, el.selectionEnd).trim();
  }
  return window.getSelection()?.toString().trim() || "";
}

// Whenever the selection changes, immediately notify the background service
// worker so the context menu title is already up to date before the menu opens.
document.addEventListener("selectionchange", () => {
  chrome.runtime.sendMessage({ type: "selection", text: getSelectedText() });
});
