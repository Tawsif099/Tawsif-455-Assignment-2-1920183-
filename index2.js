function calculateGamescore() {
    var gamerName = document.getElementById("gamerNameBox").value;
    var totalGamescore = parseInt(document.getElementById("totalGamingvalue").value);
    var result;

    if (totalGamescore >= 90 && totalGamescore <= 100) {
        result = "Diablo";
    } else if (totalGamescore >= 80 && totalGamescore <= 89) {
        result = "Legendary";
    } else if (totalGamescore >= 70 && totalGamescore <= 79) {
        result = "Hurricane";
    } else if (totalGamescore >= 60 && totalGamescore <= 69) {
        result = "Hunter";
    } else if (totalGamescore >= 50 && totalGamescore <= 59) {
        result = "Bounty";
    } else if (totalGamescore >= 40 && totalGamescore <= 49) {
        result = "Superstar";
    } else if (totalGamescore >= 30 && totalGamescore <= 39) {
        result = "SmartKid";
    } else if (totalGamescore >= 20 && totalGamescore <= 29) {
        result = "Regular";
    } else if (totalGamescore >= 10 && totalGamescore <= 19) {
        result = "Rookie";
    } else {
        result = "UnderDog";
    }

    displayGamescore(gamerName, result);
}

function displayGamescore(userName, value) {
    const gameScoreElement = document.getElementById("gameScore");
    gameScoreElement.innerHTML = `<h4>Hello ${userName}, your gaming skills detected as: ${value}</h4>`;
    gameScoreElement.classList.add("showGameScore");
}

