require("dotenv").config();

// requiring several nmp packages 
var keys = require("./keys.js");
var fs = require("fs");
var moment = require("moment");

var axios = require("axios");
var spotifyAPI = require("node-spotify-api");

var args = process.argv;
var command = process.argv[2];
let value = args.splice(3).join(" ");

var spotify = new Spotify(keys.spotify);

function concertThis() {
    if (!value) {
        axios.get("https://rest.bandsintown.com/artists/Celine+Dion/events?app_id=codingbootcamp").then(
            function (artistResposne) {
                for (var i = 0; i < artistResposne.data.length; i++);
                console.log("Venue: " + artistResponse.data[i].venue.name);
                console.log("City: " + artistResponse[i].venue.city);
                console.log("The event will be on " + moment(artistResposne.data[i].datatime).format("MM/DD/YYYY"));
            }
        );
        fs.appendFile("log.txt", "\nCommand Line used:  " + command + " Celine Dion. ", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Your artist has been added to log.txt!");
            };
        });
        console.log("-----------------------------------------------------------------------");
    } else {
        axios.get("https://rest.bandsintown.com/artists/Celine+Dion/events?app_id=codingbootcamp").then(
            function (artistResponse) {
                if (artistResponse.data.length <= 0) {
                    console.log("Sorry, there are no upcoming concerts.");

                } else {
                    console.log("You want to see " + value + "live in concert!!")
                    for (var i = 0; i < artistResponse.data.length; i++) {
                        console.log("The venue is" + artistResponse.data[i].venue.name);
                        console.log(artistResponse.data[i].venue.name + " is located in " + artistResponse.data[i].venue.city + ", " + artistResponse.data[i].venue.region + ", " + artistResponse.data[i].venue.country);
                        console.log("This concert will be held on " + moment(artistResponse.data[i].datetime).format("MM/DD/YYYY"));
                    }
                };
                fs.appendFile("log.txt", "\nCommand Line used:  " + command + " " + value + ". ", function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Your artist has been added to log.txt!");
                    };
                });

                console.log("-----------------------------------------------------------------------");

            }).catch(function (error) {
                if (error.artistResponse) {
                    console.log("---------------Data---------------");
                    console.log(error.artistResponse.data);
                    console.log("---------------Status---------------");
                    console.log(error.artistResponse.status);
                    console.log("---------------Status---------------");
                    console.log(error.artistResponse.headers);
                } else if (error.reuest) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
        };
    
    };
;


function movieThis() {
    if (!value) {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=Mr.+Nobody").then(
            function (movieResponse) {
                console.log("Title: " + movieResponse.data.Title);
                console.log("Year: " + movieResponse.data.Year);
                console.log("Rated: " + movieResponse.data.imdbRating);
                console.log("Country: " + movieResponse.data.Country);
                console.log("Language: " + movieResponse.data.Language);
                console.log("Plot: " + movieResponse.data.Plot);
                console.log("Actors: " + movieResponse.data.Actors);
                console.log("Rotten Tomatoes: " + movieResponse.data.Ratings[1].Value);
            }
    }
}




// var spotify = new Spotify({
//     id: 9edc498d6105462ebc0916b130b45f7a,
//     secret: 5e144de560f54c3886800121fb2846b7
// });
// spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function (error, songResponse) {
//     if (error) {
//         return console.log(error);
//     }
//     console.log("Artist: " + songResponse.tracks.items[0].artists[0].name);
//     console.log("Song: " + songResponse.tracks.items[0].name);
//     console.log("URL: " + songResponse.tracks.items[0].preview_url);
//     console.log("Album: " + songResponse.tracks.items[0].album.name);
// });


var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


);

// function doWhatInfo() {

//     fs.readFile("random.txt", "utf8", function (error, data) {
//         if (error) {
//             return console.log(error);
//         }
//         var output = data.split(",");
//         for (var i = 0; i < output.length; i++) {
//             console.log(output[i]);
//         }
//     });


//     switch (command) {
//         case "concert-this":
//             concertThis();
//             break;
//         case "spotify-this-song":
//             spotifyThis();
//             break;
//         case "move-this":
//             moveThis();
//             break;
//         case "do-what-it-says":
//             doWhatItSays();
//             break;
//     }