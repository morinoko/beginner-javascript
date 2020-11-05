// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const imgs = document.querySelectorAll('.item img');
// console.log(p);
// console.log(divs);
//
// const heading = document.querySelector('h2');
// console.log(heading);
//
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.insertAdjacentText('beforeend', '🍕');

const pic = document.querySelector('.nice');
console.log(pic.classList);
pic.classList.add('awesome');
pic.classList.contains('nice');

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

const custom = document.querySelector('.custom');
