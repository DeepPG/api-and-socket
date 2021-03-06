const express = require('express')
const routes = express.Router()
const cont = require('../Controller/Client');

routes.use(express.json())

routes.get('/someone', cont.people)
    .get('/someone/:name', cont.user)
    .post('/someone/', cont.addUser)
    .delete('/someone/:name', cont.removeUser)
    .put('/someone/:name', cont.edit);

module.exports = routes;