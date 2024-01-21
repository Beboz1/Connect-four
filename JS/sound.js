    let audio3 = new Audio("./Music/backgroundMusic.mp3")
    let audioC= new Audio("./Music/congrats.mp3")
    let allowed = 1
function congratsM()
{
    audioC.play()
}
function playPiece()
{
    let audio = new Audio("./Music/PP.wav");
    audio.play();
}
function playBG()
{
    if (allowed == 1)
    {
        audio3.play()
        setTimeout(() => {
            playBG()
        }, 132000);
        
        setTimeout(() => {
            playBG()
        }, 264000);
    }
}
function stopBG()
{
    audio3.pause()
    allowed = 0
}
function goBG()
{
    allowed = 1
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
    stopBG,
    goBG,
    congratsM
} 