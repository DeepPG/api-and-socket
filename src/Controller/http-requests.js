const data = require('../model/data');
const wss = require('../server');

const people = (req, res) => {
  wss.emit('getList')
  res.json(data.people)
}

const user = (req, res) => {
  console.log('test')
  let getSomeone = data.people.find(x => x._name === req.params.name)
  wss.emit('getSomeone', getSomeone)
  if(!getSomeone) return res.json({"err": "cannoct find the user 404"})
  res.json(getSomeone)
}

const addUser = (req, res, next) => {
  console.log('dd')
  let { hisCrash, _name, surename } = req.body;
  if(data.people.find(x => x._name === req.body._name)) return res.send({"err": "this name in already exist"})
  data.people.push({_name: _name, hisCrash: hisCrash, surename: surename})
}


const removeUser = (req, res) => {
  let getSomeone = data.people.find(x => x._name === req.params.name)
  if(!getSomeone) return res.json({"err": "cannoct find the user 404"})
    wss.emit('delete', {
      username : Buffer.from(JSON.stringify(getSomeone))
    })
  wss.emit('userRemoved', data.people.find(x => x._name == req.params.name) + 'has been removed')
  data.people = data.people.filter(x => x._name != req.params.name);
}


const edit = (req, res) => {
  if(!data.people.find(x => x._name === req.params.name)) return res.json({"err": "cannoct find the user 404"})
  data.people[data.people.findIndex(x => x._name === req.params.name)] = {
    "_name": req.body._name === null ? data.people[people.findIndex(x => x._name === req.params.name)]._name : req.body._name,
    "surename": req.body.surename=== null ? data.people[people.findIndex(x => x._name === req.params.name)].surename : req.body.surename,
    "hisCrash": req.body.hisCrash === null ? data.people[people.findIndex(x => x._name === req.params.name)].hisCrash : req.body.hisCrash
  }
  console.log(data.people)
}

module.exports = {people, user, addUser, removeUser, edit};