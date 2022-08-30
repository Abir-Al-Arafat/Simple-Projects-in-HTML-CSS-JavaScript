// storing all the boxes
const boxes = document.querySelectorAll('.box');

// adding event listener to window object to trigger the 'checkBoxes' function when scrolled
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    // taking the height where the function will trigger
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach( box => {
        // getBoundingClientRect method describes the size and position of a rectangle and its position relative to viewport
        // taking the top position of the box
        const boxTop = box.getBoundingClientRect().top


        if (boxTop<triggerBottom){
            // add 'show' class to the box if the top of the box is less than height of the window
            box.classList.add('show');
        }else{
            // remove 'show' class from the box if the top of the box is bigger than height of the window
            box.classList.remove('show');
        }
    })
}