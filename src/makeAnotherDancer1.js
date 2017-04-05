var makePopDancer = function (top, left, timeBetweenSteps) {
	makeDancer.call(this, top, left, timeBetweenSteps)
	this.$node = $('<span class="dancer1"></span>');
	this.setPosition(top, left);
}
makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

//var popDancer = new makeBlinkyDancer(top, left, timeBetweenSteps);

makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
}

// makePopDancer.prototype.rotate = function () {
//   var rot = {
//   	transform: 'rotate(360deg)'
//   }
//   this.$node.css(rot);
// }



/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//var blinkyDancer = new makeBlinkyDancer(top, left, timeBetweenSteps);


makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  makeDancer.prototype.step.call(this);
  
}
*/