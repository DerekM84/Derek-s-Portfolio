console.log("javascript file linked");

$(document).ready(function() {
    
    console.log("document loaded");

$(".project-wrap").on("mouseenter", function() {
    console.log("hovering on project: " + $(this).attr("data-title"));
    // $(".display").empty();
    var h2 = $("<h2>").addClass("project-details h2");
    h2.text($(this).attr("data-title"));
    var p = $("<p>").addClass("project-details p");
    p.text($(this).attr("data-about"));
    $(".display").append(h2, p);

})

$(".project-wrap").on("mouseleave", function() {
    console.log("mouse left: " + $(this).attr("data-title"));
    $(".display").empty();
})



})