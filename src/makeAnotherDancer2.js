var makeBouncyDancer = function (top, left, timeBetweenSteps) {
	makeDancer.call(this, top, left, timeBetweenSteps)
	this.$node = $('<span class="dancer2"></span>');
	this.setPosition(top, left);
}
makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  this.$node.fadeToggle(2000);
  makeDancer.prototype.step.call(this);
}

