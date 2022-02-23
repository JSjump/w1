const Counter = artifacts.require("Counter");

contract("Counter", function (accounts) {
  var counterInstance;
  it("Counter", function () {
    return Counter.deployed(1)
      .then(function (instance) {
        counterInstance = instance;
        return counterInstance.add();
      })
      .then(function () {
        return counterInstance.count();
      })
      .then(function (count) {
        console.log("---count", count);
        assert.equal(count, 2);
      });
  });
});
