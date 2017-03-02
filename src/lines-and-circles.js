console.log('loaded checkers');
//
// // var svgJs = require(svg.js);


document.addEventListener('DOMContentLoaded', function() {

  if (SVG.supported) {

    requestAnimationFrame(function() {

      var poster = document.querySelector('#drawing');
      poster.style.dipslay = "none";

      var draw = SVG('drawing').size('100%', '100%').spof().viewbox(0, 0, 400, 150);

      var baseBackGround = draw.rect(100, 100).attr({fill:'rgba(38,117,177, .3)'});

      // DEFS

      var patternVerticalStripes = draw.pattern(150, 15, function(add) {
        add.rect(150,6.8).fill('#eeeeee')
      });



      var rectRotatedStripes = draw.rect(150, 150).attr({ fill:patternVerticalStripes}).move(-25,-25).rotate(216.5);
      //@learning: rotate patterns after imposing it on a shape.

      // var group = draw.group();
      // group
      //   .add(baseBackGround)
      //   .add(rectRotatedStripes);

        // var test = draw.rect(150,45).fill('#ffffff');

        rectRotatedStripes.maskWith(draw.rect(100,75).fill('#ffffff'));

      // var click = document.getElementById("click");

      var buttonClick = document.getElementById("animate");
      buttonClick.onclick = function(){  movePattern() };
      //@block: js offers button.click() method, yet I needed div.clickon() method. This is because I am using a div selector function, not a button selecor function.

      function movePattern () {
        pattern.animate(2500, 'bounce').center(-10, 20).skew(500)
      }
      //@question: why can button#animate only be triggered once?



      // group.move(0, 0).rotate(90);
      poster.style.dipslay = "";
    });
  } else {
    alert('SVG not supported');
  }
}, false);


      // @Block: Cannot place a pattern inside of another pattern.
      // @Solution: Place pattern in a rect, then clipping mask this rect, which is placed in the final pattern.
