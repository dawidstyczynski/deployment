var assert = require("assert");
var stringModule = require("../src/StringModule");

describe("Str", function () {
    describe("concat", function () {
      it("should return the concatinated string of two values", function () {
            var input1 = 'a'
            var input2 = 'b'
            assert.equal(stringModule.concat(input1,input2), input1 + input2 + 'c');
      });
    });
  });