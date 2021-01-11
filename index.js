const game = (choice) => {
  var human, bot
  human = choice.id
  bot = botChoice()
  console.log(bot)
  var result = decideWinner(human, bot)
  console.log(result)
}
const botChoice = () => {
  number = Math.floor(Math.random() * 3)
  return ['Rock', 'Paper', 'Scissors'][number]
}
function decideWinner(humanChoice, botChoice) {
  var rpsData = {
    Rock: { Paper: 1, Scissors: 0, Rock: 0.5 },
    Paper: { Paper: 0.5, Scissors: 1, Rock: 0 },
    Scissors: { Paper: 0, Scissors: 0.5, Rock: 1 },
  }
  var yourScore = rpsData[humanChoice][botChoice]
  var botScore = rpsData[botChoice][humanChoice]
  return [yourScore, botScore]
}
