// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//  Unit tests for sayHello function
describe('sayHello', function (){
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it('should never return undefined', function (){
        expect(typeof sayHello).not.toBe('undefined');
    });
    it('should return a string when called', function (){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return a greeting for the input', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
        expect(sayHello("Alex")).toBe("Hello, Alex!");
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when called', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when false', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    })
    it('should return the string "Hello, World!" when null', function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function(){
        expect(sayHello('')).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!', function(){
        expect(sayHello(2)).toBe("Hello, World!");
    })
    // it('should return the string "Hello, World!', function(){
    //     expect(typeof sayHello()).toBe("array");
    // })
});
//  Unit tests for isFive() function
describe('isFive', function(){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function(){
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true', function(){
        expect(isFive(5)).toBe(true)
    });
    it('should return false when \'5\' is passed', function(){
        expect(isFive('5')).toBe(true)
    });
})
//  Unit tests for isFive() function
describe('isEven', function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean', function(){
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return true when an even number is passed', function(){
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven("8")).toBe(true);
    })
    it('should return false when "banana" is passed', function(){
        expect(isEven('banana')).toBe(false)
    });
    it('should return false when Infinity is passed', function(){
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when a boolean value is passed', function(){
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when nothing is passed', function(){
        expect(isEven()).toBe(false)
    });
})