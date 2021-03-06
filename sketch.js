var mBox, fBox

function setup() {
  createCanvas(800,400);
  mBox = createSprite(100,100,50,50);
  fBox = createSprite(200,100,50,50);

}

function draw() {
  background("black"); 
mBox.x = mouseX;
mBox.y = mouseY;
if(mBox.x - fBox.x < mBox.width/2 + fBox.width/2 && 
  fBox.x - mBox.x < mBox.width/2 + fBox.width/2 && 
  mBox.y - fBox.y < mBox.height/2 + fBox.height/2 &&
  fBox.y - mBox.y < mBox.height/2 + fBox.height/2){
  mBox.shapeColor = "green";
  fBox.shapeColor = "green";
}
else {
  mBox.shapeColor = "grey";
  fBox.shapeColor = "grey";

}
  drawSprites();
}