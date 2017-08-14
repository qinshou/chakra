class Request {
  constructor (tabId) {
    this.filter = {
      urls: ['<all_urls>'],
      tabId: tabId
    }
  }

  addRequestListener (fnRef) {
    chrome.webRequest.onCompleted.addListener(fnRef, this.filter)
  }

  removeRequestListener (fnRef) {
    chrome.webRequest.onCompleted.removeListener(fnRef)
  }
}

export default Request
