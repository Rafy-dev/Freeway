let xCars = [770, 650, 520, 610, 550, 580];
let yCars = [44, 96, 150, 210, 263, 312];
let wCars = 50;
let hCars = 40;
let speedCars = [3.2, 2.5, 3.8, 2.9, 3.5, 4];

function showCars(){
  for (let i = 0; i < imageCars.length; i ++){
    image(imageCars[i], xCars[i], yCars[i], wCars, hCars);
    }
    }


function moveCars(){
  for (let i = 0; i < imageCars.length; i ++){
      xCars[i] -= speedCars[i];
    if (positionCars(xCars[i])){
      xCars[i] = width;
    }
  }
}  

function positionCars(x){
  return x < - 35;
}
