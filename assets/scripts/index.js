"use strict";

class RangeValidator {
  constructor(from, to) {
    if (typeof from !== 'number' || typeof to !== 'number') {
      console.log(from instanceof Number);
      throw new TypeError("Value must be a number");
    }

    if (!Number.isInteger(from) || !Number.isInteger(to)) {
      throw new RangeError("Value mast be an integer");
    }

    if (from > to) {
      throw new RangeError("The second value must be greater than the first");
    }

    this._from = from;
    this._to = to;
  }

  get from() {
    return this._from;
  }

  set from(from) {
    if (typeof from !== 'number') {
      throw new TypeError("Value must be a number");
    }

    if (!Number.isInteger(from)) {
      throw new RangeError("Value mast be an integer");
    }

    if (from > this.to) {
      throw new RangeError("from must be less that the to");
    }

    this._from = from;
  }

  get to(){
    return this._to;
  }
  
  set to(to) {
    if (typeof to !== 'number') {
      throw new TypeError("Value must be a number");
    }

    if (!Number.isInteger(to)) {
      throw new RangeError("Value mast be an integer");
    }

    if (this.from > to) {
      throw new RangeError("from must be less that the to");
    }

    this._to = to;
  }


  get range() {
    return [this.from, this.to];
  }

  validate(value){
    return (this.from <= value && this.to > value);
  }
}

const num1 = 10, num2 = 100;

let rv = new RangeValidator(10, 100);

console.log('An instance of the RangeValidation class with the value from = 10, to = 100:', rv);

console.log('Return value of rv.range:',rv.range);
console.log('The return value of the validate(50) method is:',rv.validate(50));
console.log('The return value of the validate(1) method is:',rv.validate(1));
