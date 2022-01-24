const data = require('../../model/data');
const wss = require('../../server');
const middleware = require('../../middleware/Client')


const people = (req, res) => {
  wss.emit('getList')
  res.json(data.people)
}

module.exports = {people}