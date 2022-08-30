// taking the left class
const left = document.querySelector('.left');

// taking the right class
const right = document.querySelector('.right');

// taking the container class
const container = document.querySelector('.container');

// -------------- for the left picture --------------

// using event listener to add class when hovered
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))

// using event listener to remove class when NOT hovered
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// -------------- for the right picture --------------

// using event listener to add class when hovered
right.addEventListener('mouseenter', ()=>container.classList.add('hover-right'));

// using event listener to remove class when NOT hovered
right.addEventListener('mouseleave', ()=> container.classList.remove('hover-right'));