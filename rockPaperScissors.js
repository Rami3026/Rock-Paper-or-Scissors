const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
if (userInput === 'rock' || 'paper' || 'scissors') {return userInput;}
else {console.log('Error no rock paper scissors chosen');}
console.log(getUserChoice('Paper')); // should print 'paper'
console.log(getUserChoice('rock')); // should print 'Error!' and `undefined
};
const getComputerChoice = () => {
  if (Math.floor(Math.random() * 3) === 0){
    return 'Rock';
  }
  else if (Math.floor(Math.random() * 3) === 1){
    return 'Paper';
  }
  else if (Math.floor(Math.random() * 3) === 2) {
  return 'Scissor';
  }
    }
console.log(getComputerChoice());
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }
  else if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer won!';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer won!';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    }
    else {
      return 'You won!';
    }
  }
  
}


const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
console.log('You threw:' + userChoice);
console.log('The computer threw:' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

playGame();

 
    

    