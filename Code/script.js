//----------------------------- Icones ----------------------------
// Cursor
document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}

// Seta
$(document).scroll(function() {

    seta = document.getElementById("arrowIcon");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= window.innerHeight) {
            seta.className = "show"
        } else {
            seta.className = "hide"
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});


//----------------------------- Menu ----------------------------
// Show menu
$(document).scroll(function() {

  menu = document.getElementById("menu");

  var scroll = function () {
      var y = window.scrollY;
      if (y >= window.innerHeight) {
          menu.className = "menu_show"
      } else {
          menu.className = "menu_hide"
      }
  };

  window.addEventListener("scroll", scroll);
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


//----------------------------- Messy Text ----------------------------
// Rotate Letters
$(document).scroll(function() {

    m = document.getElementById("messy_m");
    e = document.getElementById("messy_e");
    s1 = document.getElementById("messy_s1");
    s2 = document.getElementById("messy_s2");
    y = document.getElementById("messy_y");

    var myScrollFunc = function () {
        var height = window.scrollY;
        if (height >= window.innerHeight) {
            m.style.transform = "rotate(18.48deg)";
            e.style.transform = "rotate(-30.94deg)";
            s1.style.transform = "rotate(-43.1deg)";
            s2.style.transform = "rotate(9.07deg)";
            y.style.transform = "rotate(-28.9deg)";
        } else {
          m.style.transform = "rotate(0deg)";
          e.style.transform = "rotate(0deg)";
          s1.style.transform = "rotate(0deg)";
          s2.style.transform = "rotate(0deg)";
          y.style.transform = "rotate(0deg)";
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});
