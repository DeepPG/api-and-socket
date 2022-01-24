const data = require('../../model/data');
const wss = require('../../server');
const middleware = require('../../middleware/Client')




const removeUser = (req, res) => {
  let getSomeone = data.people.find(x => x._name === req.params.name)
  middleware.isThere(req, res)
  wss.emit('delete', {
      username : getSomeone
  })
  wss.emit('userRemoved', data.people.find(x => x._name == req.params.name) + 'has been removed')
  data.people = data.people.filter(x => x._name != req.params.name);
}

module.exports = {removeUser};