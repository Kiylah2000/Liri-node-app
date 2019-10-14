require("dotenv").config();

// requiring several nmp packages 
var keys = require("./keys.js");
var fs = require("fs");
var moment = require("moment");

var axios = require("axios");
var spotifyAPI = require("node-spotify-api");

var command = process.argv[2];
var value = process.argv[3];

var spotify = new Spotify(keys.spotify);



var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

console.log(queryURL);

axios.get(queryURL).then(
    function (artistResposne) {
        console.log("Venue: " + artistResponse.data[0].venue.name);
        console.log("City: " + artistResponse[0].venue.city);
        console.log(moment(artistResposne.data[0].datatime).format("MM/DD/YYYY"));
    }
);

var spotify = new Spotify({
    id: 9edc498d6105462ebc0916b130b45f7a,
    secret: 5e144de560f54c3886800121fb2846b7
  });
spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function (error, songResponse) {
    if (error) {
        return console.log(error);
    }
    console.log("Artist: " + songResponse.tracks.items[0].artists[0].name);
    console.log("Song: " + songResponse.tracks.items[0].name);
    console.log("URL: " + songResponse.tracks.items[0].preview_url);
    console.log("Album: " + songResponse.tracks.items[0].album.name);
});


var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=[key]";

    axios.get(queryURL).then(
        function(movieResponse){
            console.log("Title: " + movieResponse.data.Title);
            console.log("Year: " + movieResponse.data.Year);
            console.log("Rated: " + movieResponse.data.imdbRating);
            console.log("Country: " + movieResponse.data.Country);
            console.log("Language: " + movieResponse.data.Language);
            console.log("Plot: " + movieResponse.data.Plot);
            console.log("Actors: " + movieResponse.data.Actors);
            console.log("Rotten Tomatoes: " + movieResponse.data.Ratings[1].Value);
        }
    );
};

switch (command) {
    case "concert-this":
        concertthis();
        break;
    case "spotify-this-song":
        var artist = value;
        if (artist === value) {
            console.log(artist);
        }
        else {
            The sign
        }
            
        );
        break;
    case "move-this":
        movethis();
        break;
    case "do-what-it-says":
        dowhatitsays();
        break;
}