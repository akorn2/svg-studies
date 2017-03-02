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

      var rectRotatedStripes = draw.circle(150).addClass('rotate').attr({ fill: patternVerticalStripes }).move(-25,-25).rotate(216.5);
      //@learning: rotate patterns after imposing it on a shape.
      //@challenge: place rect in center of tile, which slowly rotates from center transform-origin.


        var groupTile = draw.group();
        groupTile
          .add(baseBackGround)
          .add(rectRotatedStripes);

        var groupTileMasked = groupTile.maskWith(draw.rect(100,75).fill('#ffffff'));

        // groupTile.maskWith(draw.rect(100,75).fill('#ffffff').move);

        var tile = draw.defs().groupTileMasked;

        draw.use(tile).move(80,80);







      // var buttonClick = document.getElementById("animate");
      // buttonClick.click(function(){  movePattern() console.log('clicked #animate') });
      // buttonClick.clickon(function(){  movePattern() console.log('clicked #animate') });
      //@block: js offers button.click() method, but I needed div.clickon() method. This is because I am using a div selector function, not a button selecor function.

      // function movePattern () {
      //   patternVerticalStripes.animate(2500, 'bounce').center(-10, 20).skew(500)
      // }
      //@question: why can button#animate only be triggered once?

      poster.style.dipslay = "";
    });
  } else {
    alert('SVG not supported');
  }
}, false);


      // @Block: Cannot place a pattern inside of another pattern.
      // @Solution: Place pattern in a rect, then clipping mask this rect, which is placed in the final pattern.
