const myParagraph = document.createElement('p');
myParagraph.textContent = "I'm a paragraph!";
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

// Add to page by grabbing element and appending
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// insertAdjacentElement is a good choice too
const heading = document.createElement('h2');
heading.textContent = 'Cool things';
myDiv.insertAdjacentElement('afterbegin', heading);

const ul = document.createElement('ul');
const one = document.createElement('li');
one.textContent = 'one';
const two = document.createElement('li');
two.textContent = 'two';
const three = document.createElement('li');
three.textContent = 'three';

ul.insertAdjacentElement('afterbegin', one);
one.insertAdjacentElement('afterend', two);
ul.insertAdjacentElement('beforeend', three);
myDiv.appendChild(ul);
