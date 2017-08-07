;(function () {
  var isDebug = chrome.runtime.id === 'jjlamdmpjannhabnljlbanhafpkgfoko' || location.search.indexOf('debug') >= 0
  var rootPath = isDebug ? 'http://127.0.0.1:3000' : ''

  addJS(rootPath + '/dist/js/app.js')

  if (!isDebug) {
    addCSS('/dist/css/style.css')
  }

  function addJS (src) {
    var el = document.createElement('script')
    el.src = src
    document.body.appendChild(el)
  }

  function addCSS (src) {
    var el = document.createElement('link')
    el.href = src
    el.type = 'text/css'
    el.rel = 'stylesheet'
    document.body.appendChild(el)
  }
})()
