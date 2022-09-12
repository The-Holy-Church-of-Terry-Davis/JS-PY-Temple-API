// npm install requests I think, idk my JS kinda wonky
function endpoints()
{
  var request = require('request');

  var options = {
      url: 'https://temple.xslendi.xyz/api/v1/endpoints'
  };

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body['endpoints']);
      }
  }

  request(options, callback);
}


endpoints();

function godword()
{
  var request = require('request');

var options = {
    url: 'https://temple.xslendi.xyz/api/v1/godword?amount=10' //change amount = [what number of words you want]
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body['words']);
    }
}

  request(options, callback);
}
godword();

function quotes()
{
  var request = require('request');

var options = {
    url: 'https://temple.xslendi.xyz/api/v1/quote?amount=2' // change amount = [whatever number of quotes you want] you can also add another paramter `offensive` and set it to 1 [true] to get quotes containing the n-word
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body['quote']);
        console.log(body['quotes']);
    }
}

request(options, callback);
}

quotes();
