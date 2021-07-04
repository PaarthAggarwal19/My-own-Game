function preload(){
gunIMG = loadImage("gun.png")
bulletIMG = loadImage("bullet-png-1024.png")
enemyIMG = loadAnimation("enemy.gif")
backgroundIMG = loadImage("background.jpg")
}
function setup(){
createCanvas(displayWidth,displayHeight)
gun = createSprite(displayWidth/2,displayHeight/2)
gun.addImage(gunIMG)
gun.scale = 0.09
enemy = createSprite(displayWidth,random(0,displayHeight))
//enemy.addImage(enemyIMG)
}
function draw(){
background(backgroundIMG)
gun.x = mouseX 
gun.y = mouseY
enemy.velocityX = -4
if(keyDown("space")){
bullet = createSprite(gun.x,gun.y)
bullet.addImage(bulletIMG)
bullet.scale = 0.02
bullet.velocityX = 6
}
drawSprites()
}