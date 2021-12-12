// connect to the server as user

const WebSocket = require('ws')

const wsss = new WebSocket("ws://localhost:8080")
wsss.on('open', ws => {
  wsss.on('message', (message) => {
    console.log(message.toString()) // You need toString function to decode buffer messages
  })
})

 
module.exports;