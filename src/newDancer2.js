var newDancer2 = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.$node = $('<span class="dancer2"></span>');
  // this.step();
  this.setPosition(top, left);
};

newDancer2.prototype = Object.create(Dancer.prototype);
newDancer2.prototype.constructor = newDancer2; 

newDancer2.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};



