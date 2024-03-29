    import{playBG, playPiece, stopBG, goBG} from "./sound.js";

    const squares = document.querySelectorAll('.grid div')
    import{getResult} from "./result.js";
    export {squares}
document.addEventListener('DOMContentLoaded', () => {

    //used for game functionalityS
    const body = document.querySelector('body')
    
    const result = document.querySelector('#result')
    const displayPlayer = document.querySelector('#currentPlayer')
    const board = document.querySelector('#grid')
    let currentPlayer = 1
    
    
    for (let i = 0; i < squares.length; i++){
        squares[i].onclick = () => {
            //if the square below your current square is taken, you can go ontop of it
            if (squares[i + 7].classList.contains('taken') &&! squares[i].classList.contains('taken')){
                if (currentPlayer == 1){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = 2
                    displayPlayer.innerHTML = currentPlayer
                    playPiece();
                }else if (currentPlayer == 2){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    currentPlayer = 1
                    displayPlayer.innerHTML = currentPlayer
                    playPiece();
                }
                
            getResult()
            }
        }
    }
    //used for intro and a button to start the game

    const restartButton = document.querySelector('.restart')
    const congrats = document.querySelector('.congrats')
    const startButton = document.querySelector('#start-button')
    const card = document.querySelector('.card')
    const intro = document.querySelector('.intro')
    startButton.addEventListener('click', startGame)
    restartButton.addEventListener('click', restartGame)

    function startGame(){
        card.setAttribute('class', 'card-seen')
        intro.setAttribute('class', 'intro-gone')
    }
    function restartGame(){
        card.setAttribute('class', 'card-seen')
        congrats.setAttribute('class', 'congrats')
        for (let s = 0;s < 42; s++){
            squares[s].classList.remove('taken')
            squares[s].classList.remove('player-one')
            squares[s].classList.remove('player-two')
        }
    }





    //Back button
    const backButton = document.querySelector('#back')
    backButton.onclick = () => {   
        intro.setAttribute('class', 'intro')
        card.setAttribute('class', 'card')
        for (let s = 0;s < 42; s++){
            squares[s].classList.remove('taken')
            squares[s].classList.remove('player-one')
            squares[s].classList.remove('player-two')  
        }
    }
    const backButton2 = document.querySelector('#back2')
    backButton2.onclick = () => {       
        intro.setAttribute('class', 'intro')
        Scard.setAttribute('class', 'settings-card')
        for (let s = 0;s < 42; s++){
            squares[s].classList.remove('taken')
            squares[s].classList.remove('player-one')
            squares[s].classList.remove('player-two')  
        }
    }
    //Settings
    const settingsButton = document.querySelector('#settings-button')
    const Scard = document.querySelector('.settings-card')
    settingsButton.onclick = () =>{
        Scard.setAttribute('class', 'settings-card-seen')
        intro.setAttribute('class', 'intro-gone')
    }
    //Background setting
    const InputBgc = document.querySelector('#background-color')
    const BGCButton = document.querySelector('#change-BGC')
    BGCButton.onclick = () => {body.style.backgroundColor = InputBgc.value;
                                 InputBgc.style.borderColor = InputBgc.value}
    //board border setting
    const InputBc = document.querySelector('#board-color')
    const BCButton = document.querySelector('#change-BC')
    BCButton.onclick = () => {board.style.borderColor = InputBc.value;
                                 InputBc.style.borderColor = InputBc.value}
    //background music stopp
    const pauseButton =document.querySelector('#pauseButton')
    const playButton =document.querySelector('#playButton')
    pauseButton.onclick = () => {stopBG()}
    playButton.onclick = () => {goBG()}

})