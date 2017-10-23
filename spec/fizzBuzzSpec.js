describe("fizzBuzz", function(){
  it("should return one when given one", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("should return Fizz when given three", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("should return Buzz when given five", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("should return FizzBuzz when given fifteen", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("should return FizzBuzz when given multiple of three and five", function() {
    for (i=1; i<=100; i++){
      if (i%5 == 0 && i%3 == 0) expect(fizzBuzz(i)).toEqual("FizzBuzz");
    }
  });
});
