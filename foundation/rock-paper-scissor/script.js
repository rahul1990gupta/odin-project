const  choices =["rock", "paper", "scissor"]

let playerChoice = ""

rock = document.getElementsByClassName("rock")[0]
console.log(rock)
rock.addEventListener("click", () => {
    playerChoice = 0;
    playGame()
})

paper = document.getElementsByClassName("paper")[0]

paper.addEventListener("click", () => {
    playerChoice = 1;
    playGame();
})


scissor = document.getElementsByClassName("scissor")[0]

scissor.addEventListener("click", () => {
    playerChoice = 2;
    playGame()
})


function playGame() {
    let randomNum = Math.random();
    let computerChoice = Math.floor(randomNum * 3)
    

    console.log(choices[computerChoice])
    
    let computerWins = (playerChoice==0 && computerChoice ==1) ||
    (playerChoice ==1 && computerChoice==2) || 
    (playerChoice==2 && computerChoice==0)
    
    let tc ="";
    if( computerWins) {
        tc = "You Lose !"
    }
    else if(playerChoice == computerChoice){
        tc = "Tie!"
    }
    else {
        tc = "You Win !"
    }
    document.getElementById("result").textContent = tc
}

