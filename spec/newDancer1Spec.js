describe('newDancer1', function() {

  var newDancer1, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    newDancer1 = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(newDancer1.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(newDancer1.$node, 'toggle');
    newDancer1.step();
    expect(newDancer1.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(newDancer1, 'step');
      expect(newDancer1.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(newDancer1.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(newDancer1.step.callCount).to.be.equal(2);
    });
  });
});
