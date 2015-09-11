$(document).ready( function() {
  console.log("ready!");
  var cygnusInfo  = "Cygnus is in the northern sky, visible at lattitudes between +90 degrees and -40 degrees, and is best visible at 9pm during September.  Its name is derived from the Latinized Greek word for swan.  Cygnus contains the Northern Cross and Deneb, one of the brightest stars in the night sky.  It was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy and is considered one of the 88 modern constellations by the International Astronomical Union (IAU).";

  $(".const.cygnus").click( function () {
    $(this).toggleClass("move");
    var headline = $(".info").find("h4");
    var paragraph = $(".info").find("p");
    headline.hide().text("Cygnus").fadeIn(3300);
    paragraph.hide().text(cygnusInfo).fadeIn(3300);
  });


});
