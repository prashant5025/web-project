// $("div").add("p").css("color", "red").addClass("red");
// $("red")

// $("h1").css("color", "red").addClass("red");

// $("h1").text("Bye").addClass("red");

// $("button").click(function() {
//     $("p").toggle();
// })

// $("input").keypress(function(event) {
//     $("h1").text(event.key)
// })
// $("input").on("keypress", function(event) {
//     $("h1").text(event.key)
// })



// $("p").text("New Text");

// $("input").remove();


$("button").on("click", function () {
    $("p").toggle().animate({opacity: 0.5});
});