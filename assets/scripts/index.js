//Task1
class Array {
  constructor(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length++;
    }
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i];
    }
    return this.length;
  }

  pop() {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];

    delete this[lastIndex];

    --this.length;

    return lastItem;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  concat(array) {
    let result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }

    return result;
  }

  flat(depth = 1) {
    if (depth < 0) {
      console.error("depth must be a positive value");
      return;
    }

    let newArr = new MyArray();

    if (depth === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        const buffer = this[i].flat(depth - 1);

        newArr = newArr.concat(buffer);
      } else if (this[i] !== undefined) {
        newArr.push(this[i]);
      }
    }

    return newArr;
  }

  unshift(...args) {
    let oldPartArray = new Array();
    // debugger;

    for (let i = 0; i < this.length; i++) {
      oldPartArray[i] = this[i];
      oldPartArray.length++;
    }

    this.length = 0;

    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
      this.length++;
    }

    for (
      let i = args.length, j = 0;
      i < args.length + oldPartArray.length;
      i++, j++
    ) {
      this[i] = oldPartArray[j];
      this.length++;
    }

    return this.length;
  }

  shift() {
    let lastItem = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length--;

    return lastItem;
  }
}

let array = new Array(10, "test", "test2");

console.log("task 1");
console.log(".unshift() method:");

console.log(array);
console.log(
  "Array.unshift(101, 2,'test0'), return length:",
  array.unshift(101, 2, "test0")
);
console.log(array);
// console.log('\n');

console.log(".shift() method return:", array.shift());
console.log("Array after .shift() method:", array, "\n\n");

//Task 2
class RangeValidator {
  constructor(from, to) {
    if (typeof from !== "number" || typeof to !== "number") {
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
    if (typeof from !== "number") {
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

  get to() {
    return this._to;
  }

  set to(to) {
    if (typeof to !== "number") {
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

  validate(value) {
    return this.from <= value && this.to > value;
  }
}

const num1 = 10,
  num2 = 100;

let rv = new RangeValidator(10, 100);

console.log("Task 2:");
console.log(
  "An instance of the RangeValidator class with the value from = 10, to = 100:",
  rv
);

console.log("Return value of rv.range:", rv.range);
console.log("The return value of the validate(50) method is:", rv.validate(50));
console.log("The return value of the validate(1) method is:", rv.validate(1));
console.log("\n");

//Task 3
function isThere(array, item) {
  return array.includes(item);
}

console.log("Task 3:");
console.log(
  "The isThere([10,11,12], 10) function works:",
  isThere([10, 11, 12], 10)
);
console.log(
  "The isThere([10,11,12], '10') function works:",
  isThere([10, 11, 12], "10")
);
console.log(
  "The isThere([10,11,12], 100) function works:",
  isThere([10, 11, 12], 100)
);
console.log("\n");

//Task 4
function sumOfDigits(number) {
  number += "";
  let arr = number.split("");
  let sum = arr
    .map((item) => (item = Number(item)))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  for (let i = 0; sum < 0 || sum > 9; i++) {
    sum = sumOfDigits(sum);
  }
  return sum;
}

console.log("Task 4:");
console.log("The sumOfDigits(777) function works:", sumOfDigits(777));
console.log("The sumOfDigits(1333) function works:", sumOfDigits(1333));
console.log("\n");

function getUniqueValues(...args) {
  const ArrUniqValues = [];

  for (const item of args) {
    let buffer = new Set(item);
    ArrUniqValues.push(...buffer);
  }

  return ArrUniqValues;
}

let result = getUniqueValues(
  [10, 10, 20, 1, "test", "test", 5],
  [2, 2, 0, "test3", 1, "test3"]
);

console.log("Task 5:");
console.log(
  "result of the function getUniqueValues([10, 10, 20, 1, 'test','test', 5],[2, 2, 0,'test3', 1, 'test3']):",
  result
);
