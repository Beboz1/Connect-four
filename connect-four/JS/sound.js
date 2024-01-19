    let audio3 = new Audio("./Music/backgroundMusic.mp3");
function playPiece()
{
    let audio = new Audio("./Music/PP.wav");
    audio.play();
}
function playBG()
{
    audio3.play()
    setTimeout(() => {
        playBG()
    }, 132000);
    
    setTimeout(() => {
        playBG()
    }, 264000);
}
export
{
    playPiece,
    playBG,
} 