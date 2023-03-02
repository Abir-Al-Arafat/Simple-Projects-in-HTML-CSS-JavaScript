const open = document.getElementById('open');
const close = document.getElementById('close');

const container = document.querySelector('.container');

// adds class for rotating
open.addEventListener('click', () => container.classList.add('show-nav'));

// removes class for rotating
close.addEventListener('click', () => container.classList.remove('show-nav'));