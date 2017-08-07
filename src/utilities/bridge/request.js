class Request {
  constructor (tabId) {
    this.filter = {
      urls: ['<all_urls>'],
      tabId: tabId
    }
  }

  addRequestCompletedListener (cb) {
    chrome.webRequest.onCompleted.addListener(details => cb(details), this.filter)
  }

  removeEventListener (fnRef) {
    chrome.webRequest.onCompleted.removeListener(fnRef)
  }
}

export default Request
