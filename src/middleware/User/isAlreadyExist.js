const data = require('../../model/data')

function isExist(req, res){
    if(data.people.find(x => x._name === req.body._name)) 
        return res.send({"err": "this name in already exist"})
}

module.exports = {isExist}