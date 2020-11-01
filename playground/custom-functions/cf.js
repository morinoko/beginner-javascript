function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal = calculateBill(100);
console.log(myTotal);

const myBill = calculateBill(100, undefined, 0.2);
console.log(`My bill is $${myBill}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Felice');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('Felice')));
