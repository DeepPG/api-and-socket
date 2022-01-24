const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios').default;
const data = require('./model/data')
const wss = require('./server')


app.use(express.json())


app.get('/', (req, res, next) => {
  res.send('things');
})

app.use(require('./routes/http-requests'))
app.patch('/someone/:name', (res, req) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})