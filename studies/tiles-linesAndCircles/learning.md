
var buttonClick = document.getElementById("animate");
buttonClick.click(function(){  movePattern() console.log('clicked #animate') });
buttonClick.clickon(function(){  movePattern() console.log('clicked #animate') });
@block: js offers button.click() method, but I needed div.clickon() method. This is because I am using a div selector function, not a button selecor function.

function movePattern () {
patternVerticalStripes.animate(2500, 'bounce').center(-10, 20).skew(500)
}
@question: why can button#animate only be triggered once?


@Block: Cannot place a pattern inside of another pattern.
@Solution: Place pattern in a rect, then clipping mask this rect, which is placed in the final pattern.


@question: what is the differnce between .defs() and .symbol()
var tile = draw.defs().groupTileMasked;

draw.use(tile).move(80,80);

@block: Symbol.add.rect.attr
@solution: instead of draw.rect, we initiate a new symbol, then add shapes to it.



@learning: rotate patterns after imposing it on a shape.
@challenge: place rect in center of tile, which slowly rotates from center transform-origin.

@learning: replace ```draw.group()``` with draw.symbol()```, which created an invisible .def() stamp.
@learning: unable to rectRotatedStripes.maskWith() ... had to symbol.maskWith()
