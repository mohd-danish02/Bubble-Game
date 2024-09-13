let time = 20;
let score = 0;
let randNum;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  randNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = randNum;
}

function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 97; i++) {
    let randNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randNum}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timerValue").textContent = time;
    } else {
      clearInterval(timerInterval);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1> Game Over  Your Score is : ${score}</h1>
        <button  class="restartBtn" onclick="restartGame()">Restart</button> `;
    }
  }, 1000);
}

// restart game logic

document.querySelector("#pbtm").addEventListener("click", function (e) {
  var clickedNum = Number(e.target.textContent);
  if (clickedNum === randNum) {
    increaseScore();
    makeBubble();
    getNewHit();
  } else {
    document.querySelector("#pbtm").innerHTML = "";
    document.querySelector(
      "#pbtm"
    ).innerHTML = `<h1> Game Over  Your Score is : ${score}</h1>
      <button  class="restartBtn" onclick="restartGame()">Restart</button> `;
  }
});

getNewHit();
runTimer();
makeBubble();
