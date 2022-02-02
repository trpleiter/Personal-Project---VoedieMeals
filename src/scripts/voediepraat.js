import axios from "axios";

const jokeElement = document.getElementById("joke-element");

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.spoonacular.com/food/jokes/random?apiKey=f7b5d72783cd4b168e57cc54e500f7ed');
        jokeElement.innerHTML = result.data.text;
    } catch (e) {
        console.error(e);
    }
}

fetchJoke();

const fetchNextJoke = document.getElementById("joke-button");
fetchNextJoke.addEventListener('click',fetchJoke);
