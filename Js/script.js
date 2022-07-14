const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = new Audio ();
gameOver.src = './Musicas/gameover.mp3';
const gameSound = new Audio ();
gameSound.src = './Musicas/supermario.mp3';

gameSound.play();
gameSound.loop =true;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 70) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './Imagens/game-over.png';
        mario.style.width = '65px'
        mario.style.marginLeft = '50px'

        gameOver.play();
        gameSound.pause();

        clearInterval(loop);
    } else {
        gameSound.play();
    }
},10);

document.addEventListener("keydown", jump)