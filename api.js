
$(document).ready(function () {

    $('.results').html('Hello World!');

    // Storing API URL into var URL
    var URL = "http://www.omdbapi.com/"

    // Storing our API into var apiKEY
    var apiKEY = "&apikey=PutYourApiKeyHere"

    // Storing all variables / creating a query for our API Request into var queryURL
    var queryURL = URL + "?" + "t=the+matrix" + apiKEY
    console.log("This is the API URL:" + queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
        //async: false

    }).then(function (response) {

        $('.response-1').html("Movie Title: " + response.Title + "<br> Year Released: " + response.Year);
        $('.response-2').html(response.Genre);

        console.log("Title: ", response.Title);
        console.log("Year Released: ", response.Year);
        console.log("Genre: ", response.Genre);
        console.log("Full API Response: ", response);
    });
});