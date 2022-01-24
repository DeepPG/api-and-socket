const data = require('../model/data')


function isThere(req, res, next){
    if(!data.people.find(x => x._name === req.params.name)) 
        return res.json({"err": "cannoct find the user 404"})
}

module.exports = {isThere};