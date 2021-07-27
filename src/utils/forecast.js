const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url =  'http://api.weatherstack.com/current?access_key=405db291b28b3c36ec80d3a91e9c580c&query=' + latitude +  ',' + longitude

    request( { url, json:true } , (error,{body}) => {
               if(error) {
                    callback('unable to connect to weather service!',undefined)
                } else if(body.error) {
                    callback('Unable to find location!',undefined)
                }   else {
                    callback(undefined, body.current.weather_descriptions[0] +': It is currently '+body.current.temperature+' degrees out. It feels like '+ body.current.feelslike+' degrees out.')
                }
        })
}

module.exports = forecast