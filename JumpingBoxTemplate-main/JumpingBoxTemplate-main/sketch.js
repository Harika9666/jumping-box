var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
    block1 = createSprite(100,580,220,40);
    block1.shapeColor = "yellow";

    block2 = createSprite(330,580,220,40);
    block2.shapeColor = "maroon";

    block3 = createSprite(560,580,220,40);
    block3.shapeColor = "blue";

    block4 = createSprite(790,580,220,40);
    block4.shapeColor = "orange";

    //create box sprite and give velocity
    box = createSprite(random(20,750),50,50,50);
    box.shapeColor = "white";
    box.velocityX = 7;
    box.velocityY = 7;

    edges =  createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
  if(box.isTouching(block1)){
      box.bounceOff(block1);
      box.shapeColor = "yellow";
  }

  if(box.isTouching(block2)){
    box.bounceOff(block2);
    box.shapeColor = "maroon";
    music.play();
  }

  if(box.isTouching(block3)){
    box.bounceOff(block3);
    box.shapeColor = "blue";
}

if(box.isTouching(block4)){
    box.bounceOff(block4);
    box.shapeColor = "orange";
}

    drawSprites();
}
