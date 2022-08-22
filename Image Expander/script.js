// keeping all the panel classes in a variable
const panels = document.querySelectorAll('.panel');

// running a for loop on array of panels to use event listener
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
});

// removes active classes
function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}