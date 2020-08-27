"use strict";

//Task 3
function isThere(array, item){
  return array.includes(item);
}

console.log('Task 3:')
console.log('The isThere([10,11,12], 10) function works:', isThere([10,11,12], 10));
console.log('The isThere([10,11,12], \'10\') function works:', isThere([10,11,12], '10'));
console.log('The isThere([10,11,12], 100) function works:', isThere([10,11,12], 100));
console.log('\n');


//Task 4
function sumOfDigits(number){
  number += '';
  let arr = number.split('');
  let sum = arr.map(item => item = Number(item)).reduce((accumulator, currentValue) => accumulator + currentValue);

  for(let i = 0; sum < 0 || sum > 9; i++){
    sum = sumOfDigits(sum);
  }
  return sum;
}

console.log('Task 4:')
console.log('The sumOfDigits(777) function works:', sumOfDigits(777));
console.log('The sumOfDigits(1333) function works:', sumOfDigits(1333));
console.log('\n');



function getUniqueValues(...args){
  const ArrUniqValues = [];

  for(const item of args){
    let buffer = new Set(item);
    ArrUniqValues.push(...buffer)
  }

  return ArrUniqValues;
}

let result = getUniqueValues([10, 10, 20, 1, 'test','test', 5],[2, 2, 0,'test3', 1, 'test3']);

console.log('Task 5:');
console.log('result of the function getUniqueValues([10, 10, 20, 1, \'test\',\'test\', 5],[2, 2, 0,\'test3\', 1, \'test3\']):', result);
