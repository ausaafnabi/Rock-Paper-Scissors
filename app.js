const game=()=>{
    let pScore=0;
    let cScore=0;

    //Start the Game...
    const startGame=()=>{
        const playbtn=document.querySelector('.play button');
        const playgame=document.querySelector('.play');
        const mainScreen=document.querySelector('.buttons');
        const winner = document.querySelector('.winner');

        playbtn.addEventListener('click',()=>{
            playgame.classList.add("fadeOut");
            mainScreen.classList.add("fadeIn");
            winner.classList.add("fadeIn");
        })
    }


    //Play game...
    const playMatch=()=>{
        const options=document.querySelectorAll('.buttons button');
        const humanHand=document.querySelector('.left-img');
        const computerHand = document.querySelector('.right-img');
        const hands=document.querySelectorAll('.icons img');

        hands.forEach((hand)=>{
            hand.addEventListener('animationend',function(){
                this.style.animation = "";               
            })
        })


        //Computer Options...
        const comp=['rock','paper','scissors'];

        options.forEach((option)=>{
            option.addEventListener('click',function(){
                //Computer Choice
                const computerNum = Math.floor(Math.random() * 3); //gives the computer random number 0,1,2...
                const computerChoice=comp[computerNum]; //gives ndividual ans as rock/paper/scissor..
                

                setTimeout(()=>{
                    //call the compare function...
                    compare(this.textContent, computerChoice);

                    //Update Images...
                    humanHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                },1300)



                humanHand.style.animation="shakeplayer 1.3s ease";
                computerHand.style.animation = "shakecomputer 1.3s ease";

            })
        })
    }


    const updateScore=()=>{
        const playerScore=document.querySelector('#human');
        const computerScore = document.querySelector('#computer');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }



    const compare=(playerChoice,computerChoice)=>{
        //Update Text
        const winner=document.querySelector('.winner');

        //Checking for tie...
        if(playerChoice===computerChoice){
            winner.textContent='...It is a Tie...';
            return;
        }

        //Checking for rock...
        if(playerChoice==='rock'){
            if(computerChoice==='scissors'){
                winner.textContent='...You Win...';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='...Computer Wins...';
                cScore++;
                updateScore();
                return;
            }
        }
        //Checking for paper...
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = '...You Win...';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = '...Computer Wins...';
                cScore++;
                updateScore();
                return;
            }
        }
        //Checking for scissors...
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = '...You Win...';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = '...Computer Wins...';
                cScore++;
                updateScore();
                return;
            }
        }
    }


    //Calling all the inner functions...
    startGame();
    playMatch();
};

game();