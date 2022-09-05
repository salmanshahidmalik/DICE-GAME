
let Player1 = prompt("PLAYER 1 NAME:")
let Player2 = prompt("PLAYER 2 NAME:")
const a = document.getElementById("player1Scoreboard")
const b = document.getElementById("player2Scoreboard")
const d = document.getElementById('player1Dice')
const e = document.getElementById('player2Dice')
const bu = document.getElementById('rollBtn')
let message = document.getElementById('message')
const pic = document.getElementById('giss')
let player1turn = true;
let player1Scoreboard =0
let player2Scoreboard =0
let c = 0;
message.textContent = Player1 + "`s  Turn"
bu.addEventListener('click', function(){
     
    let dis = Math.floor(Math.random()*6+1);
    if (player1turn){
            
            show()  
            player1Scoreboard += dis
            a.textContent = player1Scoreboard
            d.textContent = dis
            d.classList.remove('active')
            e.classList.add('active')
            message.textContent = Player2 + "`s  Turn"
            
    }else
    {   
        show() 
        player2Scoreboard += dis
        b.textContent = player2Scoreboard
        e.textContent = dis
        e.classList.remove('active')
        d.classList.add('active')
        message.textContent = Player1 + "`s  Turn"
    }
    
    player1turn =!player1turn;
    if (player1Scoreboard >= 20) {
        a.style.color="darkgreen";
        message.textContent = Player1 + "  has won! 🥳 | "
        o()
    } else if (player2Scoreboard >= 20) {
        b.style.color="darkgreen";
        message.textContent = Player2 + " has won! 🎉 | "
        o()    
    }

})
let r = document.getElementById('rec')
let buu = document.getElementById('resetBtn')

buu.addEventListener('click', function(){
    a.style.color="white";
    b.style.color="white";
    r.textContent += message.textContent
    player1Scoreboard = 0
    player2Scoreboard = 0
    a.textContent = player1Scoreboard
    b.textContent = player2Scoreboard
    d.textContent = 0
    e.textContent = 0  
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    d.classList.add('active')
    e.classList.remove('active')
    message.textContent = Player1 + "`s  Turn"
    player1turn = true;
    
})
 


function o(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function show() {
    document.getElementById("giss").style.display="block";
    setTimeout("hide()", 500);  
}


function hide(){
    document.getElementById('giss').style.display="none"
}