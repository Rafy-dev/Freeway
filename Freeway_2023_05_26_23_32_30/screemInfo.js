let level = 1;

function info(){
  //Player Points
  textAlign(LEFT);
  textSize(20)
  fill(0,0,0);
  text("Score  " + points, 400, 26);
  
  //Life  
  image(imagePlayer, 20, 6, 25, 25)
  textAlign(CENTER);
  textSize(20)
  fill(0,0,0);
  text("x "+ life, 75, 26);
  
  //Level
  fill(0,0,0)
  text("Level " + level, 450, 390);
}