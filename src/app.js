const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios').default;




// server
 
const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8080 })
 


wss.on('connection', (ws, req) => {
  wss.on('delete', (data) =>{
    ws.send(data.username)
  })
  ws.send('test message if user opened the chat')
})

// connect to the server as user

const wsss = new WebSocket("ws://localhost:8080")
wsss.on('open', ws => {
  wsss.on('message', (message) => {
    console.log(message.toString()) // You need toString function to decode buffer messages
  })
})


wss.on('listening',()=>{
   console.log('ws://localhost:8080')
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
  let getSomeone = people.find(x => x._name === req.params.name)
  if(!getSomeone) return res.json({"err": "cannoct find the user 404"})
    wss.emit('delete', {
      username : Buffer.from(JSON.stringify(getSomeone))
    })
  people = people.filter(x => x._name != req.params.name);
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


app.patch('/someone/:name', (res, req) => {



})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})