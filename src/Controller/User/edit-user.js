const data = require('../../model/data');
const wss = require('../../server');
const middleware = require('../../middleware/Client')



const edit = (req, res) => {
  if(!data.people.find(x => x._name === req.params.name)) return res.json({"err": "cannoct find the user 404"})
  data.people[data.people.findIndex(x => x._name === req.params.name)] = {
    "_name": req.body._name === null ? data.people[people.findIndex(x => x._name === req.params.name)]._name : req.body._name,
    "surename": req.body.surename=== null ? data.people[people.findIndex(x => x._name === req.params.name)].surename : req.body.surename,
    "hisCrash": req.body.hisCrash === null ? data.people[people.findIndex(x => x._name === req.params.name)].hisCrash : req.body.hisCrash
  }
  console.log(data.people)
}

module.exports = {edit}