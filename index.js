const fps = 60;
let canvas,context;
let score = 0;
//let tubes = [];
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
let tailleWidthTube = Math.floor(Math.random() * 300);
let tailleHeightTube = Math.floor(Math.random() * 300);
const positionDepartY = canvas.height/2;
const positionDepartTubeX = canvas.width;
let positionDepartTubeY = Math.floor(Math.random() * (canvas.width - tailleHeightTube ));


setInterval(update,1000/fps);

bird = new Bird();
tube = new Tube(positionDepartTubeX,positionDepartTubeY,tailleWidthTube,tailleHeightTube);
/*for(let i = 0; i < 10; i++ ){
   
    tubes.push(tube);
}*/

function update(){
  draw();
  bird.gravity();
  reinitialisationTube();
  gameOver();
  scoreAtm();
 
  /*for(let i =0; i < tubes.length; i++){
    tubes[i].draw();
    tubes[i].deplacementTube();
  }*/
}

function draw(){
  context.fillStyle = "black";
  context.fillRect(0,0,canvas.width,canvas.height);
  
  tube.draw();
  bird.draw();
  tube.deplacementTube();
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       bird.y -= 50;
    }
}



function reinitialisationBird(){
  bird.y = positionDepartY;
}

function reinitialisationTube(){
  let finTube = tube.x + tailleWidthTube;
  if (finTube  < 0) {
    tube.x  = positionDepartTubeX;
    console.log("reinitialisé");
    delete tube;
    tailleWidthTube = Math.floor(Math.random() * 300);
    tailleHeightTube = Math.floor(Math.random() * 300);
    positionDepartTubeY = Math.floor(Math.random() * (canvas.width - tailleHeightTube));
    tube = new Tube(positionDepartTubeX,positionDepartTubeY,tailleWidthTube,tailleHeightTube)
    console.log(tailleWidthTube);
    console.log(tailleHeightTube);
    console.log(positionDepartTubeY);
  }
}

function gameOver(){
  if(bird.isOut() == false){
   // console.log("perdu");
    reinitialisationBird();
  }else if(caToucheCaptain() == true){
    console.log("nul");    
  }
}

function caToucheCaptain(){
  let touche = false;
  if(bird.x > tube.x 
    && bird.x < tube.x + tailleWidthTube
    && bird.y > tube.y 
    && bird.y < tube.y + tailleHeightTube){
    touche = true;
    return touche;
  }else{
    return false;
  }
}


//score

function scoreAtm(){
  if(caToucheCaptain == false){
    score = score +1;
    document.getElementById("score").innerHTML = "Votre score est de " +score;
    console.log("score : " + score);
  }
}



