
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementByd(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// ********************************************************************************

function getTextElementValueById(elementId){
const element = document.getElementById(elementId);
const elementValueText = element.innerText;
const value = parseInt(elementValueText);
return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function getRandomAlphabet(){
    const alphabetString = 'abcdefghijlmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

// function setBackgroundColor (alphabetId){
//     const element = document.getElementById(alphabetId);
//     element.classList.continueGame;
// }


































// function handleKeyboardButtonPress(event){
//     const playerPressed  = event.key;
//     console.log('player pressed', playerPressed);


// //get the expected to press
// const currentAlphabetElement = document.getElementById('current-alphabet');
// const currentAlphabet = currentAlphabetElement.innerText;
// const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
// console.log(playerPressed, currentAlphabet);

// // check matched or not
// if(playerPressed === expectedAlphabet){
//     console.log('you get a point');
// }
// else{
//     console.log('you missed you lost a file');
// }
// }


// // capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress);





// function handleKeyboardButtonPress(){
// console.log('button pressed');
// }
// document.addEventListener('keyup', handleKeyboardButtonPress);



// function play(){
//     // console.log('alpha play now');
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

// //  show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');


// const alphabet = getARandomAlphabet();
// console.log('your random alphabet', alphabet)


// // set alphabet
// const currentAlphabetElement = document.getElementById('current-alphabet');
// currentAlphabetElement.innerText = alphabet;


// // set background color
// addBackgroundColorById(alphabet);

// }

// function addBackgroundColorById(elementId){
//  const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }
 
// function removeBackgroundColorById(elementId){
// const element = document.getElementById(elementId);
// element.classList.remove('bg-orange-400');
// }

// function getARandomAlphabet(){
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijlmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
     
    
//     // get a random index between 0 - 25
//     const randomNumber = Math.random()* 25;
//     const index = Math.round(randomNumber);
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;

// }