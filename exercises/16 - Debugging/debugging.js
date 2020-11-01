const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // debugger;
  console.groupCollapsed(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE');
  console.groupEnd(`${person.name}`);
});

// Console Methods
console.table(people);

// group a bunch of methods into one collapsable output
function doALotOfStuff() {
  console.group('Doing stuff');
  console.log('Hey there');
  console.warn('Watch out');
  console.error('error!');
  console.groupEnd('Doing stuff');
}

// Callstack / Stack trace

// Grabbing Elements
// Use "$0" in console to reference the selected element
// $1 would be the last element selected before the current one
// $(selector) => grabs first matching element in the console
// $$(selector) => grabs all matching elements in the console

// Breakpoints

// Scope

// Network Requests
fetchDadJoke();

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
