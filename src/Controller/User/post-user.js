const data = require('../../model/data');
const wss = require('../../server');
const middleware = require('../../middleware/Client')




const addUser = (req, res, next) => {
  console.log(req.body)
  let { hisCrash, _name, surename } = req.body;
  middleware.isExist(req, res)
  data.people.push({_name: _name, hisCrash: hisCrash, surename: surename})
}


module.exports = {addUser}