// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const one = document.createElement('li');
one.textContent = 'one';
const two = document.createElement('li');
two.textContent = 'two';
const three = document.createElement('li');
three.textContent = 'three';

ul.appendChild(one);
ul.appendChild(two);
ul.appendChild(three);
div.insertAdjacentElement('beforeend', ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.insertAdjacentElement('beforeend', img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const HTML = `
    <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
const fragmentDiv = document
  .createRange()
  .createContextualFragment(HTML)
  .querySelector('div');

ul.insertAdjacentElement('beforebegin', fragmentDiv);

// add a class to the second paragraph called warning
// remove the first paragraph
const lastP = fragmentDiv.lastElementChild;
lastP.classList.add('warning');
const firstP = fragmentDiv.firstElementChild;
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const HTML = `
     <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
        <button class="deleteButton">Delete</button>
     </div>
  `;

  return document
    .createRange()
    .createContextualFragment(HTML)
    .querySelector('.playerCard');
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const mario = generatePlayerCard('Mario', '35', '1 ft');
const luigi = generatePlayerCard('Luigi', '35', '2 ft');
const toad = generatePlayerCard('Toad', '20', '1.5 ft');
const peach = generatePlayerCard('Peach', '25', '2 ft');

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
cardDiv.appendChild(mario);
cardDiv.appendChild(luigi);
cardDiv.appendChild(toad);
cardDiv.appendChild(peach);

div.insertAdjacentElement('beforebegin', cardDiv);

// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('.deleteButton');

function removeButton(e) {
  e.target.closest('.playerCard').remove();
}
buttons.forEach((button) => button.addEventListener('click', removeButton));
