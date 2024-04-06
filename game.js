let userScore = 0;
let userScor = document.querySelector("#user");
let comScore = 0;
let comScor = document.querySelector("#Computer");
let msg = document.querySelector("#msg");
const choicese = document.querySelectorAll(".choices");




// Computer choice

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Your choice ${userChoice} beats  computer choice${comChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        userScor.innerText = userScore;

    } else {
        msg.innerText = `You Lose! Computer choice ${comChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "red"
        comScore++;
        comScor.innerText = comScore;
    }
}

const draw = () => {
    msg.innerText = "Game is Draw"
    msg.style.backgroundColor = "black";
}

const playGame = (userChoice) => {
    const comChoice = genComChoice();
    console.log("comchoice", comChoice);
    console.log(userChoice);
    if (userChoice === comChoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = comChoice === "scissor" ? false : true;
        }

        else {
            userWin = comChoice === "rock" ? false : true;


        }
        showWinner(userWin, userChoice, comChoice);
    }
}



choicese.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});