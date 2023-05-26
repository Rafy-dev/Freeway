let imageBackground;
let imagePlayer;
let imageCar1;
let imagecar2;
let imageCar3;

let soundTrack;
let soundHit;
let soundPoint;

function preload (){
  imageBackground = loadImage("images/estrada.png");
  imagePlayer = loadImage("images/ator-1.png");
  imageCar1 = loadImage("images/carro-1.png");
  imageCar2 = loadImage("images/carro-2.png");
  imageCar3 = loadImage("images/carro-3.png");
  imageCars = [imageCar1, imageCar2, imageCar3, imageCar1, imageCar2, imageCar3];
  
  soundTrack = loadSound("sounds/trilha.mp3");
  soundHit = loadSound("sounds/colidiu.mp3");
  soundPoint = loadSound("sounds/pontos.wav");
}