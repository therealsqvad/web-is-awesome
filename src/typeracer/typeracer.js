 import generate_text from './generate.js';

document.getElementById('new_game_Button').onclick = () => {new_game()};
document.getElementById('pause_Button').onclick = () => {pause_game()};
document.getElementById('intext').oninput = () => {check()};
document.onselectstart = test;
function test() { return false; }

let text;
let c;
let t;
let sc;
let speed;
let lifes;
let is_paused = true;
function new_game() {
    document.getElementById('alreadytext').textContent = '';
    setTimeout("document.getElementById('task').textContent='3...'", 1000);
    setTimeout("document.getElementById('task').textContent='2...'", 2000);
    setTimeout("document.getElementById('task').textContent='1...'", 3000);
    setTimeout(start_game, 4000);
}

let input_count = 0;
function speedTimer() {
    if (!is_paused) {
        speed = input_count / sc * 60;
        document.getElementById('speed_timer').value = speed.toFixed(2);
        sc = sc + 3;
        let st = setTimeout(speedTimer, 3000);
    }
}

function timedCount() {
    if (!is_paused) {
        if (c >= 0) {
            if (c < 10) {
                document.getElementById('timer').style.color = 'red';
                const fontsize = getComputedStyle(document.getElementById('timer')).fontSize;
                document.getElementById('timer').style.fontSize = (parseInt(fontsize) + 1) + 'px';
            }
            document.getElementById('timer').textContent = c;
            c--;
            t = setTimeout(timedCount, 1000);
        }
        else {
            if (confirm("Начать заново?")) {
                new_game();
            }
        }
    }
}

function startTimer() {
    if (is_paused) {
        is_paused = false;
        timedCount();
        speedTimer();
    }
}

function stopTimer() {
    clearTimeout(t);
    is_paused = true;
}

function start_game() {
    document.getElementById('records').innerText=document.cookie;

    text = generate_text();
    current_length = 0;
    lifes = 3;
    for (let i = 0; i < lifes; i++) {
        if(!document.getElementById('life'+(i+1))){
        let div = document.createElement('div');
        div.className = "life_icon";
        div.id = 'life' + (i + 1);
        document.getElementById('lb').appendChild(div);}
    }
    document.getElementById('timer_block').style.visibility = 'visible';
    document.getElementById('pause_Button').style.visibility = 'visible';
    document.getElementById('intext').value = '';
    document.getElementById('intext').disabled = false;
    c = document.getElementById('task').textContent.length;
    input_count = 0;
    sc = 0; speed = 0;
    startTimer();
    speedTimer();
}

function pause_game() {

    if (!is_paused) {
        stopTimer();
        document.getElementById('pause_Button').textContent = 'Продолжить';
        document.getElementById('intext').disabled = true; 
    } else {
        document.getElementById('pause_Button').textContent = 'Пауза';
        document.getElementById('intext').disabled = false; 
        startTimer();

    }


}

function end_game() {
    stopTimer();
    document.cookie += speed.toFixed(2);
    alert('Поздравляем!');
}

let current_length;
function check() {

    if (document.getElementById("intext").value.length > current_length) {
        input_count++;
    }
    current_length = document.getElementById("intext").value.length;
    if (document.getElementById("intext").value === text) {
        document.getElementById('alreadytext').textContent = document.getElementById("intext").value;
        document.getElementById('task').textContent = '';
        document.getElementById("intext").style.borderColor = "green";
        end_game();
    }
    else {
        if (document.getElementById("intext").value[document.getElementById("intext").value.length-1] === text[document.getElementById("intext").value.length-1]) {
            document.getElementById("intext").style.borderColor = "gray";
            document.getElementById('alreadytext').textContent = document.getElementById("intext").value;
            document.getElementById('task').textContent = text.substr(document.getElementById('alreadytext').textContent.length, text.length-document.getElementById('alreadytext').textContent.length)
        }
        else {
            document.getElementById("intext").style.borderColor = "red";

            if (lifes > 0) {
                document.getElementById('lb').removeChild(document.getElementById('life' + lifes))
            }
            else {
                document.getElementById('intext').disabled = true;
                stopTimer();
                if (confirm("Вы проиграли:( Начать заново?")) {
                    new_game();
                }
            }
            lifes--;
        }
    }
};

