// keeping the progress id in a variable
const progress = document.getElementById('progress');

// keeping the prev id in a variable
const prev = document.getElementById('prev')

// keeping the next id in a variable
const next = document.getElementById('next');

// keeping all the circle classes in a variable
const circles = document.querySelectorAll('.circle');

// variable to keep track of active class
let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++;

    // checking if active variable surpass the length
    if(currentActive>circles.length){
        currentActive=circles.length;
    }
    
    update();
})

prev.addEventListener('click', ()=>{
    currentActive--;

    // checking if active variable goes below 0

    if(currentActive<1){
        currentActive=1;
    }

    update();
})

// funtion to update the color of the progress bar
function update(){
    // running a foreach loop on the circles array to add or remove the active classes
    circles.forEach((circle, index) => {
        if(index<currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    // keeping all the active classes in a variable
    const actives = document.querySelectorAll('.active');

    // increasing the width of the progress line
    progress.style.width = (actives.length-1)/(circles.length-1)*100 + "%"

    // condition to enable or disable the buttons according to the current active variable
    if(currentActive===1){
        prev.disabled = true;
    }
    else if(currentActive===circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}