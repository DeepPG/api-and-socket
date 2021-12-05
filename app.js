const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios').default;
const server = require('http').createServer(app)
const EventEmitter = require('events');




// server.js
 
const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8080 })
 


wss.on('connection', (ws, req) => {
  ws.on('message', function incoming(message){
  })
  wss.on('delete', (data) =>{
    ws.send(data)
  })
  ws.send('test message if user opened the chat')
})

const wsss = new WebSocket("ws://localhost:8080")


wsss.on('open', ws => {
  wsss.on('message', (message) => {
    console.log(message.toString())
  })
})


wss.on('listening',()=>{
   console.log('ws://localhost:8080')
})





class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
let m = 0;


myEmitter.on('newUser', (a, b) => {
  console.log(a, b);
});

wsss.on('upgrade', (req) => {
  console.log(req.read())
})

app.use(express.json())


app.get('/', (req, res, next) => {
  res.render('index');
})


var people = [
  {
    _name: 'ali',
    surename: "krisby",
    hisCrash: 'an',
  },
  {
    _name: 'an',
    surename: "week",
    hisCrash: 'ali',
  },
]




app.get('/someone', (req, res) => {
  console.log(req.query)
  res.json(people)
})

app.get('/someone/:name', function (req, res) {
  let getSomeone = people.find(x => x._name === req.params.name)
  if(!getSomeone) return res.json({"err": "cannoct find the user 404"})
  res.json(getSomeone)
})
















app.post('/someone', (req, res, next) => {
  let { hisCrash, _name, surename } = req.body;
  if(people.find(x => x._name === req.body._name)) return res.send({"err": "this name in already exist"})
  people.push({_name: _name, hisCrash: hisCrash, surename: surename})
  console.log(people)
})

app.delete('/someone/:name', (req, res) => {
  people = people.filter(x => x._name != req.params.name);
  wss.emit('delete', Buffer.from(JSON.stringify(people[people.findIndex(x => x._name === 'an')])))
})

app.put('/someone/:name', (req, res) => {
  if(!people.find(x => x._name === req.params.name)) return res.json({"err": "cannoct find the user 404"})
  people[people.findIndex(x => x._name === req.params.name)] = {
    "_name": req.body._name === null ? people[people.findIndex(x => x._name === req.params.name)]._name : req.body._name,
    "surename": req.body.surename=== null ? people[people.findIndex(x => x._name === req.params.name)].surename : req.body.surename,
    "hisCrash": req.body.hisCrash === null ? people[people.findIndex(x => x._name === req.params.name)].hisCrash : req.body.hisCrash
  }
  console.log(people)
})


app.patch('someone/:name', (res, req) => {



})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




