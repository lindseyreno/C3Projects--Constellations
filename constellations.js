$(document).ready( function() {
  console.log("ready!");
  var info = {
    cygnus: "Cygnus is in the northern sky, visible at lattitudes between +90 degrees and -40 degrees, and is best visible at 9pm during September.  Its name is derived from the Latinized Greek word for swan.  Cygnus contains the Northern Cross and Deneb, one of the brightest stars in the night sky.  It was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy and is considered one of the 88 modern constellations by the International Astronomical Union (IAU).",
    pegasus: "Pegasus is in the northern sky, visible at lattitudes between +90 degrees and -60 degrees,  and is best visible at 9pm in October.  It is named after the the winged horse Pegasus in Greek mythology. Pegasus was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy and is considered one of the 88 modern constellations by the International Astronomical Union (IAU).",
    aquila: "Aquila is in the northern sky, visible at lattitudes between +90 degrees and -75 degrees, and is best visible at 9pm in August.  Aquila is Latin for eagle and it represents the bird who carried Zeus/Jupiter’s thunderbolts in Greco-Roman mythology.  It was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy but was mentioned earlier in the 4th and 3rd centuries BC by Eudoxus and Aratus respectively.  Aquila is considered one of the 88 modern constellations by the International Astronomical Union (IAU)."
  };

  var headline = $(".info").find("h4");
  var paragraph = $(".info").find("p");

  function moveTo(name) {
    $(".const." + name).click(function() {
      $(this).toggleClass("move", true);
      var capitalized = name.charAt(0).toUpperCase() + name.substring(1);
      headline.hide().text(capitalized).fadeIn(3700);
      paragraph.hide().text(info[name]).fadeIn(3700);
    });
  };

  moveTo("cygnus");
  moveTo("pegasus");
  moveTo("aquila");

});
