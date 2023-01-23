const assert = require('assert');

const goodbye = require('../problems/01-goodbye');

describe('goodbye()', function () {
  it(`should print bye along with the name being passed into the function`, function() {
    const test1 = goodbye("Daniel");
    const test2 = goodbye("Mark");
    const test3 = goodbye("Beyonce");

    const result1 = "Bye Daniel.";    
    const result2 = "Bye Mark.";
    const result3 = "Bye Beyonce.";

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });
});
