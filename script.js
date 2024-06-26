alert( "Welcome To The Dice Game\nEnter The Names Of The Players");
var heading = document.querySelector("h1");
var playerImg1 = document.querySelector(".player.p1 img");
var playerImg2 = document.querySelector(".player.p2 img");
var player1Name = prompt("What Is the Name Of Player 1?");
var player2Name = prompt("What Is the Name Of Player 2?");
document.querySelector(".player.p1 h3").innerHTML = player1Name;
document.querySelector(".player.p2 h3").innerHTML =player2Name;
Random();



function Random(){
    var random_player1 = Math.floor((Math.random())*6)+1;
    var random_player2 = Math.floor((Math.random())*6)+1;
    if (random_player1 > random_player2){
        var name = player1Name + ' is the Winner'
        heading.innerHTML =  name;
        imgChange(playerImg1,random_player1);
        imgChange(playerImg2,random_player2);
    }
    else if (random_player2 > random_player1){
        name = player2Name + ' is the Winner'
        heading.innerHTML = name;
        imgChange(playerImg1,random_player1);
        imgChange(playerImg2,random_player2);
    }
    else{ // equal
        heading.innerHTML = 'It is a Tie - play again :)';
        imgChange(playerImg1,random_player1);
        imgChange(playerImg2,random_player2);
    }            
}

function imgChange(playerImg,number){
    if (number === 1){
        playerImg.setAttribute("src","./dice1.png");
    }
    if (number === 2){
        playerImg.setAttribute("src","./dice2.png");
    }
    if (number === 3){
        playerImg.setAttribute("src","./dice3.png");
    }
    if (number === 4){
        playerImg.setAttribute("src","./dice4.png");
    }
    if (number === 5){
        playerImg.setAttribute("src","./dice5.png");
    }
    if (number === 6){
        playerImg.setAttribute("src","./dice6.png");
    }
}


if (!isFirstLoad) {
 localStorage.setItem('isFirstLoad', 'true');
}
