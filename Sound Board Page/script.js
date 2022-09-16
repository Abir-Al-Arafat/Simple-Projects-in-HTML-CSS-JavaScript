// keeping the sounds in a list
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    // creating a button element and keeping inside a variable
    const btn = document.createElement('button');

    // adding a class to the element
    btn.classList.add('btn');

    // adding text inside the button
    btn.innerText = sound;

    // event listener for playing audio

    btn.addEventListener('click', () => {

        // function for stopping audio
        stopAudio();

        // method to play audion
        document.getElementById(sound).play()
    })

    // adding the button to the buttons div
    document.getElementById('buttons').appendChild(btn);
})


// function for stopping audio
function stopAudio(){
    sounds.forEach(sound => {
        // keeping each audio element in variable
        const audio = document.getElementById(sound);

        // making the audio pause
        audio.pause();

        // resetting the audio to 0 
        audio.currentTime = 0;
    })
}