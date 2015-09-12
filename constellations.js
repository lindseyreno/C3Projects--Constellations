$(document).ready( function() {
  console.log("ready!");
  var cygnusInfo  = "Cygnus is in the northern sky, visible at lattitudes between +90 degrees and -40 degrees, and is best visible at 9pm during September.  Its name is derived from the Latinized Greek word for swan.  Cygnus contains the Northern Cross and Deneb, one of the brightest stars in the night sky.  It was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy and is considered one of the 88 modern constellations by the International Astronomical Union (IAU).";
  var pegasusInfo = "Pegasus is in the northern sky, visible at lattitudes between +90 degrees and -60 degrees,  and is best visible at 9pm in October.  It is named after the the winged horse Pegasus in Greek mythology. Pegasus was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy and is considered one of the 88 modern constellations by the International Astronomical Union (IAU).";

  $(".const.cygnus").click( function () {
    $(this).toggleClass("move", true);
    var headline = $(".info").find("h4");
    var paragraph = $(".info").find("p");
    headline.hide().text("Cygnus").fadeIn(3700);
    paragraph.hide().text(cygnusInfo).fadeIn(3700);
  });

  $(".const.pegasus").click( function () {
    $(this).toggleClass("move", true);
    var headline = $(".info").find("h4");
    var paragraph = $(".info").find("p");
    headline.hide().text("Pegasus").fadeIn(3700);
    paragraph.hide().text(pegasusInfo).fadeIn(3700);
  });

});
