function preload() {
  boy1=loadAnimation('selfimages/boy1.png','selfimages/boy2.png')
}

function setup() {
  createCanvas(800,400);
 boy= createSprite(400, 200, 50, 50);
boy.addAnimation(boy1)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}