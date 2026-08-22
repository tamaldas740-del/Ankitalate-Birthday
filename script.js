const screens = document.querySelectorAll(".screen");

function showSection(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function startJourney() {

    showSection("birthday");

    createConfetti();
}

function createConfetti() {

    const container = document.getElementById("confetti");

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}


let starsFound = 0;

function collectStar(star) {

    if (star.dataset.found === "true") {
        return;
    }

    star.dataset.found = "true";

    star.style.display = "none";

    starsFound++;

    document.getElementById("score").textContent =
        "Stars found: " + starsFound + " / 5";

    if (starsFound === 5) {

        document.getElementById("finalBtn")
            .classList.remove("hidden");

        document.getElementById("score").textContent =
            "You found them all! ✨";
    }
}


function createBackgroundStars() {

    const container = document.getElementById("stars");

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.classList.add("star-bg");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(star);
    }
}

createBackgroundStars();


let musicPlaying = false;

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function() {

    if (!musicPlaying) {

        alert(
            "Add your favourite birthday song as music.mp3 and connect it here in script.js!"
        );

        musicBtn.textContent = "🔊 Music";

        musicPlaying = true;

    } else {

        musicBtn.textContent = "🎵 Music";

        musicPlaying = false;
    }
});
