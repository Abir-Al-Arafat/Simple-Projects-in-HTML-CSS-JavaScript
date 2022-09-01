// getting the joke id and tag
const joke = document.getElementById('joke')

// getting the button to fetch jokes
const jokeBtn = document.getElementById('jokeBtn')

// using event listener on a button to call the function that generate jokes
jokeBtn.addEventListener('click', generateJoke);

generateJoke()

// function to fetch jokes
// using ASYNC/AWAIT
// function is labeled as async since 'await' was used inside of the function
async function generateJoke(){
    const config = {
        headers:{
            Accept: 'application/json',
        },
    };
    // keeping the fetched json file in a variable
    // using 'await' to wait for the function to complete fetching
    const res = await fetch('https://icanhazdadjoke.com', config);

    // using 'await' since it returns a promise
    // keeping the json file in a variable
    const data = await res.json()

    // printing the jokes on the dom
    joke.innerHTML = data.joke
}


// function to fetch jokes
// using .then
// function generateJoke(){
//     // setting a header object in the config variable
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }

//     // in fetch function passing the address as argument from where the contents will be fetched and passing another 'config' argument to get the content as json file
//     // using 'then' to get the json file
//     // using 'then' again to print the json in console
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data)=>console.log(data))

//     // in fetch function passing the address as argument from where the contents will be fetched and passing another 'config' argument to get the content as json file
//     // using 'then' to get the json file
//     // using 'then' again to print the jokes on the dom
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke
//     })
// }