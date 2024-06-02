let scores = { A: 0, B: 0 };

function increaseScore(team) {
    scores[team]++;
    document.getElementById(`score${team}`).textContent = scores[team];
}

function decreaseScore(team) {
    if (scores[team] > 0) {
        scores[team]--;
        document.getElementById(`score${team}`).textContent = scores[team];
    }
}

function setScore(team) {
    let newScore = prompt("Yeni gol sayısını girin:");
    if (newScore !== null) {
        newScore = parseInt(newScore);
        if (!isNaN(newScore) && newScore >= 0) {
            scores[team] = newScore;
            document.getElementById(`score${team}`).textContent = scores[team];
        } else {
            alert("Lütfen geçerli bir sayı girin.");
        }
    }
}

function resetScore(team) {
    scores[team] = 0;
    document.getElementById(`score${team}`).textContent = scores[team];
}

function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
