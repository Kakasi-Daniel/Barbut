const roll1 = document.querySelector('.roll1');
const roll2 = document.querySelector('.roll2');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const reset = document.querySelector('.reset');
const win = document.querySelector('h1');
var res = 0;

const prep = () => {
    score1.innerHTML = '0';
    score2.innerHTML = '0';
    reset.classList.add('h');
    win.classList.add('h');
    roll1.classList.remove('op');
    roll2.classList.remove('op');
}

const check = () =>{
    if (res === 2){
        win.classList.remove('h');
        reset.classList.remove('h');
        if (parseInt(score1.innerHTML, 10) > parseInt(score2.innerHTML, 10)){
            win.innerHTML = 'Player 1 a câștigat';
        }else if(parseInt(score1.innerHTML, 10) < parseInt(score2.innerHTML, 10)){
            win.innerHTML = 'Player 2 a câștigat';
        }else {
            win.innerHTML = 'Egalitate';
        }
        res = 0;
    }
}

reset.onclick = prep;


roll1.onclick = () => {
    if (score1.innerHTML === '0'){
        let rnd1 = Math.floor(Math.random() * 6) + 1;
        let rnd2 = Math.floor(Math.random() * 6) + 1;
        score1.innerHTML = `${rnd1+rnd2}`;
        dice1.src = `dice${rnd1}.png`;
        dice2.src = `dice${rnd2}.png`;
        roll1.classList.add('op');
        res++;
        check();
    }
}

roll2.onclick = () => {
    if (score2.innerHTML === '0'){
        let rnd1 = Math.floor(Math.random() * 6) + 1;
        let rnd2 = Math.floor(Math.random() * 6) + 1;
        score2.innerHTML = `${rnd1+rnd2}`;
        dice1.src = `dice${rnd1}.png`;
        dice2.src = `dice${rnd2}.png`;
        roll2.classList.add('op');
        res++;
        check();
    }
}





