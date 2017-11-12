const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

app.use(cors())
app.use(bodyParser.json())

const sender = require('./send-sms')

app.get('/', (reqs, resp) => {
  resp.send('the server is running')
})

app.post('/send', (reqs, resp) => {
  console.log('some one wants to send with', reqs.body)
  sender.sendMessage(reqs.body)
  resp.send('send it!\n')
})

app.listen(3000, () => console.log('server listening on localhost:3000'))
