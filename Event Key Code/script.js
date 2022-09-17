// getting the element that contains everything
const insert = document.getElementById('insert')

// window object to get the values of keys of keyboard 
// keydown: keyboard event to get the key value of the keyboard
window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class="key">
            ${event.key === " " ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `
    console.log(event)
})

