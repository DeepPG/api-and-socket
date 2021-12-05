# API


## About
This is simple project to let me to learn somethings new about api and websocket server

## EndPoints

**GET** `/somome/` => Get all users in the object 

**GET** `/someone/{name}` => Get user informations

**POST** `/someone/` => add new user

**DELETE** `/someone/{name}` => remove user from the list

**PUT** `/someone/{name}` edit objects values name, surename and hisCrash keys


## WebSocket Server Events

 `delete`


## Random Examples

**Delete user and delete event**

run
`DELETE http://localhost:3000/someone/an`

```js
const WebSocket = require('ws')

// connect to the server as user
const wsss = new WebSocket("ws://localhost:8080")
wsss.on('open', ws => {
  wsss.on('message', (message) => {
    console.log(message.toString()) // You need toString function to decode buffer message
  })
})
```