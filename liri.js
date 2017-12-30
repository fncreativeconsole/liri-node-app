var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");



var consumerKey = twitterKeys.consumer_key;
var consumerSecret = twitterKeys.consumer_secret;
var accessTokenKey = twitterKeys.access_token_key;
var accessTokenSecret = twitterKeys.access_token_secret;

var input = process.argv[2];

if (input === "my-tweets") {
	//here we put in the code to console log the tweets
	twitterKeys.get("statuses", function (error, tweets, response) {
		if(error) throw error;
		console.log(tweets);
	});	
}
else if (input === "spotify-this-song") {
	//here we log artist, song name, preview link of the song, album related to song
	//for process.argv[3];
		var spotify = new Spotify({
		id: spotify-client-id,
		secret: spotify-client-secret
		});
		 
		spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
		if (err) { return console.log('Error occurred: ' + err); }
		 
		console.log(data); 
		});

}
else if (input === "movie-this") {
	//Title of movie, year, IMDB rating, rotten tomatos rating,
	//country where movie was produced, language, plot, actors
	request('http://www.omdbapi.com/?apikey=40e9cece&t=' + process.argv[3], function (error, res) {
  		console.log('error:', error);
  		//not sure if i built this object correctly...
	  	console.log({
	  		title: res.Title,
	  		year: res.Year,
	  		IMDB: res.Ratings[0].Value,
	  		rotten: res.Ratings[1].Value,
	  		country: res.Country,
	  		language: res.Language,
	  		plot: res.Plot,
	  		actors: res.Actors
	  	});
	});

}
else (input === "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(error, data) {
  		if (error) {
    	return console.log(error);
  		}
  		//Not sure how to run the document when I actually get it...
  		run(data);
}











