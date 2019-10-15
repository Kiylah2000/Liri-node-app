require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment")

var args = process.argv;
var command = args[2];
let value = args.splice(3).join(" ");


function concertThis() {
    if (!value) {
        axios.get("https://rest.bandsintown.com/artists/Celine+Dion/events?app_id=codingbootcamp").then(
            function (response) {
                console.log("You want to see Celine Dion live in concert")
                for (var i = 0; i < response.data.length; i++) {
                    console.log(i);
                    console.log("The concert will be held at " + response.data[i].venue.name);
                    console.log(response.data[i].venue.name + " is located in " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
                    console.log("This concert will be held on " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                };
                fs.appendFile("log.txt", "\nCommand Line used:  " + command + " Celine Dion. ", function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Your artist has added to log.txt!");
                    };
                });
                console.log("======================================================================================================");
            }).catch(function (err) {
                console.error("Error occurred: " + err);
            });
    } else {
        axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
            function (response) {
                if (response.data.length <= 0) {
                    console.log("this band does not have any upcoming concerts. Please try again later.");
                } else {
                    console.log("======================================================================================================");
                    console.log("You want to see " + value + " live in concert! Yaayy!!")
                    for (var i = 0; i < response.data.length; i++) {
                        console.log("=============");
                        console.log(i);
                        console.log("The venue is " + response.data[i].venue.name);
                        console.log(response.data[i].venue.name + " is located in " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
                        console.log("This concert will be held on " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    };

                    fs.appendFile("log.txt", "\nCommand Line used:  " + command + " " + value + ". ", function (err) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log("Your artist has been added to log.txt!");
                        };
                    });
                    console.log("======================================================================================================");
                };
            }).catch(function (error) {
                if (error.response) {
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
};


function movieThis() {
    if (!value) {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=Mr.+Nobody").then(
            function (response) {
                console.log("======================================================================================================");
                console.log("The title of the movie is Mr. Nobody(" + response.data.Year + ")");
                for (var i = 0; i < 2; i++) {
                    console.log(response.data.Ratings[i].Source + ": " + response.data.Ratings[i].Value);
                };
                console.log("This movie was produced in " + response.data.Country + " in " + response.data.Language);
                console.log("The plot of the movie is: " + response.data.Plot);
                console.log("This movie actors are: " + response.data.Actors);
                fs.appendFile("log.txt", "\nCommand Line used:  " + command + " Mr. Nobody. ", function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Your movie added to log.txt!");
                    };
                });
                console.log("======================================================================================================");
            }).catch(function (err) {

                console.error("Error occurred: " + err);
            });
    } else {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + value).then(
            function (movieResponse) {
                console.log("======================================================================================================");
                for (var i = 0; i < 2; i++) {
                    console.log(movieResponse.data.Ratings[i].Source + ": " + movieResponse.data.Ratings[i].Value);
                };
                    console.log("Title: " + movieResponse.data.Title);
                    console.log("Year: " + movieResponse.data.Year);
                    console.log("Rated: " + movieResponse.data.imdbRating);
                    console.log("Country: " + movieResponse.data.Country);
                    console.log("Language: " + movieResponse.data.Language);
                    console.log("Plot: " + movieResponse.data.Plot);
                    console.log("Actors: " + movieResponse.data.Actors);
        

                fs.appendFile("log.txt", "\nCommand Line used:  " + command + " " + value + ". ", function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Your movie added to log.txt!");
                    };
                });
                console.log("======================================================================================================");
            })
            .catch(function (error) {
                if (error.response) {
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
};

function spotifyThis() {
    if (!value) {
        spotify.request("https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE")
            .then(function (response) {
                console.log("======================================================================================================");
                console.log("The artist who sings this song is: " + response.artists[0].name);
                console.log("The song is: " + response.name);
                console.log("The url for this song: " + response.external_urls.spotify);
                console.log("The album this song is on is: " + response.album.name);
                fs.appendFile("log.txt", "\nCommand Line used:  " + command + " The Sign. ", function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Your song added to log.txt!");
                    };
                });
                console.log("======================================================================================================");
            })
            .catch(function (err) {
                console.log(err);
            });
    } else {
        spotify
            .search({ type: 'track', query: value, limit: 1 })
            .then(function (response) {
                console.log("======================================================================================================");
                console.log("The song you searched for is: " + value);
                console.log("The album this song is on is: " + response.tracks.items[0].album.name);
                console.log("The artist who sings this song is: " + response.tracks.items[0].artists[0].name);
                console.log("The url for this song: " + response.tracks.items[0].external_urls.spotify);
                fs.appendFile("log.txt", "\nCommand Line used:  " + command + " " + value + ". ", function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Your song has been added to log.txt!");
                    };
                });
                console.log("======================================================================================================");
            })
            .catch(function (err) {
                console.log(err);
            });
    }
};

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        } else {
            console.log("======================================================================================================");
            console.log(data);
            var dataArr = data.split(",");
            command = dataArr[0];
            value = dataArr[1];
            spotifyThis();
            console.log("======================================================================================================");
        };
    });
};

switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
};
