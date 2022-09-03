// getting all the buttons in an array
const toggles = document.querySelectorAll('.faq-toggle')

// running a for loop on the button array
// adding an event listener to the button which is clicked
toggles.forEach(pressed => {
    pressed.addEventListener('click', ()=>{
        // toggling the active class of the parent of the button
        pressed.parentNode.classList.toggle('active');
    })
})