 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const reaction = getRandomInt(1, 100);
const memory = getRandomInt(1, 100);
const verbal = getRandomInt(1, 100);
const visual = getRandomInt(1, 100);
const overall = Math.round((reaction + memory + verbal + visual) / 4);

const scoreReaction = document.getElementById("reaction").innerText = String(reaction);
const scoreMemory = document.getElementById("memory").innerText = String(memory);
const scoreVerbal = document.getElementById("verbal").innerText = String(verbal);
const scoreVisual = document.getElementById("visual").innerText = String(visual);
const scoreOverall = document.getElementById("score").innerText = String(overall);

const grade = document.getElementById("grade");
const description = document.getElementById("grade-description")

function refresh() {
    location.reload();
}

const button = document.getElementById("button");
button.addEventListener("click", refresh, false);

function findGrade(score) {
    if (score >= 0 && score <= 20) {
        return 4;
    } else if (score >= 21 && score <= 40) {
        return 3;
    } else if (score >= 41 && score <= 60) {
        return 2
    } else if (score >= 61 && score <= 99) {
        return 1;
    } else {
        return 0;
    }

}

fetch('http://127.0.0.1:5500/data.json')
    .then(res => res.json())
    .then(data => {
        grade.innerText = data[findGrade(scoreOverall)].grade;
        description.innerText = data[findGrade(scoreOverall)].text;
    });
