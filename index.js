const game = (choice) => {
  var human, bot
  human = choice.id
  bot = botChoice()
  console.log(human, bot)
}
const botChoice = () => {
  number = Math.floor(Math.random() * 3)
  return ['Rock', 'Paper', 'Scissors'][number]
}
