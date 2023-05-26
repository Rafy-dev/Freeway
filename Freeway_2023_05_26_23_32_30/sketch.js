function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(imageBackground);
  showPlayer();
  showCars();
  movePlayer();
  collideFrame();
  moveCars();
  collide();
  info();
  markPoint();
  gameOver();
  }