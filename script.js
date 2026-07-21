const startButton = document.getElementById("startButton");
const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const questions = document.querySelectorAll(".question");
const current = document.getElementById("current");
const result = document.getElementById("result");
const finishButton = document.getElementById("finishButton");

let questionIndex = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    welcome.style.display = "none";
    quiz.style.display = "block";
    questions[0].classList.add("active");
});

function showNextQuestion() {
    questions[questionIndex].classList.remove("active");
    questionIndex++;

    if (questionIndex < questions.length) {
        questions[questionIndex].classList.add("active");
        current.textContent = questionIndex + 1;
    }
}

document.querySelectorAll(".correct").forEach(button => {
    button.addEventListener("click", () => {
        alert("💖 ¡Correcto!");
        showNextQuestion();
    });
});

document.querySelectorAll(".wrong").forEach(button => {
    button.addEventListener("click", () => {
        alert("😂 ¡Inténtalo otra vez!");
    });
});

document.querySelectorAll(".answer").forEach(button => {
    button.addEventListener("click", () => {
        showNextQuestion();
    });
});

finishButton.addEventListener("click", () => {
    questions[questionIndex].classList.remove("active");
    result.style.display = "block";

    for (let i = 0; i < 80; i++) {
        setTimeout(createHeart, i * 100);
    }
});

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
