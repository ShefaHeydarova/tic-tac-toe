let X = prompt("1-ci oyunçunu daxil edin:", "X");
let O = prompt("2-ci oyunçunu daxil edin:", "O");

document.getElementById("first").innerHTML = X + ":";
document.getElementById("second").innerHTML = O + ":";

let count = 1;
let scoreX = 0;
let scoreO = 0;
let arr = [];

Arr();
table();

function table() {
  let screen = "";

  for (let i = 0; i < 3; i++) {
    screen += `<tr>`;
    for (let j = 0; j < 3; j++) {
      screen += `<td onclick="Click(${i},${j})">${arr[i][j]}</td>`;
    }
    screen += `</tr>`;
  }
  document.getElementById("tbl").innerHTML = screen;
}

function Arr() {
  for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
      arr[i][j] = "";
    }
  }
}

function Click(i, j) {
  if (arr[i][j] == "") {
    if (count % 2 == 1) {
      arr[i][j] = "x";
    } else {
      arr[i][j] = "o";
    }
    table();
    setTimeout(Checkout, 100);
    count++;
  }
}

function Checkout() {
  if (arr[0][0] != "" && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
    Finish(0, 0);
    Score(0, 0);
    count = 1;
    Arr();
    table();
  } else if (
    arr[0][2] != "" &&
    arr[0][2] == arr[1][1] &&
    arr[1][1] == arr[2][0]
  ) {
    Finish(0, 2);
    Score(0, 2);
    count = 1;
    Arr();
    table();
  }
  for (let i = 0; i < 3; i++) {
    if (arr[i][0] != "" && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
      Finish(i, 0);
      Score(i, 0);
      count = 1;
      Arr();
      table();
    }
  }
  for (let i = 0; i < 3; i++) {
    if (arr[0][i] != "" && arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
      Finish(0, i);
      Score(0, i);
      count = 1;
      Arr();
      table();
    }
  }
  if(count==10){
    alert("Heç-heçə");
    count = 1;
    Arr();
    table();
}
}

function Finish(i, j) {
  alert(arr[i][j] + " qalibdir");
}

function Score(i, j) {
  if (arr[i][j] == "x") {
    scoreX++;
    document.getElementById("num1").innerHTML = scoreX;
    setTimeout(gameOver, 300);
  } else if (arr[i][j] == "o") {
    scoreO++;
    document.getElementById("num2").innerHTML = scoreO;
    setTimeout(gameOver, 300);
  }
}

function gameOver() {
  if (scoreX == 5) {
    alert(X + " oyunun qalibidir");
    startGame();
  } else if (scoreO == 5) {
    alert(O + " oyunun qalibidir");
    startGame();
  }
}

function startGame() {
if(confirm("Oyuna təkrar başlamaq istəyirsinizmi?") == true){
  document.getElementById("num1").innerHTML = "";
  document.getElementById("num2").innerHTML = "";
  count = 1;
  scoreX = 0;
  scoreO = 0;
  arr = [];
  Arr();
  table();
}
else{
    document.body.innerHTML="";
}
}
