
//Card Game
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

//Stopwatch

let secondsTime = 0;
let minutesTime = 0;
let hoursTime = 0;



function timer(){
    seconds++ ;
    if (seconds > 60){
        seconds = 0;
        minutes = minutes + 1;
    }
    if(minutes > 60){
        minutes = 0;
        hours = hours + 1;
    }
    if(seconds > 10 || seconds == 10){
        document.getElementById("display").innerHTML = hours + "0:" + minutes + "0:" + seconds ;
    } else{
        document.getElementById("display").innerHTML = hours + ":0" + minutes + ":0" + seconds;

    }

    

    
    
    setTimeout(timer, 100);

   
}


document.getElementById("button").addEventListener("click", timer);













