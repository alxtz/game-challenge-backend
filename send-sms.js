const request = require('request')

function sendMessage(useData) {
  const postJson = {
    'api_key': '6852454f',
    'api_secret': process.env.API_SECRET,
    'to': useData.tel,
    'from': 'alxtz',
    'text': `Play the game ${useData.gameName} !\nURL: \n${useData.gamePageURL} \n`
  }

  request({
    url: 'https://rest.nexmo.com/sms/json',
    method: "POST",
    json: postJson
  }, (err, resp, body) => {
    console.log('send api success')
  })
}

module.exports = {
  sendMessage
}
