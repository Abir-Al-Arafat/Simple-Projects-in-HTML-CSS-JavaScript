// getting the tags
const tagsElements = document.getElementById('tags');

// getting the textarea
const choices = document.getElementById('choices');

choices.focus();

// adding event listener to get the texts of the text area
choices.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    // if enter key is pressed
    if(e.key === 'Enter'){
        // setting the timeout value and clearing the input
        setTimeout(() => {
            e.target.value = '';
        }, 10)

        randomSelect();
    }
})

function createTags(input){
    // dividing the values using comma and keeping in a list
    // using filter method to return non empty strings and trim white spaces
    // using map method to keep the individual tags trimmed
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    console.log(tags);

    // clearing the element
    tagsElements.innerHTML = '';

    tags.forEach(tag => {
        // creating a span tag
        const tagEl = document.createElement('span');

        // adding the tag class
        tagEl.classList.add('tag');

        // adding texts in different tags
        tagEl.innerText = tag;

        // appending child in the tags element
        tagsElements.appendChild(tagEl);
    });

    // console.log(input);
}

function randomSelect(){
    // number of times the tags are going to be highlighted
    const times = 28;

    // starting the animation
    // interval between lighting the tags
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();

        // add a highlight tag
        highlightTag(randomTag);

        // removing highlight tag in 100ms interval
        setTimeout(() => {
            removeHighlightTag(randomTag);
        }, 100);

    }, 100)

    // ending the animation and stick to one tag
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag)
        }, 100)
    }, times*100)

    // console.log("enter pressed");
}

// function to pick a random tag
function pickRandomTag(){
    // taking all the elements of the tag class
    const tags = document.querySelectorAll('.tag')

    // returning a random tag
    return tags[Math.floor(Math.random()*tags.length)]
}

// function to add a highlight tag
function highlightTag(tag){
    // adding highlight tag
    tag.classList.add('highlight');
}

// function to remove a highlight tag
function removeHighlightTag(tag){
    // removing highlight tag
    tag.classList.remove('highlight');
}
