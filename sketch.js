var walkSprite;
function setup() {
  createCanvas(400,400);
  walkSprite = createSprite(200,200,30,30);
}

function draw() 
{
  background("red");
  drawSprites();

  if (keyDown("LEFT_ARROW")){
    walkSprite.position.x = walkSprite.position.x - 5;
  }
  if (keyDown("RIGHT_ARROW")){
    walkSprite.position.x = walkSprite.position.x + 5;
  }
  if (keyDown("UP_ARROW")){
    walkSprite.position.y = walkSprite.position.y - 5;
  }  if (keyDown("DOWN_ARROW")){
    walkSprite.position.y = walkSprite.position.y + 5;
  }
}




