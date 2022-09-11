# TempleAPI
Python and Javascript wrapper for the Temple API
(WIP)

## What's this?
Python wrapper for [TEMPLE API](https://temple.xslendi.xyz/docs)

## Python

## Endpoints

```py
import requests
response = requests.get('https://temple.xslendi.xyz/api/v1/endpoints')
endpoints = response.json()
endpointsVal = endpoints['endpoints']
print(endpointsVal)
```

## GodWord

```py
import requests

params = {
    'amount': 'Enter number of words to be generated (int) type',
}

response = requests.get('https://temple.xslendi.xyz/api/v1/godword', params=params)
godword = response.json()
godwordFinal = godword['words']
status = godword['status']
count = godword['count']
pizza = [godwordFinal, count, status]
for slices in pizza:
  print(slices)
```

## Terry Quote
```py
import requests

params = {'amount': 'Enter amount of quotes needed', 'offensive': 'Enter `1` if you want offensive quotes, `0` if not'}

response = requests.get('https://temple.xslendi.xyz/api/v1/quote/',
                        params=params)
x = response.json()
print(x['quotes']) # If more than one quote
print(x['quote']) #If there's only one quote
```
## Javascript

## Endpoints
```js
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
```

## Godword
```js
var request = require('request');

var options = {
    url: 'https://temple.xslendi.xyz/api/v1/godword?amount=10'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body['words']);
    }
}

request(options, callback);
```

## Terry Quotes
```js
var request = require('request');

var options = {
    url: 'https://temple.xslendi.xyz/api/v1/quote?amount=2'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body['quote']);
        console.log(body['quotes']);
    }
}

request(options, callback);
```

This won't be a Python package because of it's size, but yeah you could always use the above stated examples in your code!
