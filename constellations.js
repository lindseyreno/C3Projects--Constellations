$(document).ready( function() {
  var info = {
    cygnus: "Cygnus is in the northern sky, visible at lattitudes between +90 degrees and -40 degrees, and is best visible at 9pm during September.  Its name is derived from the Latinized Greek word for swan.  Cygnus contains the Northern Cross and Deneb, one of the brightest stars in the night sky.  It was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy and is considered one of the 88 modern constellations by the International Astronomical Union (IAU).",
    pegasus: "Pegasus is in the northern sky, visible at lattitudes between +90 degrees and -60 degrees,  and is best visible at 9pm in October.  It is named after the the winged horse Pegasus in Greek mythology. Pegasus was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy and is considered one of the 88 modern constellations by the International Astronomical Union (IAU).",
    aquila: "Aquila is in the northern sky, visible at lattitudes between +90 degrees and -75 degrees, and is best visible at 9pm in August.  Aquila is Latin for eagle and it represents the bird who carried Zeus/Jupiter’s thunderbolts in Greco-Roman mythology.  It was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy but was mentioned earlier in the 4th and 3rd centuries BC by Eudoxus and Aratus respectively.  Aquila is considered one of the 88 modern constellations by the International Astronomical Union (IAU)."
  };

  var headline = $("h4");
  var paragraph = $(".words");
  var reset = $(".reset");


  $("body").on("click", ".cygnus", function() {
    moveClass("cygnus", "h1");
    fadeInfoIn("cygnus");
  });

  $("body").on("click", ".pegasus", function() {
    moveClass("pegasus", ".cygnus");
    fadeInfoIn("pegasus");
  });

  $("body").on("click", ".aquila", function() {
    moveClass("aquila", ".pegasus");
    fadeInfoIn("aquila");
  });

  resetView();

  function moveClass(name, placement) {
    var image = $("." + name).clone().removeClass("back");
    $("." + name).remove();
    image.insertAfter($(placement));
    $("." + name).addClass("move");
  }

  function fadeInfoIn(name) {
    var capitalized = name.charAt(0).toUpperCase() + name.substring(1);
    headline.hide().text(capitalized).fadeIn(3700);
    paragraph.hide().text(info[name]).fadeIn(3700);
    reset.hide().text("Reset").fadeIn(3700);
  }

  function resetView() {
    $("body").on("click", ".reset", function() {
      if (headline.text() === "Cygnus") {
        backClass("cygnus", "h1")
      } else if (headline.text() === "Pegasus") {
        backClass("pegasus", ".cygnus")
      } else if (headline.text() === "Aquila") {
        backClass("aquila", ".pegasus")
      }

      fadeInfoOut();
    })
  }

  function backClass(name, placement) {
    var image = $("." + name).clone().removeClass("move");
    $("." + name).remove();
    image.insertAfter(placement);
    $("." + name).addClass("back");
  }

  function fadeInfoOut() {
    headline.fadeOut(3700);
    paragraph.fadeOut(3700);
    reset.fadeOut(3700);
  }

});
