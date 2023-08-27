
/* Week 11 Assignment */


const playerOneLetter= "X";
const playerTwoLetter = "O";
let playerOneTurn = true;
let playerTwoTurn = false;

let box1 = document.getElementById('1');
let box2 = document.getElementById('2');
let box3 = document.getElementById('3');
let box4 = document.getElementById('4');
let box5 = document.getElementById('5');
let box6 = document.getElementById('6');
let box7 = document.getElementById('7');
let box8 = document.getElementById('8');
let box9 = document.getElementById('9');

let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

/*Add data type string to Grid*/
let gridValues;
gridValues = ['', '', '', '', '', '', '', '', ''];
$('.col').each(function (index) {  
    gridValues[index] = $(this).text();  
}); 


let currentPlayer = document.createElement('p');
currentPlayer.setAttribute('id', 'current-player');
currentPlayer.innerHTML = 'Player 1';

$('h3').append(currentPlayer);



for(let i = 0; i < 9; i++) {
    boxes[i].addEventListener('click', () => {
        if(playerOneTurn) {
            $('#current-player').empty();
            $('#current-player').append('Player 2');  
            boxes[i].append(`${playerOneLetter}`);
            playerOneTurn = !playerOneTurn;
            playerTwoTurn = !playerTwoTurn;
        } else {
            $('#current-player').empty();
            $('#current-player').append('Player 1');
            boxes[i].append(`${playerTwoLetter}`);
            playerOneTurn = !playerOneTurn;
            playerTwoTurn = !playerTwoTurn;
        }
    });
}


/* Clear Button */
document.getElementById('clear-game-button').addEventListener('click', () => {
    $('.col').empty();
});



/* Finding the winner*/
function matchingLetters(letter1, letter2, letter3) {  
    if (letter1 === 'X' && letter2 === 'X' && letter3 === 'X') {  
       return alert("Player 1 is the winner")  
    } else if (letter1 === 'O' && letter2 === 'O' && letter3 === 'O') {  
        return alert("Player 2 is the winner");
    } else {  
        return alert("It's a tie, neither player won");
    }  
}  

function values(gridValues) {  
    return (gridValues[0], gridValues[1], gridValues[2])   
        + matchingLetters(gridValues[3], gridValues[4], gridValues[5])  
        + matchingLetters(gridValues[6], gridValues[7], gridValues[8])  
        + matchingLetters(gridValues[0], gridValues[3], gridValues[6])   
        + matchingLetters(gridValues[1], gridValues[4], gridValues[7])  
        + matchingLetters(gridValues[2], gridValues[5], gridValues[8])  
        + matchingLetters(gridValues[0], gridValues[4], gridValues[8])   
        + matchingLetters(gridValues[2], gridValues[4], gridValues[6]);  
}  











