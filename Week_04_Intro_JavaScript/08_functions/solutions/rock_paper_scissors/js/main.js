var humanScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = function() {
  playGame('rock');
};

document.getElementById('paper').onclick = function() {
  playGame('paper');
};

document.getElementById('scissors').onclick = function() {
  playGame('scissors');
};

function playGame(humanPlay) {
  console.log('playGame function called');
  console.log('Human play: ' + humanPlay);

  var computerPlay = getComputerPlay();
  console.log('Computer play: ' + computerPlay);

  var gameResult = getGameResultFromHumanPerspective(humanPlay, computerPlay);
  console.log('Game result: ' + gameResult);

  updateScore(gameResult);
  console.log('Human score: ' + humanScore);
  console.log('Computer score:' + computerScore);

  updateStatus(humanPlay, computerPlay, gameResult);
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

function getGameResultFromHumanPerspective(humanPlay, computerPlay) {
  if (humanPlay === computerPlay) {
    return 'tie';
  }

  if (humanPlay === 'rock') {
    if (computerPlay === 'paper') {
      return 'lose';
    }
    else if (computerPlay === 'scissors') {
      return 'win';
    }
  }

  if (humanPlay === 'paper') {
    if (computerPlay === 'rock') {
      return 'win';
    }
    else if (computerPlay === 'scissors') {
      return 'lose';
    }
  }

  if (humanPlay === 'scissors') {
    if (computerPlay === 'rock') {
      return 'lose';
    }
    else if (computerPlay === 'paper') {
      return 'win';
    }
  }
}

function updateScore(gameResult) {
  if(gameResult === 'tie') {
    return;
  }
  else if (gameResult === 'win') {
    humanScore++;
    document.getElementById('humanScore').innerHTML = humanScore;
  }
  else if (gameResult === 'lose') {
    computerScore++;
    document.getElementById('computerScore').innerHTML = computerScore;
  }
}

function updateStatus(humanPlay, computerPlay, gameResult) {
  var status = '<p>You played <strong>' +  humanPlay + '</strong>. ';
  status += 'The bot played <strong>' + computerPlay + '</strong></p>';

  if (gameResult === 'win') {
    status += '<p>You win! :)</p>';
  }
  else if (gameResult === 'lose') {
    status += '<p>You lose! :(</p>';
  }

  document.getElementById('status').innerHTML = status;
}