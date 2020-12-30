
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survival = 0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale =0.1

  ground = createSprite(400,350,900,10)
  ground.velocityX= -4
  ground.x=ground.width/2
  console.log(ground.x)
  
  obstacleGroup = new Group()
  FoodGroup = new Group()
}


function draw() {
  
background("white")
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  monkey.velocityY +=0.5
  monkey.collide(ground)
  
  obstacles()
  bananas()
  
  
  drawSprites()
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0
    monkey.velocityY = 0
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
  }
   textSize(20)
  fill("black")
  survival = Math.ceil(frameCount/frameRate())
  text("survival time = "+survival,100,50)
  
}
function obstacles (){
  if(frameCount%300===0){
    obstacle=createSprite(600,320,10,40)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -6
    obstacle.scale = 0.2
    obstacle.lifetime = 100
    
    obstacleGroup.add(obstacle)
  }
}
function bananas (){
  if(frameCount%80===0){
    banana=createSprite(600,320,10,10)
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200))
    banana.velocityX = -6
    banana.scale = 0.1
    banana.lifetime = 100
    
    FoodGroup.add(banana)
  }
}





