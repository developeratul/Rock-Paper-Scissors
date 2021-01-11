const game = (choice) => {
  var human, bot
  human = choice.id
  bot = botChoice()
  console.log(bot)
  var result = decideWinner(human, bot)
  var message = finalMessage(result)
  gameFrontEnd(choice.id, bot, message)
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
    return { message: 'You Tied', color: '#D9D926' }
  } else {
    return { message: 'You Won', color: 'green' }
  }
}

const gameFrontEnd = (humanImageChoice, BotImageChoice, finalMessage) => {
  //adding src data to show images after removing the current front-end images

  var imgData = {
    Rock: document.getElementById('Rock').src,
    Paper: document.getElementById('Paper').src,
    Scissors: document.getElementById('Scissors').src,
  }

  //removing all the images from the front end

  document.getElementById('Rock').remove()
  document.getElementById('Paper').remove()
  document.getElementById('Scissors').remove()

  //Creating the div's to show the results in the front-ends

  var humanDiv = document.createElement('div')
  var botDiv = document.createElement('div')
  var resultDiv = document.createElement('div')

  //Adding them

  humanDiv.innerHTML = ` <img style='box-shadow: 1px 2px 20px blue' src="${imgData[humanImageChoice]}"/> `
  resultDiv.innerHTML = ` <h2 style=" color: ${finalMessage['color']}; font-size: 2rem; text-align: center; padding: 10px "> ${finalMessage['message']} </h2> `
  botDiv.innerHTML = ` <img style='box-shadow: 1px 2px 20px red'  src="${imgData[BotImageChoice]}"/> `

  //Showing item
  document.querySelector('#MainWarpper').appendChild(humanDiv)
  document.querySelector('#MainWarpper').appendChild(resultDiv)
  document.querySelector('#MainWarpper').appendChild(botDiv)
}
