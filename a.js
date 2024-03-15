function userinp() {
  let answer = prompt("rock paper or scissor");
  return answer.toLowerCase();
}
function compinp() {
  let arr = ["rock", "paper", "scissor"];
  const compval = arr[Math.floor(Math.random() * arr.length)];
  return compval;
}

function computeWinner(a, b) {
  if (a == b) {
    return 0;
  } else if (a == "rock" && b == "paper") {
    console.log("paper beats rock - comp wins");
    return 1;
  } else if (a == "rock" && b == "scissor") {
    console.log("rock beats scissor - user wins");
    return 2;
  } else if (a == "paper" && b == "rock") {
    console.log("paper beats rock - user wins");
    return 2;
  } else if (a == "paper" && b == "scissor") {
    console.log("scissor beats paper - comp wins");
    return 1;
  } else if (a == "scissor" && b == "paper") {
    console.log("scissor beats paper - user wins");
    return 2;
  } else if (a == "scissor" && b == "rock") {
    console.log("rock beats scissor - comp wins");
    return 1;
  }
}

function computeScore() {
  let uscore = 0;
  let cscore = 0;
  for (let i = 1; i <= 5; i++) {
    let a = userinp();
    if (a != "rock" && a != "paper" && a != "scissor") {
      console.log("wrong input");
      i = i - 1;
      continue;
    }
    let b = compinp();
    let val = computeWinner(a, b);
    console.log(val, "val");
    if (val == 0) {
      console.log("draw");
    } else if (val == 1) {
      cscore = cscore + 1;
    } else if (val == 2) {
      uscore = uscore + 1;
    }
    console.log("user-", uscore, "comp-", cscore);
  }
  if (cscore > uscore) {
    console.log("comp won");
  } else if (uscore > cscore) {
    console.log("user won");
  } else {
    console.log("draw");
  }
}
computeScore();
