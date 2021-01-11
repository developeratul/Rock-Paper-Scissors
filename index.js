const game = (choice) => {
  var human, bot
  human = choice.id
  bot = botChoice()
  console.log(bot)
  var result = decideWinner(human, bot)
  var message = finalMessage(result)
  console.log(message)
}
const botChoice = () => {
  number = Math.floor(Math.random() * 3)
  return ['Rock', 'Paper', 'Scissors'][number]
}
function decideWinner(humanChoice, botChoice) {
  var rpsData = {
    Rock: { Paper: 0, Scissors: 1, Rock: 0.5 },
    Paper: { Paper: 0.5, Scissors: 0, Rock: 1 },
    Scissors: { Paper: 1, Scissors: 0.5, Rock: 0 },
  }
  var yourScore = rpsData[humanChoice][botChoice]
  var botScore = rpsData[botChoice][humanChoice]
  return [yourScore, botScore]
}
function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: 'You Lost', color: 'red' }
  } else if (yourScore === 0.5) {
    return { message: 'You Tied', color: 'Yellow' }
  } else {
    return { message: 'You Won', color: 'green' }
  }
}
