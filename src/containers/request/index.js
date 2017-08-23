import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from '../../components/table'

const columns = [
  {
    title: 'Name',
    dataIndex: 'url',
    key: 'url',
    width: '70%'
  },
  {
    title: 'Status',
    dataIndex: 'statusLine',
    key: 'status'
  }
]

const data = [
  {'frameId': 0, 'fromCache': false, 'ip': '118.178.110.184', 'method': 'GET', 'parentFrameId': -1, 'requestId': '2446', 'statusCode': 200, 'statusLine': 'HTTP/1.1 200 OK', 'tabId': 59, 'timeStamp': 1503284984598.71, 'type': 'xmlhttprequest', 'url': 'http://noble.2dfire.net/variation/detail/init?jsessionid=null&modifyId=1671'},
  {'frameId': 0, 'fromCache': false, 'ip': '118.178.110.184', 'method': 'GET', 'parentFrameId': -1, 'requestId': '2443', 'statusCode': 200, 'statusLine': 'HTTP/1.1 200 OK', 'tabId': 59, 'timeStamp': 1503284983930.437, 'type': 'xmlhttprequest', 'url': 'http://noble.2dfire.net/static-noble/pages/variation/component/modify-closure-tips.html'},
  {'frameId': 0, 'fromCache': false, 'ip': '118.178.110.184', 'method': 'GET', 'parentFrameId': -1, 'requestId': '2444', 'statusCode': 200, 'statusLine': 'HTTP/1.1 200 OK', 'tabId': 59, 'timeStamp': 1503284983926.594, 'type': 'xmlhttprequest', 'url': 'http://noble.2dfire.net/static-noble/pages/variation/component/modify-emergency-modal.html'},
  {'frameId': 0, 'fromCache': false, 'ip': '118.178.110.184', 'method': 'GET', 'parentFrameId': -1, 'requestId': '2442', 'statusCode': 200, 'statusLine': 'HTTP/1.1 200 OK', 'tabId': 59, 'timeStamp': 1503284983860.361, 'type': 'image', 'url': 'http://noble.2dfire.net/static-noble/asset/img/waiting.gif'},
  {'frameId': 0, 'fromCache': false, 'ip': '118.178.110.184', 'method': 'GET', 'parentFrameId': -1, 'requestId': '2440', 'statusCode': 200, 'statusLine': 'HTTP/1.1 200 OK', 'tabId': 59, 'timeStamp': 1503284983830.2861, 'type': 'xmlhttprequest', 'url': 'http://noble.2dfire.net/static-noble/pages/variation/detail.html'}
]

class Request extends Component {
  render () {
    const {request} = this.props
    return (
      <div>
        <Table data={request} columns={columns} />
      </div>
    )
  }
}
const mock = false
function addRowKey (data) {
  return data.map((e, i) => Object.assign({}, e, {key: i}))
}
const mapStateToProps = (state) => ({
  request: addRowKey(mock ? data : state.request)
})

export default connect(mapStateToProps)(Request)
