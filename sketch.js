var  wall, thickness;
var bullet, speed, weight;





function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400, 1500);

  thickness = random(22,83);
  
  bullet = createSprite (50,200,50,5);
  
  bullet.velocityX = speed;
  
  bullet.shapeColor = (255);

  
  
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("black");  

  if ( hasCollided(bullet, wall)){

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if ( damage > 10){
      wall.shapeColor = "red";
    }
    if (damage < 10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided (lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
