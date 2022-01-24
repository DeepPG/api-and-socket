
// server
 
const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8080 })
 
 
 
wss.on('connection', (ws, req) => {
  wss.on('delete', (data) =>{
    ws.send(data.username)
  })
  wss.on('getList', () => {
    console.log('someone requested all users')
  })
  wss.on('getSomeone', (someoneData) => {
    console.log(someoneData)
  })
  wss.on('postSomeone', (postData)=>{
    console.log(postData)
  })
  wss.on('userRemoved', (deleteData) => {
    console.log(deleteData)
  })
  ws.send('test message if user opened the chat')
})

 
wss.on('listening',()=>{
   console.log('ws://localhost:8080')
})







module.exports = wss; 