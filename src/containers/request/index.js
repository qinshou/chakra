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
  {
    url: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/jquery/jquery-1.10.2.min_65682a2.js',
    status: '13123',
    ok: 'ok'
  },
  {
    url: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/icons_5859e57.png',
    status: '13123',
    ok: 'ok'
  },
  {
    url: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/voice/js/voice_1e62c0f.js',
    status: '13123',
    ok: 'ok'
  },
  {
    url: 'https://www.baidu.com/his?wd=&from=pc_web&rf=3&hisdata=%5B%7B%22time%22%3A1484808029%2C%22kw%22%3A%22nodejs%20git%20hook%22%7D%2C%7B%22time%22%3A1484845438%2C%22kw%22%3A%22itudou.biz%22%7D%2C%7B%22time%22%3A1485150543%2C%22kw%22%3A%22%E9%93%9D%E7%AE%94%E7%BA%B8%20%E9%94%A1%E7%AE%94%E7%BA%B8%22%7D%2C%7B%22time%22%3A1485158508%2C%22kw%22%3A%22vultr%22%7D%2C%7B%22time%22%3A1485158635%2C%22kw%22%3A%22%E6%9E%AB%E5%8F%B6vps%22%7D%2C%7B%22time%22%3A1485160053%2C%22kw%22%3A%22%E6%B5%B7%E7%9B%97%E6%88%98%E4%BA%89%2014%E7%BA%A7%22%7D%2C%7B%22time%22%3A1485160065%2C%22kw%22%3A%22%E6%B5%B7%E7%9B%97%E5%A5%87%E5%85%B5%2014%E6%9C%AC%22%7D%2C%7B%22time%22%3A1485399705%2C%22kw%22%3A%22%E4%B8%AD%E5%A4%AE%E7%94%B5%E8%A7%86%E5%A4%A7%E5%AD%A6%22%7D%2C%7B%22time%22%3A1485399735%2C%22kw%22%3A%22%E4%B8%AD%E5%A4%AE%E7%94%B5%E8%A7%86%E5%A4%A7%E5%AD%A6%E6%AF%95%E4%B8%9A%E8%AF%81%22%7D%5D&json=1&p=3&sid=23899_1446_21078_17001_22158&req=2&csor=0&cb=jQuery110204780996467173768_1502432980266&_=1502432980267',
    status: '13123',
    ok: 'ok'
  }
]

class Request extends Component {
  render () {
    const {request} = this.props
    return (
      <div>
        <Table data={request} columns={columns}/>
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
