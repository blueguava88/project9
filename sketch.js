var box; 
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,30,30)
}

function draw() 
{

  if (keyDown("right")){
   background("red")
  }
  if (keyDown("left")){
background("blue")
  }
drawSprites()
}




