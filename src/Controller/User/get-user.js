const data = require('../../model/data');
const wss = require('../../server');
const middleware = require('../../middleware/Client')


const user = (req, res) => {
  let getSomeone = data.people.find(x => x._name === req.params.name)
  wss.emit('getSomeone', getSomeone)
  middleware.isExist(req, res)
  res.json(getSomeone)
}

module.exports = {user} ;
