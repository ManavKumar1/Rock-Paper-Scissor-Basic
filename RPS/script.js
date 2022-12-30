('use strict')
var Player;
var playerScore = 0;
var Opponent;
var opponentScore = 0;
var choices = ["rock", "paper", "scissors"];
var round = 1;
let choice;
let playing;

const init = function () {
  playerScore = 0;
  opponentScore = 0;
  round = 0;
  playing = true;
};

init();

const load = (window.onload = function () {
  for (let i = 0; i < 3; i++) {
    // <img id="rock" src="rock.png">
    choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
});



const selectChoice = function () {
  Player = this.id;
  document.getElementById("playerChoice").src = Player + ".png";

  // for opponent
  Opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponentChoice").src = Opponent + ".png";

  // changing rounds
    round++;
  document.getElementById("Round-NO").innerHTML = `ROUND ${round}`;

  //check win

    checkWin();

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("opponentScore").innerHTML = opponentScore;

};
// checking win condition
const checkWin = function () {
  if (Player == Opponent) {
    playerScore += 1;
    opponentScore += 1;
  } else {
    if (Player == "rock") {
      if (Opponent == "scissors") {
        playerScore += 1;
      } else if (Opponent == "paper") {
        opponentScore += 1;
      }
    } else if (Player == "scissors") {
      if (Opponent == "paper") {
        playerScore += 1;
      } else if (Opponent == "rock") {
        opponentScore += 1;
      }
    } else if (Player == "paper") {
      if (Opponent == "rock") {
        playerScore += 1;
      } else if (Opponent == "scissors") {
        opponentScore += 1;
      }
    }
  }
};
