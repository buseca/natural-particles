
var img
var sw = window.innerWidth
var sh = window.innerHeight
var imgW = 640
var imgH = 480

// MOSQUITO
var particlesDensity = 518
var particlesSize = 2
var particlesSpeedX = 0.6
var particlesSpeedY = 0.5
var repositioningX = 28
var repositioningY = 16
var sensitiveness = 80


var particels = []
var particelsCopy = []

function preload(){
  img = loadImage('bugs.png')  
}

function calcInitialPositions(){
  var d = pixelDensity()
  var pixelLength = 4 * (sw * d) * (sh * d);
  for (var i = 0; i < pixelLength; i+= particlesDensity) {
    if (pixels[i] == 0){
      var x_ = ((i / 4 / d) % (sw)) 
      var y_ = (i / 4 / d / sw / 2)
      var coords_ = {x:x_,y:y_}
      particels.push(coords_)
    }
  };

}

function setup() {
  createCanvas(sw,sh)
  fill(68,54,54,120)
  noStroke()
  background(226, 142, 180, 255)
  frameRate(50)
  image(img,(sw/2)-(imgW/2),(sh/2)-(imgH/2),imgW,imgH)
  loadPixels()
  background(226, 142, 180, 255)
  calcInitialPositions()
  particelsCopy = JSON.parse(JSON.stringify(particels));
  for (var i = 0; i < particelsCopy.length; i++) {
    ellipse(particelsCopy[i].x - particlesSize/2,particelsCopy[i].y - particlesSize/2,particlesSize,particlesSize)
  }
}

function draw() {

  if (mouseX > 10 && mouseX < (sw-10) && mouseY > 10 && mouseY < (sh-10)) {
    background(226, 142, 180, 10)
    for (var i = 0; i < particelsCopy.length; i++) {
      
      if(mouseIsPressed){
        var distX = particels[i].x - particelsCopy[i].x
        var distY = particels[i].y - particelsCopy[i].y
        particelsCopy[i].x += distX / repositioningX
        particelsCopy[i].y += distY / repositioningY
      } else {
        var mouseDistX = (particelsCopy[i].x - mouseX)
        var mouseDistY = (particelsCopy[i].y - mouseY)
        var mouseDist = Math.sqrt(mouseDistX*mouseDistX + mouseDistY*mouseDistY) 
        particelsCopy[i].x = particelsCopy[i].x + cos(random(Math.PI)) * particlesSpeedX / ( Math.sqrt(mouseDist*10) / sensitiveness)
        particelsCopy[i].y = particelsCopy[i].y + cos(random(Math.PI)) * particlesSpeedY / ( Math.sqrt(mouseDist*10) / sensitiveness)
      }
      ellipse(particelsCopy[i].x - particlesSize/2, particelsCopy[i].y - particlesSize/2, particlesSize,particlesSize)

    };
  }
  

}










