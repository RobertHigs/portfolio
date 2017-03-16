// JavaScript File

$("button").click(function() {
    //When "this" button is clicked, change the background color to pink. Then display alert for "this" button and display button's text
    $(this).css("background-color", "pink");
    alert($(this).text());
});