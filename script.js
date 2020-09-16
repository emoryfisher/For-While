var dragonEle = document.body.querySelector(".dragon");
var PlayerEle = document.body.querySelector(".Player");
var WinnerEle = document.body.querySelector(".Winner");
var dragonBoss = 0;
var Player = 0;
var damage = 0;
var InputHits = 0;

while (Player < 5 && dragonBoss < 10) {
   InputHits = Number(prompt("How much damage do you want to do?"));
 
  damage = Math.floor(Math.random() * InputHits) + 1;

  if(damage>5){
    dragonBoss= dragonBoss+1;
    
  } else{
    dragonBoss= dragonBoss+damage;
  }
  Player = Player + (Math.floor(Math.random() * 2) + 1);
    
  dragonEle.innerHTML = "Dragon Damage"+dragonBoss;
   PlayerEle.innerHTML = "Player Damage"+Player;
}


if (Player >= 5){
WinnerEle.innerHTML = "You Lose";}

if (dragonBoss >= 10){
WinnerEle.innerHTML = "You Win";}