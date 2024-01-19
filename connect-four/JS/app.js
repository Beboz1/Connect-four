    import{playBG, playPiece} from "./sound.js";

    const squares = document.querySelectorAll('.grid div')
    import{getResult} from "./result.js";
    export {squares}
document.addEventListener('DOMContentLoaded', () => {

    
    //used for game functionality
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
        playBG()
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
    const BG1 = document.querySelector('#BG1')
    const BG2 = document.querySelector('#BG2')
    const BG3 = document.querySelector('#BG3')
    const BG4 = document.querySelector('#BG4')
    const BG5 = document.querySelector('#BG5')
    BG1.onclick = () => {body.style.backgroundColor = 'rgb(92, 0, 5)'}
    BG2.onclick = () => {body.style.backgroundColor = 'royalblue'}
    BG3.onclick = () => {body.style.backgroundColor = 'rgb(1, 153, 47)'}
    BG4.onclick = () => {body.style.backgroundColor = 'rgb(199, 167, 212, 45)'}
    BG5.onclick = () => {body.style.backgroundColor = 'rgb(233, 233, 200, 50)'}
    //board border setting
    const TC1 = document.querySelector('#TC1')
    const TC2 = document.querySelector('#TC2')
    const TC3 = document.querySelector('#TC3')
    const TC4 = document.querySelector('#TC4')
    const TC5 = document.querySelector('#TC5')
    TC1.onclick = () => {board.style.borderColor = 'red'}
    TC2.onclick = () => {board.style.borderColor = 'blue'}
    TC3.onclick = () => {board.style.borderColor = 'lime'}
    TC4.onclick = () => {board.style.borderColor = 'pink'}
    TC5.onclick = () => {board.style.borderColor = 'gold'}


})
    
