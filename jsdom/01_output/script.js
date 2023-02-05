//custom script
console.log('welcome','to eaarth')




const jajankenMoves = ["rock", "paper", "scissors"];
let computerHand = jajankenMoves[Math.floor(Math.random()*jajankenMoves.length)];

const scoreBoard = {
    computer: 0,
    challenger: 0,
}

//scoreBoard.computer++;
//scoreBoard.challenger++;

const jajankenEngine = (hand1, hand2) => {
    let
    switch (hand1) {
        case 'rock':
            winner = hand2 == 'paper' ? 1 : (hand2 == 'scissors' ? -1 : (hand2 == 'rock' ? 0 : null));
            break;
        
        case 'paper':
            
        break;

        case 'scissor':
            
        break;
    
        default:
            break;
    }
}