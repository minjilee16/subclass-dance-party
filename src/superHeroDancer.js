var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.$node = $('<span class="superHeroDancer"><img src="http://bestanimations.com/Signs&Shapes/Hazards/hazard-poison-sign-animated-gif3.gif" ></span>');
  this.setPosition(top, left);
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer; 

SuperHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


SuperHeroDancer.prototype.lineUp = function () {
  Dancer.prototype.setPosition.call(this);
}

