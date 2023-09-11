import { sum, tooFewArgsError, invalidArgsError } from "./sum.js";

describe("test cases for a function that calculates the sum of the parameters", () => {
  it("should throw an error when less than 1 argument is passed", () => {
    expect(() => {
      sum();
    }).toThrow(tooFewArgsError);
  });

  it("throws an error when incorrect argument type is passed", () => {
    expect(() => {
      sum(2, "str");
    }).toThrow(invalidArgsError);
  });

  it("returns the right sum for two or more valid numbers", () => {
    expect(sum(3, 4)).toBe(7);
    expect(sum(100, 200)).toBe(300);
    expect(sum(1.1, 1.1)).toBe(2.2);
  });
});
