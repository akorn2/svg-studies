// // console.log('loaded checkers');
// //
// // // var svgJs = require(svg.js);
//
//
// document.addEventListener('DOMContentLoaded', function() {
//
//   if (SVG.supported) {
//
//     requestAnimationFrame(function() {
//
//       var poster = document.querySelector('#checkers');
//       poster.style.dipslay = "none";
//
//       var draw = SVG('drawing').size('100%', '100%').spof().viewbox(0, 0, 1000, 1000);
//
//       var buttonClick = document.getElementById("animate");
//       buttonClick.onclick = function(){  movePattern() };
//       //@block: js offers button.click() method, yet I needed div.clickon() method. This is because I am using a div selector function, not a button selecor function.
//
//       function movePattern () {
//         pattern.animate(2500, 'bounce').center(-10, 20).skew(500)
//       }
//       //@question: why can button#animate only be triggered once?
//
//       var pattern = draw.pattern(50, 50, function(add) {
//         add.rect(25,25).fill('#333333').move(25,0)
//         add.rect(25,25).fill('#333333').move(0,25)
//       });
//
//       // var click = document.getElementById("click");
//
//       var backGround = draw.rect(1000, 1000).attr({fill:'rgba(38,117,177, .5)'});
//       var repeatingPatterns = draw.rect(1000, 1000).attr({fill:pattern, opacity:.4});
//       //@block: fill value needs to be a string.
//
//
//       var group = draw.group();
//       group
//         .add(repeatingPatterns)
//         .add();
//
//       // group.move(0, 0).rotate(90);
//       poster.style.dipslay = "";
//     });
//   } else {
//     alert('SVG not supported');
//   }
// }, false);
