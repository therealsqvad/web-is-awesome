import generateText from './generate';

function test() { return false; }
document.onselectstart = test;

let text;
let c;
let t;
let sc;
let st;
let speed;
let lifes;
let inputCount = 0;
let isPaused = true;

function newGame() {
  document.getElementById('alreadytext').textContent = '';
  setTimeout(settime('3...'), 1000);
  setTimeout(settime('2...'), 2000);
  setTimeout(settime('1...'), 3000);
  setTimeout(startGame, 4000);
}

function speedTimer() {
  if (!isPaused) {
    speed = inputCount / sc * 60;
    document.getElementById('speed_timer').value = speed.toFixed(2);
    sc += 3;
    st = setTimeout(speedTimer, 3000);
  }
}

function timedCount() {
  if (!isPaused) {
    if (c >= 0) {
      if (c < 10) {
        document.getElementById('timer').style.color = 'red';
        const fontsize = getComputedStyle(document.getElementById('timer')).fontSize;

        document.getElementById('timer').style.fontSize = `${parseInt(fontsize, 2) + 1}px`;
      }
      document.getElementById('timer').textContent = c;
      c--;
      t = setTimeout(timedCount, 1000);
    } else if (confirm('Начать заново?')) {
      newGame();
    }
  }
}

function startTimer() {
  if (isPaused) {
    isPaused = false;
    timedCount();
    speedTimer();
  }
}

function startGame() {
  text = generateText();
  currentLength = 0;
  lifes = 3;
  inputCount = 0;
  sc = 0; speed = 0;
  initializeHTML();
  startTimer();
  speedTimer();
}

function settime(txt) {
  document.getElementById('task').textContent = txt;
}


function stopTimer() {
  clearTimeout(t);
  clearTimeout(st);
  isPaused = true;
}

function initializeHTML() {
  document.getElementById('records').innerText = document.cookie;
  for (let i = 0; i < lifes; i++) {
    if (!document.getElementById(`life${i + 1}`)) {
      const div = document.createElement('div');

      div.className = 'life_icon';
      div.id = `life${i + 1}`;
      document.getElementById('lb').appendChild(div);
    }
  }
  document.getElementById('timer_block').style.visibility = 'visible';
  document.getElementById('pause_Button').style.visibility = 'visible';
  document.getElementById('intext').value = '';
  document.getElementById('intext').disabled = false;
  c = document.getElementById('task').textContent.length;
}


function pauseGame() {
  if (!isPaused) {
    stopTimer();
    document.getElementById('pause_Button').textContent = 'Продолжить';
    document.getElementById('intext').disabled = true;
  } else {
    document.getElementById('pause_Button').textContent = 'Пауза';
    document.getElementById('intext').disabled = false;
    startTimer();
  }
}

function endGame() {
  stopTimer();
  document.cookie += speed.toFixed(2);
  alert('Поздравляем!');
}

let currentLength;

function check() {
  if (document.getElementById('intext').value.length > currentLength) {
    inputCount++;
  }
  currentLength = document.getElementById('intext').value.length;
  if (document.getElementById('intext').value === text) {
    win();
  } else if (document.getElementById('intext').value[document.getElementById('intext').value.length - 1] === text[document.getElementById('intext').value.length - 1]) {
    document.getElementById('intext').style.borderColor = 'gray';
    document.getElementById('alreadytext').textContent = document.getElementById('intext').value;
    document.getElementById('task').textContent = text.substr(document.getElementById('alreadytext').textContent.length, text.length - document.getElementById('alreadytext').textContent.length);
  } else {
    error();
  }
}

function win() {
  document.getElementById('alreadytext').textContent = document.getElementById('intext').value;
  document.getElementById('task').textContent = '';
  document.getElementById('intext').style.borderColor = 'green';
  endGame();
}

function error() {
  document.getElementById('intext').style.borderColor = 'red';
  if (lifes > 0) {
    document.getElementById('lb').removeChild(document.getElementById(`life${lifes}`));
  } else {
    document.getElementById('intext').disabled = true;
    stopTimer();
    if (confirm('Вы проиграли:( Начать заново?')) {
      newGame();
    }
  }
  lifes--;
}

document.getElementById('new_game_Button').onclick = () => { newGame(); };
document.getElementById('pause_Button').onclick = () => { pauseGame(); };
document.getElementById('intext').oninput = () => { check(); };
