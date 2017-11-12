const request = require('request')

const postJson = {
  'api_key': '6852454f',
  'api_secret': '51313ad58fceb7ca',
  'to': '886911199304',
  'from': 'alxtz',
  'text': 'test the API'
}

request({
  url: 'https://rest.nexmo.com/sms/json',
  method: "POST",
  json: postJson
}, (err, resp, body) => {
  console.log(resp.body)
})
