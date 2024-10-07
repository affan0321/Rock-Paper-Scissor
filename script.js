 let userScore = 0;
 let compscore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compscorePara = document.querySelector("#comp-score");


  const genCompChoice = () => {
     const options = ["rock", "paper", "scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
 }

 const showWinner = (userWin, userChoice, compChoice) => {
     if (userWin) {

         msg.innerText = `You won! your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";
        userScore++;
         userScorePara.innerText = userScore;
     }
     else {

         msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
         compscore++;
         compscorePara.innerText = compscore;
     }
 }

 const drawGame = () => {

     msg.innerText = "The game was draw , Play Again"
     msg.style.backgroundColor = "blue";
 }

 const playgame = (userChoice) => {

     const compChoice = genCompChoice();


     if (userChoice === compChoice) {
         drawGame();
     }

     else {
         let userWin = true;

         if (userChoice === "rock") {
             userWin = compChoice === "paper" ? false : true;
         }

         else if (userChoice === "paper") {
             userWin = compChoice === "scissors" ? false : true;
         }
         else {
             userWin = compChoice === "rock" ? false : true;
         }
         showWinner(userWin, userChoice, compChoice)
              }
}

choices.forEach((choice) => {

     choice.addEventListener("click", () => {
         const userChoice = choice.getAttribute("id");

         playgame(userChoice);
     })
 })


// let userScore = 0;
// let compscore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");
// const userScorePara = document.querySelector("#user-score");
// const compscorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//     const options = ["rock", "paper", "scissor"];
//     const randIdx = Math.floor(Math.random() * 3);
//     return options;
// }


// const drawGame = () => {
//     msg.innerText = "the game is draw";
//     msg.style.backgroundColor = "blue";
// }





// const showWinner = (userWin, userChoice, compChoice) => {
//     if (userWin) {
//         msg.innerText = `you won ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//         userScore++;
//         userScore.para.innerText = userScore;
//     }
//     else {
//         msg.innerText = `you lost ${compChoice} beats ${userChoice}`;
//         msg.style.backgroundColor = "red";
//         compscore++;
//         compscore.para.innerText = compscore;
//     }
// }



// const playGame = (userChoice) => {
//     compChoice = genCompChoice();

//     if (userChoice === genCompChoice) {
//         drawGame();
//     }

//     else {
//         let userWin = true;

//         if (userChoice === "rock") {
//             userWin = genCompChoice === "paper" ? false : true;
//         }
//         else if (userChoice === "paper") {
//             userWin = genCompChoice === "scissors" ? false : true;
//         }
//         else {
//             userWin = genCompChoice === "rock" ? false : true;
//         }
//     }
//     showWinner();
// }










// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     })
// })