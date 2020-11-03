// Hoisting moves function to top
sayHi();

function sayHi() {
  console.log('HI');
}

// Hoisting does not move arrow functions like below to the top
// sayHi2(); ERROR
const sayHi2 = () => {
  console.log('hi');
};

// Variable declaration is hoisted, BUT not assignment
console.log(age); // undefined
var age = 10;
