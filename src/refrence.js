var SVG = require(svg.js);

document.addEventListener('DOMContentLoaded', function() {

  if (SVG.supported) {

    requestAnimationFrame(function() {
      var poster = document.querySelector('#posterOne');
      poster.style.dipslay = "none";
      var draw = SVG('posterOne').size('100%', '100%').spof().viewbox(0, 0, 1000, 1000);
      var blackVertLine = draw
        .line("163", "0", "163", "455")
        .stroke({
          width: 9
        });

      var blackVertLine2 = draw
        .line("-42.4", "0", "-42.4", "460")
        .stroke({
          width: 9
        });

      var blackHorzLine = draw
        .line(400, 0, 400, 650)
        .stroke({
          width: 10
        })
        .rotate(90).move(564, -250);

      var redVertLine = draw
        .line("184", "0", "184", "100%")
        .stroke({
          color: 'rgba(213,23,32, 1)',
          opacity: 1,
          width: 12
        });

      var redVertLine2 = draw
        .line("118", "500", "118", "100%")
        .stroke({
          color: 'rgba(213,23,32, 1)',
          opacity: 1,
          width: 12
        });

      var blueVertLine = draw
        .line("35", "0", "35", "100%")
        .stroke({
          color: 'rgba(38,117,177, 1)',
          opacity: 1,
          width: 120
        });

      var yellowVertLine = draw
        .line("35", "500", "35", "100%")
        .stroke({
          color: 'rgba(243,235,58, 1)',
          opacity: 1,
          width: 120
        });

      var basehumTextBox = draw.rect("100%", 70).fill('rgba(255, 255, 255, 1)');
      basehumTextBox.move(-53, 430);

      var basehumText = draw.text(function(add) {
        add.tspan('basehum');
        this.font({
          size: 100,
          family: 'Baumans'
        });
        this.move(-53, 400);
      })

      var dateText = draw.text(function(add) {
        add.tspan('1971- ****');
        this.font({
          size: 55,
          family: 'Baumans'
        });
        this.move(35, 594).rotate(90);
      })

      var group = draw.group();
      group
        .add(redVertLine)
        .add(redVertLine2)
        .add(blueVertLine)
        .add(yellowVertLine)
        .add(basehumTextBox)
        .add(blackVertLine)
        .add(blackVertLine2)
        .add(basehumText)
        .add(dateText)
        .add(blackHorzLine);

      group.move(0, -100).rotate(-45);
      poster.style.dipslay = "";
    });
  } else {
    alert('SVG not supported');
  }
}, false);
