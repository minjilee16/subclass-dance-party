describe('newDancer2', function() {

  var newDancer2, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    newDancer2 = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(newDancer2.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(newDancer2.$node, 'toggle');
    newDancer2.step();
    expect(newDancer2.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(newDancer2, 'step');
      expect(newDancer2.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(newDancer2.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(newDancer2.step.callCount).to.be.equal(2);
    });
  });
});
