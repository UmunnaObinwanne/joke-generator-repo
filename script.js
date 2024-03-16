const jokeContainer = document.getElementById('joke-board');
const btn = document.getElementById('joke-btn');
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            displayJoke(jsonResponse.joke)

        }
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

function displayJoke(joke) {
    jokeContainer.innerText = joke;
}

btn.addEventListener('click', getJoke);

