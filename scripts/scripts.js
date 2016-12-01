//NAVBAR FIXED FUNCTION
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('nav');
   var offset = startchange.offset();

// ANCHOR FUNCTION
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-140
        }, 1000);
        return false;
      }
    }
  });

}); //document.ready function end

// HAMBURGER MENU FUNCTION
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
