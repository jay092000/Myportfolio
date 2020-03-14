$(function() {
  var body = $("#home");
  var backgrounds = [
    "url(./img/IMG_1.JPG) center top",
    "url(./img/IMG_2.JPG) center top"
  ];
  var current = 0;
  function fade(){body.fadeOut('slow',nextBackground);}
  function nextBackground() {
    body.css(
      "background",
      backgrounds[(current = ++current % backgrounds.length)]
    );
    body.css("backgroundSize", "cover");
    body.fadeIn(3000);
    fade();
  }
  fade();
  body.css("background", backgrounds[0]);
  body.css("backgroundSize", "cover");
});
