var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.$node = $('<span class="bouncyDancer"><img src="https://media.giphy.com/media/xT0GqKNXx0ENP83kXu/giphy.gif"></span>');
  this.setPosition(top, left);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer; 

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


BouncyDancer.prototype.lineUp = function () {
  Dancer.prototype.setPosition.call(this);
}

