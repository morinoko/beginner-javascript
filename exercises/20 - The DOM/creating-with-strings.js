const item = document.querySelector('.item');
const src = 'https://picsum.photos/200';
const myHMTL = `
    <div class="wrapper">
      <h2>Cute pup</h2>
      <img src"${src}" alt="" />
    </div>
`;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHMTL);
document.body.appendChild(myFragment);
