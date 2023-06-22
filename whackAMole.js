
let gameFrame = document.querySelector(".gameFrame")
let allMoles = document.querySelectorAll(".mole")


//score & errors
let scoreValue = document.querySelector(".scoreValue")
let currentScore = 0
scoreValue.innerHTML = currentScore

let errorValue = document.querySelector(".errorValue")
let currentError = 0
errorValue.innerHTML = currentError

//get a random number to randomly select the mole
const getRandomNumber = () => {
    rand = Math.floor(Math.random() * 12) + 1
    console.log(rand)
    return rand
}

//change the background color of a mole
const changeBgColor = () => {
    getRandomNumber()
    let specificMoleBgColor = document.querySelector(`.mole${rand}`)
    specificMoleBgColor.style.backgroundColor = ("red")
}

//change the bg back to white
const changeBackBgColor = (mole) => {
    mole.style.backgroundColor = ("white")
}

//event listener -> when clicked, the mole becomes white again and the score increase (if it was a red mole)
allMoles.forEach(element => {
    element.addEventListener("click", (event) => {
        if (event.target.style.backgroundColor == "red") { //maybe change this to "this mole is selected" when I do the final function
            changeBackBgColor(event.target)
            currentScore++
            scoreValue.innerHTML = currentScore
        } else {
            event.target.style.backgroundColor = ("green")
            setTimeout(() => {
                changeBackBgColor(event.target);
            }, 20);
            currentError++
            errorValue.innerHTML = currentError
        }
    })
})


// A mole becomes red every second.
let startButton = document.querySelector(".startGame")
startButton.addEventListener("click", () => {
    launchGame = setInterval(changeBgColor, 1000)
})

let pauseButton = document.querySelector(".pauseGame")
pauseButton.addEventListener("click", () => {
    clearInterval(launchGame)
})

let stopButton = document.querySelector(".stopGame")
stopButton.addEventListener("click", () => {
    clearInterval(launchGame)
    currentScore = 0
    scoreValue.innerHTML = currentScore
    currentError = 0
    errorValue.innerHTML = currentError
    allMoles.forEach(element => {
        changeBackBgColor(element)
    })
})