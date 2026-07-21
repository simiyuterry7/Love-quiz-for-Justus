const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const questions = document.querySelectorAll(".question");
const result = document.getElementById("result");

let currentQuestion = 0;

startBtn.onclick = function () {
    startBtn.style.display = "none";
    document.querySelector(".welcome").style.display = "none";
    quiz.style.display = "block";
    questions[0].style.display = "block";
};

function nextQuestion() {
    questions[currentQuestion].style.display = "none";
    currentQuestion++;

    if (currentQuestion < questions.length) {
        questions[currentQuestion].style.display = "block";
    }
}function correctAnswer() {
    alert("💖 ¡Correcto!");

    nextQuestion();
}

function wrongAnswer() {
    alert("😂 ¡Inténtalo otra vez!");
}

function finishQuiz() {
    questions[currentQuestion].style.display = "none";
    result.style.display = "block";

    for (let i = 0; i < 80; i++) {
        setTimeout(createHeart, i * 120);
    }
}

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}
