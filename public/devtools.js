chrome.devtools.panels.create(
  'Chakra', '', 'index.html',
  function (panel) {
    // const channel = chrome.runtime.connect({ name: 'ChakraContetScript' })
    // channel.onMessage.addListener(msg => {
    //   debugger
    // })
    // channel.postMessage({
    //   type: 'INSPECTED_WINDOW_TAB_ID',
    //   payload: { tabId: chrome.devtools.inspectedWindow.tabId }
    // })
  }
)
