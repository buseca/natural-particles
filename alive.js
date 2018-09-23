
var img
var sw = window.innerWidth
var sh = window.innerHeight
var imgW = 640
var imgH = 480

// MOSQUITO
var particlesDensity = 564
var particlesSize = 2.5
var particlesSpeedX = 0.08
var particlesSpeedY = 0.08
var repositioningX = 4
var repositioningY = 4
var sensitiveness = 100


var particels = []
var particelsCopy = []

function preload(){
  img = loadImage('alive.png')  
  bg = loadImage("bg3.jpg");
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
  calcInitialPositions()
  background(bg)
  particelsCopy = JSON.parse(JSON.stringify(particels));
  for (var i = 0; i < particelsCopy.length; i++) {
    ellipse(particelsCopy[i].x - particlesSize/2,particelsCopy[i].y - particlesSize/2,particlesSize,particlesSize)
  }
}

function draw() {

  if (mouseX > 10 && mouseX < (sw-10) && mouseY > 10 && mouseY < (sh-10)) {
    background(bg)
    for (var i = 0; i < particelsCopy.length; i++) {
      // if(i%2 == 0){
      
      if(mouseIsPressed){
        var distX = particels[i].x - particelsCopy[i].x
        var distY = particels[i].y - particelsCopy[i].y
        particelsCopy[i].x += distX / repositioningX
        particelsCopy[i].y += distY / repositioningY
      } else {
        var mouseDistX = (particelsCopy[i].x - mouseX)
        var mouseDistY = (particelsCopy[i].y - mouseY)
        var mouseDist = Math.sqrt(mouseDistX*mouseDistX + mouseDistY*mouseDistY) 
        particelsCopy[i].x = particelsCopy[i].x + cos(random(Math.PI)) * particlesSpeedX / ( Math.sqrt(mouseDist) / sensitiveness)
        particelsCopy[i].y = particelsCopy[i].y + cos(random(Math.PI)) * particlesSpeedY / ( Math.sqrt(mouseDist) / sensitiveness)
      }
// }
      ellipse(particelsCopy[i].x - particlesSize/2,particelsCopy[i].y - particlesSize/2,particlesSize,particlesSize)
    };
  }
  

}










