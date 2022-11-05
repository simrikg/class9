var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(100,200,50,30);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
     ball.x=ball.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
     ball.x=ball.x-5;
  }
  if(keyIsDown(UP_ARROW)){
     ball.y=ball.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
     ball.y=ball.y+5;
  }

  drawSprites();
}




