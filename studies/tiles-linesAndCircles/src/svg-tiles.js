console.log('svg-tiles');
//
// // var svgJs = require(svg.js);


document.addEventListener('DOMContentLoaded', function() {

  if (SVG.supported) {

    requestAnimationFrame(function() {

      var poster = document.querySelector('#drawing');
      poster.style.dipslay = "none";

      var draw = SVG('drawing').size('100%', '100%').spof().viewbox(0, 0, 400, 150);


      var bg = draw.symbol()
      bg.rect(100, 75).attr({fill:'rgba(38,117,177, 1)'})
      // DEFS

      var patternVerticalStripes = draw.pattern(200, 15, function(add) {
        add.rect(200,6.8).fill('#eeeeee')
      });

      var bgStripesAndOverlay = draw.symbol()
      bgStripesAndOverlay.rect(200,200).attr({ fill: patternVerticalStripes })
      bgStripesAndOverlay.rect(200,15).addClass('lead').attr({fill:'rgba(38,117,177, 1)'})
      bgStripesAndOverlay.rect(200,30).move(0,104).addClass('lead').attr({ fill:'rgba(38,117,177, 1)' })
      // @Challenge: animate bgStripesAndOverlay.move(x) value.

      var tileLL = draw.use(bgStripesAndOverlay).addClass('rotate').move(-25,-25).rotate(216.5);
      // @challenge: rotate rectRotatedStripes $@%!

      var tileLR = tileLL.move(10,30);
      // Rect for LR
      var bgStripesAndOverlayRotated = draw.use(bgStripesAndOverlay).addClass('rotate').attr({ fill: patternVerticalStripes }).move(-25,-25).rotate(323.5);

      var symbolTileTL = draw.symbol();
      symbolTileTL
        .add(draw.use(bg))
        .add(tileLR)
        .maskWith(draw.rect(100,75).fill('#ffffff'));

      var symbolTileTR = draw.symbol();
      symbolTileTR
        .add(draw.use(bg))
        .add(bgStripesAndOverlayRotated)
        .maskWith(draw.rect(100,75).fill('#ffffff'));


        var tileRight = draw.use(symbolTileTL).move(100,0)
        var tileLeft = draw.use(symbolTileTR).move(0,0).rotate(0)

        var tileBL = draw.use(symbolTileTL).move(0,75)
        var tileBR = draw.use(symbolTileTR).move(100,75)


      var patternTileStrips = draw.pattern(200,150, function(add){ });
      patternTileStrips.add(tileLeft)
      patternTileStrips.add(tileRight)
      patternTileStrips.add(tileBL)
      patternTileStrips.add(tileBR)

      var containerTilesStripes = draw.rect(700,600).attr({ fill: patternTileStrips });

      // var groupTileMaskedz = yum2.maskWith(draw.rect(100,75).fill('#ffffff'));
      // groupTileMaskedz.addClass('rotate').move(100,0).rotate(180);
      // groupTile.maskWith(draw.rect(100,75).fill('#ffffff').move);

      // var tile = draw.defs().groupTileMasked;
      //
      // draw.use(tile).move(80,80);



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


      // @question: what is the differnce between .defs() and .symbol()
      // var tile = draw.defs().groupTileMasked;
      //
      // draw.use(tile).move(80,80);

      // @block: Symbol.add.rect.attr
      // @solution: instead of draw.rect, we initiate a new symbol, then add shapes to it.



      //@learning: rotate patterns after imposing it on a shape.
      //@challenge: place rect in center of tile, which slowly rotates from center transform-origin.

      // @learning: replace ```draw.group()``` with draw.symbol()```, which created an invisible .def() stamp.
      // @learning: unable to rectRotatedStripes.maskWith() ... had to symbol.maskWith()



      // @syntaxSugar: @Old
      // // var baseBackGround = draw.rect(100, 75).attr({fill:'rgba(38,117,177, .3)'});
      // // var bg = draw.symbol();
      // // // bg.add(baseBackGround);
      // @new
      // // var bg = draw.symbol();
      // // bg.rect(100, 75).attr({fill:'rgba(38,117,177, .3)'})
