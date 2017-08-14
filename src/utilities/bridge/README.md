# Bridge

![dog](https://user-images.githubusercontent.com/1736244/29264052-195cc95c-810e-11e7-8fab-0976653965cc.gif)

解决 ContentScript 与 Background 通信

## 方案
在每个 Tab 创建时会产生一个作用域仅为该 Tab 的 ContentScript，相关 Chrome 的 API，例如注入代码、影响菜单之类的近在该 ContentScript 生效。

插件会在 Chrome 创建一个全局的服务，叫 Background。有一些接口比如流量拦截（WebRequest）是只能跑在 Background 下的。

因此需要一个通信功能，例如获取的全局流量情况，在根据 TabId 过滤并发送到对应的 ContentScript。

## Port
[Port](https://developer.chrome.com/extensions/runtime#type-Port) 是[Long-lived connections](https://developer.chrome.com/extensions/messaging#connect)中的通信方式（协议），
可以实时的双向通信。


## Usage
```javascript
// background.js
import Background from 'background'
const background = new Background()

background.on('message', (message, tabId, sendResponse) => {
  if(message === 'hello') {
    sendResponse('world')
  }
})

background.listen()


// contentScript.js
import ContentScript from 'contentScript'

// 静态方法，可以直接调用
ContentScript.send('hello', response => console.log(response))

const contentScript = new ContentScript()

contentScript.on('connect')
contentScript.on('message', message => {
  alert(message)
})

contentScript.listen()

```

## API

### Background

#### Function
name | description
---- | ---
listen | 开始监听 Event

#### Event
name | arguments | description
---- | --- | ---
connect | tabId, port | 连接到 ContentScript 时，tabId描述执行在哪个页面的 TabId
message | message, tabId, sendResponse | 当 ContentScript 发出信息的时候，Message 为发送的参数，sendResponse为回复回调
disconnect | tabId, port | ContentScript 失去连接触发

---

### ContentScript

#### Function
name | arguments | description
---- | --- | ---
listen | | 开始监听 Event
send | payload, cb | 静态方法；payload：发送的数据，cb：Background的回复；对应 on('message')

#### Event
name | arguments | description
---- | --- | ---
connect | port | 连接到 Background 时
message | message | Background 发送消息过来
disconnect |  | Background 失去连接触发

## changlog
- publish
