//JavaScript

var topics = ["pizza", "ice cream", "candy", "cake", "jelly beans", "soup", "carrots", "apples", "skittles", "cookies"];


function createButtons(){

    var foodButtonsDiv = $("#foodButtons");
    for (var i = 0; i < topics.length; i++) {
        var btn = document.createElement("button");
        var t = document.createTextNode(topics[i]);
        btn.appendChild(t);
        foodButtonsDiv.append(btn);
    }

}






// function callGiphy(){}



// //javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
				
// $(doucment).on("click", ".topicButtons", callGiphy())

// // var giph = $.get('https://api.giphy.com/v1/gifs/search?api_key=c1KKyLhS674xkaJekdDB2q9Iu1ORfMwt&q=pizza&limit=25&offset=0&rating=G&lang=en');
// // giph.done(function (data) {
// // console.log(giphy);
// // })
