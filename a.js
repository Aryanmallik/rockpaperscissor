const comp = document.querySelector(".comp .choice");
const player = document.querySelector(".player .choice");
const result = document.querySelector(".result");
const playerScore = document.querySelector(".pscore");
const cpuScore = document.querySelector(".cscore");
let uscore = 0;
let cscore = 0;
let gameOver = false;

function compinp() {
  let arr = ["rock", "paper", "scissors"];
  const compval = arr[Math.floor(Math.random() * arr.length)];
  comp.innerHTML = `<img src="./Public/${compval}2.png" width="150px" height="200px">`;
  return compval;
}

function computeWinner(a, b) {
  picPop(a, b);
  console.log(a, b);
  if (a == b) {
    return 0;
  } else if (
    (a == "rock" && b == "paper") ||
    (a == "paper" && b == "scissors") ||
    (a == "scissors" && b == "rock")
  ) {
    return 2;
  } else {
    return 1;
  }
}
function picPop(a, b) {
  const pic = document.querySelector(".piic");

  if (a == b) {
    pic.innerHTML = ``;
  } else {
    pic.innerHTML = `<img src="./Public/${a}${b}.png" height="800px"/>`;
    setTimeout(() => {
      pic.innerHTML = "";
    }, 3000);
  }
}
function handleGameOver(winner) {
  gameOver = true;
  if (winner === "player") {
    result.innerHTML = "game over you win<br/><br/>click any button to restart";
  } else {
    result.innerHTML =
      "game over you lose<br/><br/>click any button to restart";
  }
}

function handleMove(choice) {
  if (!gameOver) {
    player.innerHTML = `<img src="./Public/${choice}2.png" width="150px" height="200px">`;
    let b = compinp();
    let val = computeWinner(choice, b);
    console.log(val);
    if (val == 0) {
      console.log("draw");
      result.innerHTML = "draw";
    } else if (val == 1) {
      cscore++;
      result.innerHTML = "you lose";
    } else if (val == 2) {
      uscore++;
      result.innerHTML = "you win";
    }
    playerScore.innerHTML = uscore;
    cpuScore.innerHTML = cscore;
    console.log("user-", uscore, "comp-", cscore);

    if (uscore == -1) {
      console.log("user win");
      handleGameOver("player");
    } else if (cscore == -1) {
      handleGameOver("computer");
    }
  }
}

function handleButtonClick() {
  if (!gameOver) {
    const choice = this.value;
    handleMove(choice);
  } else {
    location.reload();
  }
}

function handleKeyDown(event) {
  if (!gameOver) {
    let key;
    switch (event.key) {
      case "m":
        key = "rock";
        break;
      case "k":
        key = "scissors";
        break;
      case "a":
        key = "paper";
        break;
      default:
        return;
    }
    handleMove(key);
  } else {
    location.reload();
  }
}
const buttons = document.querySelectorAll(".ch");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

document.addEventListener("keydown", handleKeyDown);
// const comp = document.querySelector(".comp .choice");
// const player = document.querySelector(".player .choice");
// const result = document.querySelector(".result");
// const playerScore = document.querySelector(".pscore");
// const cpuScore = document.querySelector(".cscore");
// function compinp() {
//   let arr = ["rock", "paper", "scissors"];
//   const compval = arr[Math.floor(Math.random() * arr.length)];
//   console.log("comp-", compval);
//   if (compval == "rock") {
//     comp.innerHTML = `<img src="./Public/rock.png" height="200px">`;
//   }
//   if (compval == "paper") {
//     comp.innerHTML = `<img src="./Public/paper.png" height="200px">`;
//   }
//   if (compval == "scissors") {
//     comp.innerHTML = `<img src="./Public/scissor.png" height="200px">`;
//   }
//   return compval;
// }

// function computeWinner(a, b) {
//   if (a === b) {
//     return 0;
//   } else if (
//     (a == "rock" && b == "paper") ||
//     (a == "paper" && b == "scissors") ||
//     (a == "scissors" && b == "rock")
//   ) {
//     return 1;
//   } else {
//     return 2;
//   }
// }

// function computeScore() {
//   let uscore = 0;
//   let cscore = 0;
//   let gameOver = false;
//   const buttons = document.querySelectorAll(".ch");
//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       let a = this.value;
//       console.log("user-", a);
//       if (a == "rock") {
//         player.innerHTML = `<img src="./Public/rock.png" height="200px">`;
//       }
//       if (a == "paper") {
//         player.innerHTML = `<img src="./Public/paper.png" height="200px">`;
//       }
//       if (a == "scissors") {
//         player.innerHTML = `<img src="./Public/scissor.png" height="200px">`;
//       }
//       if (!gameOver) {
//         let b = compinp();
//         let val = computeWinner(a, b);

//         if (val === 0) {
//           console.log("draw");
//           result.innerHTML = "draw";
//         } else if (val == 1) {
//           cscore++;
//           result.innerHTML = "you lose";
//         } else if (val == 2) {
//           uscore++;
//           result.innerHTML = "you win";
//         }
//         playerScore.innerHTML = uscore;
//         cpuScore.innerHTML = cscore;
//         console.log("user-", uscore, "comp-", cscore);
//         if (uscore == 5) {
//           console.log("user win");
//           result.innerHTML =
//             "game over you win<br/><br/>click one of the options to restart";
//           gameOver = true;
//         } else if (cscore == 5) {
//           result.innerHTML =
//             "game over you lose<br/><br/>click one of the options to restart";
//           gameOver = true;
//         }
//       }
//       if (gameOver) {
//         buttons.forEach((button) => {
//           button.addEventListener("click", function () {
//             uscore = 0;
//             cscore = 0;
//             gameOver = false;
//             playerScore.innerHTML = uscore;
//             cpuScore.innerHTML = cscore;
//             result.innerHTML = "";
//             player.innerHTML = ``;
//             comp.innerHTML = ``;
//             location.reload();
//           });
//         });
//       }
//     });
//   });
// }
// computeScore();
