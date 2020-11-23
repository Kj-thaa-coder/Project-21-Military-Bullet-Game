var wall, thickness;
var bullet,speed, weight




function setup() {
  createCanvas(1400,400);
  
  thickness=random(22,83)

  speed=random(70,81)
  weight=random(60,70)

  wall=createSprite(1200, 200, thickness, height/2)

  bullet=createSprite(50,200, 105, 30)
  bullet.velocityX = speed
  bullet.shapeColor = "white"
  bullet.collide(wall)
  

  
}

function draw() {
  background("skyblue");  


  if(bullet.isTouching(wall)){
    bullet.velocityX = -0.0000000000000000000001
  }


  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if(damage>10)
  {

    wall.shapeColor=color(255,0,0);

  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }

  }

  bullet.depth = wall.depth -1


  hasCollided(bullet, wall);
  drawSprites();


}



function hasCollided(lbullet, lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}
