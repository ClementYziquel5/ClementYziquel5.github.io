/*
Clément YZIQUEL clement.yziquel@gmail.com
Pour CAPISEN JUNIOR ENTREPRISE
Campagne d'audit conseil 2022
*/

let i = 0;

//https://waytolearnx.com/2019/09/melanger-un-tableau-en-javascript.html
function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}


function startGame() {
    document.getElementById('question-number').innerHTML = 'Question n°' + (i + 1);
    document.getElementById('question').innerHTML = data[0].question;
    document.getElementById('answer').innerHTML = data[0].reponse;
}

function revealAnswear() {
    document.getElementById('answer-none').style.display = 'none';
    document.getElementById('answer').style.display = 'block';
}

function hideAnswear() {
    document.getElementById('answer').style.display = 'none';
    document.getElementById('answer-none').style.display = 'block';
}

function displayNewQuestion() {
    document.getElementById('question-number').innerHTML = 'Question n°' + (i + 1);
    document.getElementById('question').innerHTML = data[i].question;
    document.getElementById('answer').innerHTML = data[i].reponse;
}

function up() {
    if ((i + 1) < data.length) {
        i++;
        hideAnswear()
        displayNewQuestion();
    }
}

function down() {
    if (i > 0) {
        i--;
        hideAnswear()
        displayNewQuestion();
    }
}

window.onload = function() {
    data = randomize(data);
    startGame();
};