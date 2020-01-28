var should = chai.should()

describe("FizzBuzz function", function(){
    it("if num could be divided by 3 then return Fizz", function(){
        let result = fizzBuzz (6)
        result.should.be.equal('Fizz')
    })
    it("if num could be divided by 5 then return Buzz", function(){
        let result = fizzBuzz (25)
        result.should.be.equal('Buzz')
    })
    it("if num could be divided by 3 and 5 then return FizzBuzz", function(){
        let result = fizzBuzz (15)
        result.should.be.equal('FizzBuzz')
    })
    it("if num could not be divided by 3 and 5 then return num", function(){
        let result = fizzBuzz (7)
        result.should.be.equal(7)
    })
})