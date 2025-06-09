let footballTeam = {
    team: "The Eagles",
    year: 2023,
    headCoach: "John Doe",
    players: [
        {
            name: "Alice Smith",
            position: "forward",
            isCaptain: true,
        },
        {
            name: "Bob Johnson",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Charlie Brown",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Diana Prince",
            position: "goalkeeper",
            isCaptain: false,
        },
    ],
};

let teamSpan = document.getElementById("team");
let yearSpan = document.getElementById("year");
let headCoachSpan = document.getElementById("head-coach");

teamSpan.textContent = footballTeam.team;
yearSpan.textContent = footballTeam.year;
headCoachSpan.textContent = footballTeam.headCoach;

let playerCards = document.getElementById("player-cards");

function displayPlayers(players) {
    playerCards.innerHTML = ""; // Clear existing cards
    players.forEach((player) => {
        let playerCard = document.createElement("div");

        let playerName = document.createElement("h2");
        let playerPosition = document.createElement("p");
        playerCards.append(playerCard);

        playerCard.append(playerName);
        playerCard.append(playerPosition);
        if (player.isCaptain) {
            playerName.textContent = "(Captain) " + player.name;
        } else {
            playerName.textContent = player.name;
        }
        playerPosition.textContent = player.position;
        playerCard.classList.add("player-card");
    });
}

let playerSelector = document.getElementById("players");
displayPlayers(footballTeam.players);

playerSelector.addEventListener("change", function () {
    let selectedPlayer = playerSelector.value;
    if (selectedPlayer === "all") {
        displayPlayers(footballTeam.players);
        return;
    }
    let filteredTeam = footballTeam.players.filter(
        (player) => player.position === selectedPlayer
    );
    displayPlayers(filteredTeam);
});
