var movingRectangle,fixRectangle;
function setup() {
  createCanvas(1200,800);
  movingRectangle=createSprite(400,200,80,30);
  movingRectangle.shapeColor="green";
  fixRectangle=createSprite(200,200,50,80);
  fixRectangle.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRectangle.x= World.mouseX;
  movingRectangle.y= World.mouseY;
  if (movingRectangle.x-fixRectangle.x<fixRectangle.width/2+movingRectangle.width/2 &&
    fixRectangle.x-movingRectangle.x<fixRectangle.width/2+movingRectangle.width/2 &&
    movingRectangle.y-fixRectangle.y<fixRectangle.height/2+movingRectangle.height/2 &&
    fixRectangle.y-movingRectangle.y<fixRectangle.height/2+movingRectangle.height/2){
    movingRectangle.shapeColor="red"
    fixRectangle.shapeColor="red"
  }else{movingRectangle.shapeColor="green"
  fixRectangle.shapeColor="green"}
  drawSprites();
}