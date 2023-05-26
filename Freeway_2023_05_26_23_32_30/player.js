let xPlayer = 235;
let yPlayer = 370;
let wPlayer = 35;
let hPlayer = 35;
let speedPlayer = 3;
let hit = false;
let points = 0;
let life = 10;

function showPlayer(){
  image(imagePlayer, xPlayer, yPlayer, wPlayer, hPlayer);
}

function movePlayer(){
  if (endLife()){
    xPlayer = 220;
    yPlayer = 210;
  }
  if (maxLevel()){
    xPlayer = 220;
    yPlayer = 210;
  }
  if (keyIsDown(87)){
    yPlayer -= speedPlayer;
  }
  if (keyIsDown(83)){
    yPlayer += speedPlayer;
  }
  if (keyIsDown(65)){
    xPlayer -= speedPlayer;
  }
  if (keyIsDown(68)){
    xPlayer += speedPlayer;
  }
}

function collideFrame(){
  if (xPlayer < 0){
    xPlayer = 0;
  }
  if (xPlayer > width - 35){
    xPlayer = width - 35;
  }
  if (yPlayer < 3){
    yPlayer = 3;
  }
  if (yPlayer > height - 35){
    yPlayer = height - 35;
  }
}

function collide(){
     for (let i = 0; i < imageCars.length; i ++){
    hit = collideRectRect(xCars[i], yCars[i], wCars, hCars, xPlayer, yPlayer, wPlayer, hPlayer)
    if (hit){
      soundHit.play();
      startPosition();
      life --;
      if (points > 0){
        points --;
      } else{
          points = 0
        }
  }
}
}

function startPosition(){
  yPlayer = 365;
  xPlayer = 235;
  xCars[5] = 550;
}

function markPoint(){
//Point Player
  if (yPlayer < 25){
    soundPoint.play();
    points ++;
    startPosition();
    levelUp();
  } 
}

function levelUp(){
  level ++;
  for (let i=0; i < speedCars.length; i++)
  speedCars[i] += 0.2;
}