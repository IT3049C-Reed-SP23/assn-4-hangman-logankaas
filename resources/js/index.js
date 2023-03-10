// START + DIFFICULTY SELECTION
const startWrapper = document.getElementById(`startWrapper`);
const difficultySelectForm = document.getElementById(`difficultySelect`);
const difficultySelect = document.getElementById(`difficulty`);

// GAME
const gameWrapper = document.getElementById(`gameWrapper`);
const guessesText = document.getElementById(`guesses`);
const wordHolderText = document.getElementById(`wordHolder`);

// GUESSING FORM
const guessForm = document.getElementById(`guessForm`);
const guessInput = document.getElementById(`guessInput`);

// GAME RESET BUTTON
const resetGame = document.getElementById(`resetGame`);

// CANVAS
let canvas = document.getElementById(`hangmanCanvas`);

// The following Try-Catch Block will catch the errors thrown
try {
  
  function difficultySelect(){
    if(difficulty).clicked(){
      return gameStart();
    }
  }
  
  function gameStart(){
    startWrapper.setVisible(false);
    startWrapper.setVisible(true);
    game.getWordHolderText = wordHolderText;
    game.getGuessessText = guessText;
  }
  
  // Instantiate a game Object using the Hangman class.
  //    get the difficulty input
  //    call the game start() method, the callback function should do the following
  //       1. hide the startWrapper
  //       2. show the gameWrapper
  //       3. call the game getWordHolderText and set it to the wordHolderText
  //       4. call the game getGuessessText and set it to the guessesText
  
  difficultySelectForm.addEventListener(`submit`, function (event) {});

  
  function guess(){
    wordHolderText = game.getHolderText();
    guessesText = game.getGuessesText();
    
    return guess();
  }
  
  function checkWin(){
    if(guessInput = wordHolderText){
      system.out.println("You guessed correct. You Win!")
    }
    
    return checkWin();
  }
  
  function onWrongGuess(){
    if(guessInput != wordHolderText){
      system.out.println("You guessed wrong. Guess again.")
    }
    
    return onWrongGuess();
  }
  
  function isOver(){
    if(guessInput != wordHolderText){
      system.out.println("You exceeded the guessing amount. Game Over.")
      guessInput.setEnabled(false);
      guessButton.setEnabled(false);
      resetGame.setEnabled(true);
    }
    
    return gameStart();
  }
  
  // add a submit Event Listener to the guessForm
  //    get the guess input
  //    call the game guess() method
  //    set the wordHolderText to the game.getHolderText
  //    set the guessesText to the game.getGuessesText
  //    clear the guess input field
  // Given the Guess Function calls either the checkWin or the onWrongGuess methods
  // the value of the isOver and didWin would change after calling the guess() function.
  // Check if the game isOver:
  //      1. disable the guessInput
  //      2. disable the guessButton
  //      3. show the resetGame button
  // if the game is won or lost, show an alert.
  
  guessForm.addEventListener(`submit`, function (e) {});

  // add a click Event Listener to the resetGame button
  //    show the startWrapper
  //    hide the gameWrapper
  
  resetGame.addEventListener(`click`, function (e) {
    startWrapper.setEnabled(true);
    gameWrapper.setEnabled(false);
  });
} catch (error) {
  console.error(error);
  alert(error);
}
