let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(val1, val2){
    return Math.abs(val2 - val1);
}

function compareGuesses(human, computer , target){
    if(human<1 || human>8){
        alert('Number is out of range!');
    }

    human = getAbsoluteDistance(human, target);
    computer = getAbsoluteDistance(computer, target);
    computer = Math.abs(target-computer);
    if(human < computer || human === computer){
        return true;
    }else{
        return false;
    }
}


function updateScore(winner){
if(winner === 'human'){
    humanScore++ ;
}else{
    computerScore++;
}
}

function advanceRound(){
currentRoundNumber++;
}