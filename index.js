if (!localStorage.getItem("Space Traders Scoreboard")) {
    localStorage.setItem("Space Traders Scoreboard", JSON.stringify([
        ["Nami", 7373],
        ["Luffy", 2955],
        ["Zoro", 1984],
        ["Robert'); DROP TABLE Students;--", -1],
        []
    ]));
}
let scoreboardIndex = JSON.parse(localStorage.getItem("Space Traders Scoreboard"));
let table = document.getElementById('scoreboard');
let i = 0;
for (; i < scoreboardIndex.length; i++) {
    let newRow = table.insertRow();
    let number = newRow.insertCell();
    number.textContent = i + 1 + ".";
    let login = newRow.insertCell();
    login.textContent = scoreboardIndex[i][0];
    let score = newRow.insertCell();
    score.textContent = scoreboardIndex[i][1];
}
for (; i < 10; i++) {
    let newRow = table.insertRow();
    let number = newRow.insertCell();
    number.textContent = i + 1 + ".";
    let login = newRow.insertCell();
    let score = newRow.insertCell();
}
//# sourceMappingURL=index.js.map