var fixedRect,movingRect;
var edges;
var object1,object2;






function setup() {
  createCanvas(800,800);
  edges=createEdgeSprites;

  fixedRect = createSprite(400, 200, 50, 50); 
  fixedRect.shapeColor = "green"; 
  fixedRect.debug = true; 

  movingRect = createSprite(400, 400,50,50); 
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(400,600,50,50);
  object1.shapeColor = "blue";

  object2 = createSprite(600,600,50,50);
  object2.shapeColor = "blue";

  movingRect.velocityY = -5; 
  fixedRect.velocityY = +5;

movingRect.setCollider("rectangle",0,0,50,50);
fixedRect.setCollider("rectangle",0,0,50,50);

  object1.velocityX=+4;
  object1.debug=true;
  object2.velocityX=-4;
  object2.debug=true;

}

function draw() {
  background("yellow");
  
if(bounceOff(object1,object2)){
  
    object1.velocityX = object1.velocityX * (-1); 
    object2.velocityX = object2.velocityX * (-1); 

}

if(bounceOff(movingRect,fixedRect)){
  movingRect.velocityY = movingRect.velocityY * (-1); 
  fixedRect.velocityY = fixedRect.velocityY * (-1); 
} 
  console.log();

  


  drawSprites();
}

function bounceOff(ob1,ob2){

  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2 && 
    ob2.x - ob1.x < ob2.width/2 + ob1.width/2){

     return true;

    }
  if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2 && 
    ob2.y - ob1.y < ob2.height/2 + ob1.height/2){ 
   
     // return true;

  }

}
