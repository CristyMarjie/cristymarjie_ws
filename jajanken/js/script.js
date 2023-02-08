const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#compScore');
const p = document.querySelector('#player');
const c = document.querySelector('#computer');
const st = document.querySelector('#start');
const rs = document.querySelector('#resetForm');
const prompt = document.querySelector('#prompt');
const myForm =document.getElementById('myJajanken');
// const imgPlayer = document.getElementById('player');
// const imgComputer = document.getElementById('computer');



const scoreBoard = {
   computer: 0,
   challenger: 0,
};

const game = (x) => {
    prompt.innerHTML = ``;
    let hand1=x;
    let hand2=computerPlayer();
    p.src = `./assets/${hand1}.png`;
    c.src = `./assets/${hand2}.png`;
    // console.log('gamer',hand1,'computer',hand2);
    // console.log(jajankenEngine(hand1,hand2));
    console.log(scoreBoard.challenger);
    switch (jajankenEngine(hand1,hand2)) {
        case 'hand1' :
            scoreBoard.challenger++;
            pScore.innerText = scoreBoard.challenger;
            prompt.innerHTML = `<div class="alert alert-success font-jockey fs-3" role="alert">
                                    Winner : Challenger
                                </div>`
            break;
        case 'hand2' :
            scoreBoard.computer++;
            cScore.innerText = scoreBoard.computer;
            prompt.innerHTML = `<div class="alert alert-success font-jockey fs-3" role="alert">
                                    Winner : Computer
                                </div>`
            break;
        default :
            prompt.innerHTML = `<div class="alert alert-danger font-jockey fs-3" role="alert">
                                    DRAW !
                                </div>`
    }
}

computerPlayer = () =>{
    const jajankenMoves = ["rock", "paper", "scissor"];
    let computerHand = jajankenMoves[Math.floor(Math.random()*jajankenMoves.length)];
    return computerHand;
}

jajankenEngine = (hand1,hand2)=>{
    let winner;
    switch (hand1) {
    case 'rock':
        winner = hand2 == 'paper' ? 'hand2' : (hand2 == 'scissor' ? 'hand1' : (hand2 == 'rock' ? 'd' : null));
        break;
    case 'paper':
        winner = hand2 == 'paper' ? 'd' : (hand2 == 'scissor' ? 'hand2' : (hand2 == 'rock' ? 'hand1' : null));
        break;
    case 'scissor':
        winner = hand2 == 'paper' ? 'hand1' : (hand2 == 'scissor' ? 'd' : (hand2 == 'rock' ? 'hand2' : null));
        break;
    default :
        winner = 'papers'
    }
    console.log('winner',winner);
    return winner;
}

st.addEventListener("click", () => {
    scoreBoard.computer=0;
    scoreBoard.challenger=0;

});

rs.addEventListener("click", () => {
    console.log(typeof myForm)
    myForm.reset();
});