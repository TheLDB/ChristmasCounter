const counter = require('days-until-christmas');
const Twitter = require('twitter');
require('dotenv').config();

module.exports = async () => {
    const daysUntil = counter();
    const name = `Landon | ${counter()} Days ☃️🎅`
    const status = `${counter()} Days Until Christmas! ☃️🎅`
    const client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
      });
      client.get('account/verify_credentials', function(err, response) {
          if(err) throw err;

          if(response.name !== name) {
              updateAndTweet();
          }
          else {
              console.log("Name is correct")
          }
      })
      
      function updateAndTweet() {
          client.post('account/update_profile', {Name: name, name}, function(err, postResponse) {
              if(err) throw err;
              console.log(postResponse);
          })
          client.post('statuses/update', {status}, function(err, tweet, response) {
              if(err) throw err;

              console.log(tweet);
          })
      }
}