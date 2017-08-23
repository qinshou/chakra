class Request {
  constructor (tabId) {
    this.filter = {
      urls: ['<all_urls>'],
      tabId: tabId
    }
  }

  addResponseListener (fnRef) {
    chrome.webRequest.onCompleted.addListener(fnRef, this.filter)
  }

  removeResponseListener (fnRef) {
    chrome.webRequest.onCompleted.removeListener(fnRef)
  }

  addBreakpointListener (fnRef) {
    // chrome.webRequest.onBeforeRequest.addListener(function (details) {
    //   debugger
    //   return { cancel: true }
    // }, { urls: ['*://www.evil.com/*'] }, ['blocking', 'requestBody'])

    chrome.webRequest.onBeforeRequest.addListener(fnRef, this.filter)
  }

  removeBreakpointListener () {

  }
}

export default Request
