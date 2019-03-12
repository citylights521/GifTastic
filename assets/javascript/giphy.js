//JavaScript

//food topics array
var topics = ["pizza", "ice cream", "candy", "cake", "jelly beans", "soup", "carrots", "apples", "skittles", "cookies"];

//creates buttons from array above onload
function createButtons() {
    var foodButtonsDiv = $("#foodButtons");
    for (var i = 0; i < topics.length; i++) {
        var btn = document.createElement("button");
        var t = document.createTextNode(topics[i]);
        btn.appendChild(t);
        foodButtonsDiv.append(btn);
    }

    $("button").on("click", onButtonClick);
}

//adds button when queryForm submits
function addButton(event) {
    var topic = $("#searchTopic").val();

    var btn = document.createElement("button");
    var t = document.createTextNode(topic);
    btn.appendChild(t);
    $(btn).on("click", onButtonClick);
    $("#foodButtons").append(btn);
    $("#searchTopic").val('');
    event.preventDefault();
}


function onButtonClick(event) {
    var topic = $(event.currentTarget).text();
    console.log(topic);

    //creates the queryURL variable and sets the var to look on api.giphy.com for the person selected in the button click and provides the api key for access
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=c1KKyLhS674xkaJekdDB2q9Iu1ORfMwt&limit=10";

    //jQuery ajax call to go to the url and get the giphs
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        //object call to present content from the api ????
        .then(function (response) {

            //results variable stores the data object as a variable so that we can loop over it down below
            var results = response.data;
            $("#giphyShow").empty();
            //for loop that adds one each loop for the length/duration of the loop which in this case is 10
            for (var i = 0; i < results.length; i++) {

                //creates a new div for each result (giph) found
                var gifDiv = $("<div>");


                //stores the rating for the  results object
                var rating = results[i].rating;


                //uses jQuery to creat a new html p tag and then ujsing jQuery .text() method, add the rating as text
                var p = $("<p>").text("Rating: " + rating);

                //uses jQuery to cerate a new html img element
                var topicImage = $("<img>");

                //reference personImage and using jQuery .attr() method add the url from the response object and feed it to the src attribute
                topicImage.attr("src", results[i].images.fixed_height.url);

                //uses jQuery .prepend method to render the p variable to our gifDiv (created variable for gifDiv above)
                gifDiv.prepend(p);

                //uses jQuery .prepend method to render the p variable to our personImage (created variable for gifDiv above)
                gifDiv.prepend(topicImage);

                //using jQuery, select the div with id=gif-appear-here and use jQuery prepend to render the gifDiv we just created
                $("#giphyShow").prepend(gifDiv);
            }
        });
}

//call-back on submit to create new button from search
$("#queryForm").submit(addButton);



// function callGiphy(){}



// //javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });



// // var giph = $.get('https://api.giphy.com/v1/gifs/search?api_key=c1KKyLhS674xkaJekdDB2q9Iu1ORfMwt&q=pizza&limit=25&offset=0&rating=G&lang=en');
// // giph.done(function (data) {
// // console.log(giphy);
// // })
