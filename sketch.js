var r1,r2;
function setup(){
  createCanvas(800,600);
  r1=createSprite(200,100,40,80);
  r1.shapeColor="green";
  r2=createSprite(400,400,60,40);
  r2.shapeColor="green";
}
function draw(){
  background("lightblue");
  console.log(r2.y-r1.y);
  r2.x=mouseX;
  r2.y=mouseY;
  if(r2.x-r1.x<r1.width/2+r2.width/2 &&r1.x-r2.x<r1.width/2+r2.width/2){
    r1.shapeColor="red";
    r2.shapeColor="red";
  }
  else{
    r1.shapeColor="green";
    r2.shapeColor="green";
  }
  drawSprites();
}