let randomNumber = Math.floor(Math.random()*3) + 1
let machineImage = "", playerImage = ""
switch (randomNumber){
    case 1: machineImage = "rock"
    break;
    case 2: machineImage = "paper"
    break;
    case 3: machineImage = "scissors"
    break;
}

document.querySelector("#game").onclick = function (event) {
    
    if(event.target.tagName != 'IMG')
       return
    let img = event.target
    img.src.endsWith("rock.png")  ? playerImage =  "rock" :
    img.src.endsWith("paper.png")  ? playerImage =  "paper" :
    playerImage = "scissors"
    // Determine the winner
    let result = ""
    playerImage === machineImage ? result = "tie" 
    :playerImage === "rock" ? machineImage === "scissors" ? result = "won" : result = "lost"
    : playerImage === "paper" ? machineImage === "rock" ? result = "won" : result = "lost"
    : machineImage === "paper" ? result = "won" : result = "lost"

    //Display result
    let resultDisplay = document.querySelector("#winner").firstElementChild
    
    result === "tie" ? resultDisplay.textContent = "It's a tie!" 
    : resultDisplay.textContent = `You ${result}!`

    resultDisplay.textContent += " Refresh to play again."
    //Display machine image and user selected image
    document.querySelector("#player").src = `images/${playerImage}.png`
    document.querySelector("#machine").src = `images/${machineImage}.png`
    
    let winner = document.querySelector("#winner")
    let choice = document.querySelector("#choice")
//Hide the choice div and display the winner div to show result
    choice.setAttribute("style","display:none");
    winner.setAttribute("style","display:block");

}

