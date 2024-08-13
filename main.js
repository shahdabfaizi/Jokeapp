import "./style.scss";

async function joke() {
    try {
        const response = await fetch("https://witzapi.de/api/joke");
        const result = await response.json();
        const jokeElement = document.getElementById('jokeText');
        jokeElement.textContent = result.joke || "Kein Witz verfügbar";
        
        console.log(result);
    } catch (error) {
        console.error("Fehler beim Abrufen des Witzes:", error);
    }
}
