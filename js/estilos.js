// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var menuPrincipal = document.getElementById("menuPrincipal");

// Get the offset position of the navbar
var sticky = menuPrincipal.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    menuPrincipal.classList.add("sticky")
  } else {
    menuPrincipal.classList.remove("sticky");
  }
}


