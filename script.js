const app = document.getElementById('app'); // henter ID "app" i variabelen. Denne er konstant, kan ikke endres.
let seconds = 20; // Forteller at spillet teller ned fra 20 sekunder i variabelen. Denne er global, kan endres.
let timer;        // Forteller at det er en timer i variabelen. Denne er global, kan endres.

function startGame() { // Denne forteller at spillet starter "onload", se helt nederst i scriptet.
    clearInterval(timer);
    seconds = 20;
    timer = setInterval(countSeconds, 1000);
}

function countSeconds() { // Denne funksjonen forteller at spillet teller ned.
    if (seconds > 0) {
        app.innerHTML = seconds;
        seconds--;
    } else {
        clearInterval(timer);
        app.innerHTML = "Tamagotchi gikk AWOL!";
    }
}

function showMessageAndRestart(message) { // Denne funksjonen forteller at en beskjed skal blir når man trykker på knappene. Se under.
    clearInterval(timer);
    app.innerHTML = message;
    setTimeout(() => {
        startGame();
    }, 1000);
}

function food() {
    showMessageAndRestart("NomNom"); // Funksjonen viser message "MomNom" og resetter countdown. "caller funksjonen showMessageAndRestart".
}

function play() {
    showMessageAndRestart("Weee"); // Funksjonen viser message "Wee" og resetter countdown. "caller funksjonen showMessageAndRestart".
}

function sleep() {
    showMessageAndRestart("Zzz"); // Funksjonen viser message "Zzz" og resetter countdown. "caller funksjonen showMessageAndRestart".
}

window.onload = function() { // Starter spillet onload. Som vil si at spillet atarter når vinduet åpnes i nettleseren. Eller reload av nettleseren.
    startGame();
};
