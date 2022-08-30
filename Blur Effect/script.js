// taking the classes in a variable

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// function to call a function in every 30ms
let interval = setInterval(blurring, 30);

function blurring(){
    load++

    if(load>99){
        // function to stop executing setInterval function
        clearInterval(interval);
    }

    // console.log(load);

    // using innertext to get the text of percentage
    loadText.innerText = `${load}%`;
    // reducing the opacity of the percentage
    // by mapping 0-100 to 1-0
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // reducing the blur above the picture
    // by mapping 0-100 to 25-0
    bg.style.filter = `blur(${scale(load, 0, 100, 25, 0)}px)`;
}

// function to map a range of numbers to another range of numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// source of scale function

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers