// **********************************
function handleKeyboardButtonPress(event){
    const playerPressed  = event.key;
    console.log('player pressed', playerPressed);

// stop the game 
if(playerPressed === 'Escape'){
  gameOver();
}

//get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
console.log(playerPressed, currentAlphabet);

// check matched or not
if(playerPressed === expectedAlphabet){
    console.log('you get a point!')

     const currentScore = getTextElementValueById('current-score');
      console.log(currentScore);
      const updatedScore = currentScore +1;
      setTextElementValueById('current-score', updatedScore);
    // _________________________________________________________________________________
    //  //  update score
    //  const currentScoreElement = document.getElementById('current-score');
    //  const currentScoreText = currentScoreElement.innerText;
    //  const currentScore = parseFloat(currentScoreText);
    //  console.log(currentScore);
     
    // //  increase the score by 1
    // const newScore = currentScore + 1;
    
    // // show the update score
    // currentScoreElement.innerText = newScore;
     

     // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you missed you lost a file');

const currentLife = getTextElementValueById ('current-life');
const updatedLife = currentLife -1;
setTextElementValueById('current-life', updatedLife);

if(updatedLife === 0){
  gameOver()
}
// _________________________________________________________________________________
  //   // step 1: get the current life number
  // const currentLifeElement = document.getElementById('current-life');
  // const currentLifeText = currentLifeElement.innerText;
  // const currentLife = parseFloat(currentLifeText);

  //   // step 2: reduce rhe life count
  // const newLife = currentLife - 1;

  //   // step 3: display the update life count
  //   currentLifeElement.innerText = newLife;

}

}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);
// **********************************

function continueGame(){
    // step--1:generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet is:', alphabet);

    // step--2:set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}



function play(){
  // hide everything show only playground
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementByd('play-ground');

// reset score and life
setTextElementValueById('current-life', 5);
setTextElementValueById('current-score', 0);
  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementByd('final-score');

  // 1 get the final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // clear the last alphabet highlight
const currentAlphabet = getElementTextById('current-alphabet');
// console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet);
}