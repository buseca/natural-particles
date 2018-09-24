

function calcInitialPositions(){
  var d = pixelDensity()
  var pixelLength = 4 * (sw * d) * (sh * d);
  for (var i = 0; i < pixelLength; i+= particlesDensity) {
    if (pixels[i] == 0){
      var x_ = ((i / 4 / d) % (sw)) 
      var y_ = (i / 4 / d / sw / d)
      var coords_ = {x:x_,y:y_}
      particles.push(coords_)
    }
  };

}

function setup() {
  createCanvas(sw,sh)
  fill(fillR, fillG, fillB, fillA)
  noStroke()
  background(initBgR, initBgG, initBgB, initBgA)
  frameRate(50)
  image(img,(sw/2)-(imgW/2),(sh/2)-(imgH/2),imgW,imgH)
  loadPixels()
  background(initBgR, initBgG, initBgB, initBgA)
  background(bg)
  calcInitialPositions()
  particlesCurrent = JSON.parse(JSON.stringify(particles));
  for (var i = 0; i < particlesCurrent.length; i++) {
    ellipse(particlesCurrent[i].x - particlesSize/2,particlesCurrent[i].y - particlesSize/2,particlesSize,particlesSize)
  }
}

function draw() {

  if (mouseX > 10 && mouseX < (sw-10) && mouseY > 10 && mouseY < (sh-10)) {
    background(bg)
    for (var i = 0; i < particlesCurrent.length; i++) {
      
      if(mouseIsPressed){
        var distX = particles[i].x - particlesCurrent[i].x
        var distY = particles[i].y - particlesCurrent[i].y
        particlesCurrent[i].x += distX / repositioningX
        particlesCurrent[i].y += distY / repositioningY
      } else {
        var mouseDistX = (particlesCurrent[i].x - mouseX)
        var mouseDistY = (particlesCurrent[i].y - mouseY)
        var mouseDist = Math.sqrt(mouseDistX*mouseDistX + mouseDistY*mouseDistY) 
        particlesCurrent[i].x = particlesCurrent[i].x + cos(random(Math.PI)) * particlesSpeedX / ( Math.sqrt(mouseDist*10) / sensitiveness)
        particlesCurrent[i].y = particlesCurrent[i].y + cos(random(Math.PI)) * particlesSpeedY / ( Math.sqrt(mouseDist*10) / sensitiveness)
      }
      ellipse(particlesCurrent[i].x - particlesSize/2, particlesCurrent[i].y - particlesSize/2, particlesSize,particlesSize)

    };
  }
  

}










