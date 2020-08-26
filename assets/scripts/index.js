'use strict'

class Array{
    constructor(...args){
        this.length = 0;
        for (let i = 0; i < args.length; i++) {
          this[this.length] = args[i];
          this.length++;
        }    
    }


    push(...args) {
        for (let i = 0; i < args.length; i++) {
          this[this.length++] = args[i];
          return this.length;
        }
      };
    
      pop() {
        const lastIndex = this.length - 1;
        const lastItem = this[lastIndex];
    
        delete this[lastIndex];
    
        --this.length;
    
        return lastItem;
      };
    
      forEach(callback) {
        for (let i = 0; i < this.length; i++) {
          callback(this[i], i, this);
        }
      };
    
      concat(array){
        let result = new MyArray();
    
        for (let i = 0; i < this.length; i++) {
          result.push(this[i]);
        }
    
        for (let i = 0; i < array.length; i++) {
          result.push(array[i]);
        }
    
        return result;
      };
    
      flat(depth = 1){
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
      };

      unshift(...args){
        let oldPartArray = new Array();
        // debugger;

        for(let i = 0; i < this.length; i++){
            oldPartArray[i] = this[i];
            oldPartArray.length++;
        }

        this.length = 0;

        for(let i = 0; i < args.length; i++){
            this[i] = args[i];
            this.length++;
        }

        for(let i = args.length, j = 0; i < (args.length + oldPartArray.length); i++, j++){
            this[i] = oldPartArray[j];
            this.length++;
        }

        return this.length;
      }

      shift(){
          let lastItem = this[0];

          for(let i = 0; i < this.length; i++){
              this[i] = this[i + 1];
          }
          
          this.length--;

          return lastItem;
      }
      
}

let array = new Array(10, 'test', 'test2');

console.log('.unshift() method:');

console.log(array);
console.log('Array.unshift(101, 2,\'test0\'), return length:', array.unshift(101, 2,'test0'));
console.log(array);
console.log('\n');

console.log('.shift() method:');

console.log(array.shift());
console.log(array);
 