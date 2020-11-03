/* eslint-disable */
// Not available on window, but globally scoped
const myName = 'felice';
let myPet = "fido";

// Available on window and globally scoped
var age = 100;
function sayHi() {
    console.log('Hi');
}


if (1 === 1) {
    // Cannot access let or const variables declared within a block
    // var variables can be accessed
    let cool_let = "let";
    const cool_const = "const";
    var cool_var = "var";
}

// console.log(cool_let); ERROR
// console.log(cool_const); ERROR
console.log(cool_var);

// let, const are block scoped
// var is function scoped
function isCool(name) {
    if (name === "felice") {
        var cool = true;
    }
    // Cool can be accessed because var is available inside the function
    console.log(cool);
    return cool;
}
// console.log(cool); ERROR

function isCool2(name) {
    let cool;
    if (name === "felice") {
        cool = true;
    }
    // Cool must be declared before if statement if
    // it's a let, since it won't be available outside the block
    console.log(cool);
    return cool;
}
// console.log(cool); ERROR
