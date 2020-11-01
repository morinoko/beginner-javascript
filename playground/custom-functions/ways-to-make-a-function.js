// Regular function
// Hoisted to the top!
// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// Anon Function (won't work as-is)
// function (name) {
//   return `Dr. ${name}`;
// }

// Function Expression
// These are not hoisted to the top!
const doctorize2 = function (name) {
  return `Dr. ${name}`;
};

// Arrow function
// Don't have own scope in reference to this keyword
// Very concise

const inchToCM = function (inches) {
  return inches * 2.54;
};

/* eslint-disable */
const inchToCM2 = (inches) => {
  return inches * 2.54;
}

const inchToCM3 = (inches) => inches * 2.54;
console.log(inchToCM3(10));
const inchToCM4 = inches => inches * 2.54;

function add(a, b = 3) {
    const total = a + b;
    return total;
}
console.log(add(1));

const add2 = (a, b = 3) => a + b;
console.log(add2(1));

// Returning an object
function makeABaby(first, last) {
    const baby = {
        first: first,
        last: last
    }
    return baby;
}
console.log(makeABaby("Ken", "Smith"));

const makeABaby2 = (first, last) => ({ first: first, last: last });
console.log(makeABaby2("Ken2", "Smith"));

// IIFE
// Immediately Invoked Function Expression
(function(age) {
    console.log('Running the anon function');
    return `You are cool and age ${age}`;
})(10);

// Methods
// Functions on an object
// video 27:30
const ria = {
    name: "Ria",
    // Method
    sayHi: function () {
        console.log('Hi Ria');
        return "Hi Ria";
    },
    // Short-hand method
    yellHi() {
        console.log("HEY RIA");
    },
    // Arrow method
    whisperHi: () => {
        console.log("Hiii riaaa");
    }
}

// Callback functions
// Happen depending on some event
const button = document.querySelector('.click-me');

// button.addEventListener('click', ria.yellHi);

function handleClick() {
    console.log('Great clicking!');
}

// Define callback outside of event listener
button.addEventListener('click', handleClick);

// Define callback on the event listener
button.addEventListener('click', function() {
    console.log('Defined in the event listener')
})

// Timer Callback
// Takes a callback and the amount of time to pass before running callback
setTimeout(ria.sayHi, 1000);

setTimeout(function () {
    console.log("Timeout function!")
}, 2000);
