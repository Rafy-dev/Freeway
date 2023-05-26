function gameOver(){
  if (endLife()){
    youLose()
  }
  if (maxLevel()){
    youWin();
  }
}


function endLife(){
  return life < 0;
}

function youLose(){
  for (i = 0; i <speedCars.length; i++){
  speedCars[i] = 0;
  }
  textSize(40);
  text("You Lose", 240, 200);
  text("Try Again", 240, 280);
}


function maxLevel(){
  return level > 20;
}

function youWin(){
  for (i = 0; i <speedCars.length; i++){
  speedCars[i] = 0;
  }
  textSize(40);
  text("You Win!", 240, 200);
}