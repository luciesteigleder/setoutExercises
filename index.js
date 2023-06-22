//______________________________________FIRST EXERCISE



// let prout = "prout"

//________________this does the job without the timeout
// const spell = (string) => {
//   for (i=0; i<string.length; i++) {
//     console.log(string[i])
//   }
// }


// let letter = 0
// const spell = () => {
//     console.log(prout[letter])
//     letter++
//     if (letter > prout.length-1) {
//         clearInterval(interval)
//     }
// }
// interval = setInterval(spell, 1000);


//______________________________________SECOND EXERCISE

let timePassed = 0
let timePassedText = document.querySelector(".time")
timePassedText.innerHTML = timePassed

let timeWord = document.querySelector(".timeWord")
timeWord.innerHTML = "second"

let timeWordPlural = document.querySelector(".timeWordPlural")
timeWordPlural.innerHTML = ""

let timePlural = document.querySelector(".timePlural")
timePlural.innerHTML = "s"

const countingTimeSeconds = () => {
    intervalSeconds = setInterval(adjustTimeText, 1000)
}

const countingTimeMinutes = () => {
    intervalMinutes = setInterval(adjustTimeText, 60000)
}

const adjustTimeText = () => {
    timePassed++
    timePassedText.innerHTML = timePassed;
    if (timePassed > 1) {
        timePlural.innerHTML = "ve"
        timeWordPlural.innerHTML = "s"
    }
    if (timePassed>=60) {
        timePassed = 1
        timePassedText.innerHTML = timePassed;
        timeWord.innerHTML = "minute"
        timeWordPlural.innerHTML = ""
        timePlural.innerHTML = "s"
        clearInterval(intervalSeconds)
        countingTimeMinutes()
        if (timePassed > 1) {
            timePlural.innerHTML = "ve"
            timeWordPlural.innerHTML = "s"
        }
    }
}

countingTimeSeconds()