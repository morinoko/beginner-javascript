const button = document.querySelector('.button');
const coolButton = document.querySelector('.coolButton');

function handleClick() {
  console.log('clicked');
}

button.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick);

// Listen on multiple items
function buyItem() {
  console.log('Buying item');
}

function attachEventListener(button) {
  button.addEventListener('click', buyItem);
}

const buyButtons = document.querySelectorAll('button.buy');

buyButtons.forEach((button) => {
  button.addEventListener('click', buyItem);
});
