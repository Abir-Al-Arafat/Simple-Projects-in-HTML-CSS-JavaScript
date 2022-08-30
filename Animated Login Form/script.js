// taking all the labels in an array

const labels = document.querySelectorAll('.form-control label');

// running a for loop in the array to get individual labels
labels.forEach(label => {
    // splitting the characters in the label in an array using split() method

    // mapping the characters into span tag as an array using map() method

    // converting the array to string using join() method
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) =>  `<span style="transition-delay: ${idx*40}ms">${letter}</span>`)
    .join('');
    
})