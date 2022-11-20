


$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      //checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 300) { 
          document.getElementById("myTopnav").style.cssText = 
          `
          background-color: white;
          transition: 1s;
          border-bottom: 1px solid black;
          `;
          document.querySelectorAll('a').forEach(e => e.style.color = "black");
      } else {
        document.getElementById("myTopnav").style.cssText = 
        `
        background-color: transparent;
        border: none;
        `;
          document.querySelectorAll('a').forEach(e => e.style.color = "white");
      }
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }