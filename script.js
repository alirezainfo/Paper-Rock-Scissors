let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score")
const computerscore_span = document.getElementById("computer-score")
const scoreboard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const rock_div = document.querySelector("#r")
const paper_div = document.querySelector("#p")
const scissores_div = document.querySelector("#s")

main()


function getcomputerchoice() {
    const choices = ["r", "p", "s"]
    const randomnumber = Math.floor(Math.random() * 3)
    return choices[randomnumber]
}

function convertto(userChoice) {
    if (userChoice === "r") return "Rock"
    if (userChoice === "s") return "Scissors"
    if (userChoice === "p") return "Paper"
}


function win(userChoice , computerchoice) {
   userscore++;
   userscore_span.innerHTML = userscore
   result_div.innerHTML = convertto(userChoice) + " beats " + convertto(computerchoice) + ". You win!";
   document.getElementById(userChoice).parentElement.classList.add("green-glow")

   setTimeout(() => {
    document.getElementById(userChoice).parentElement.classList.remove("green-glow")
   }, 500);
   
}

function lose(userChoice , computerchoice) {
    computerscore++;
    computerscore_span.innerHTML = computerscore
    result_div.innerHTML = convertto(computerchoice) + " beats " + convertto(userChoice) + ". You lose!";
    document.getElementById(userChoice).parentElement.classList.add("red-glow")

    setTimeout(() => {
        document.getElementById(userChoice).parentElement.classList.remove("red-glow")
       }, 500);
}

function equal(userChoice , computerchoice) {
    result_div.innerHTML = convertto(computerchoice) + " is equal to " + convertto(userChoice) + ". Nobody won!";
    document.getElementById(userChoice).parentElement.classList.add("gray-glow")

    setTimeout(() => {
        document.getElementById(userChoice).parentElement.classList.remove("gray-glow")
       }, 500);
}




function game(userChoice) {
    const computerchoice = getcomputerchoice()
    switch (userChoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , computerchoice)
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice , computerchoice)
            break;

        case "rr":
        case "pp":
        case "ss":
            equal(userChoice , computerchoice)
            break;
    }
}

function main() {

    rock_div.addEventListener("click", function () {
        game('r')
    })

    paper_div.addEventListener("click", function () {        
        game('p')
    })

    scissores_div.addEventListener("click", function () {
        game('s')
    })

}
