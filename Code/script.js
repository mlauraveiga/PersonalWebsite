//----------------------------- Menu ----------------------------
// Seta
$(document).scroll(function() {

    seta = document.getElementById("arrowIcon");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 200) {
            seta.className = "show"
        } else {
            seta.className = "hide"
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});


//----------------------------- Landing Page ----------------------------
// Change text
var text = [
  "web designer",
  "front-end dev",
  "3D designer",
  "cartoonist",
  "photographer",
  "graphic designer",
];
var counter = 0;
var elem = $("#landingpage_text_prof");

setInterval(change, 2500);

function change() {
  elem.fadeOut(function () {
    elem.html(text[counter]);
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
    elem.fadeIn();
  });
}