# API


## About
This is simple project to let me to learn somethings new about api and websocket server

## EndPoints

**GET** `/somome/` => Get all users in the arrays

**GET** `/someone/{name}` => Get user informations

**POST** `/someone/` => add new user

**DELETE** `/someone/{name}` => remove user from the list

**PUT** `/someone/{name}` edit objects values name, surename and hisCrash keys


## WebSocket Server Events

 `getList`, `getSomeone`, `delete`


## Random Examples

**Delete user and delete event**

```js
const WebSocket = require('ws')

// connect to the server as user
const wsss = new WebSocket("ws://localhost:8080")
wsss.on('open', ws => {
  wsss.on('delete', (message) => {
    console.log(message.toString()) // You need toString function to decode buffer message
  })
})
```

run
`DELETE http://localhost:3000/someone/an`



## Donation
[![paypal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=K643AVX5KGL3W)
