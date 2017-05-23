var newDancer1 = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.$node = $('<span class="dancer1"></span>');
};

newDancer1.prototype = Object.create(Dancer.prototype);
newDancer1.prototype.constructor = newDancer1; 

newDancer1.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};



