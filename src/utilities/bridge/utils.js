export function getTabId () {
  return chrome.devtools ? chrome.devtools.inspectedWindow.tabId : ''
}
