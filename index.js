let userScore = 1
let minRange = 1
let maxRange = 2
const space = () => console.log('  ')
console.log('Welcome to the guessing game task written by Ubong Jacob for a zuri task')
space()
const username = prompt('Please enter your Username')

function getRandomNumberFromMinToMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const success = () => {
  console.log(`${username} Your answer was correct and you have been move to stage ${++userScore}`)
  ++maxRange
  range()
}



const failed = (answer, isFirst) => {
  if (isFirst) { console.log(`You answer was wrong, the correct guess was ${answer}`) }
  else {
    space()
    console.log("Please I don't understand your option, Pick either yes or no")
  }
  space()

  const retry = prompt("Do you wish to play again? yes [Y] or no [N]")

  if (retry == 'yes' || retry == 'Y' || retry == 'YES' || retry == 'y' || retry == 'YEs') {
    minRange = 1
    score = 1
    maxRange = 2
    range()

  } else if (retry == 'no' || retry == 'No' || retry == 'NO' || retry == 'N' || retry == 'n') {

  }
  else {
    failed(answer, false)
  }

}
function range() {
  const randomNum = getRandomNumberFromMinToMax(minRange, maxRange)

  space()
  const userInput = prompt(`${username} Please enter your prediction with the range of ${minRange} and ${maxRange}`)
  space()
  if (userInput == randomNum) success()
  else failed(randomNum, true)
}

range()