
// var for the source image
var img
var imgW = 640
var imgH = 480

// vars to sizing the canvas
var sw = window.innerWidth
var sh = window.innerHeight


var particlesDensity = 518
var particlesSize = 3
var particlesSpeedX = 0.6
var particlesSpeedY = 0.5
var repositioningX = 28
var repositioningY = 16
var sensitiveness = 80

// rgba values for the particles fill color
var fillR = 68
var fillG = 54
var fillB = 54
var fillA = 120

// rgba value for the initial background
var initBgR = 226
var initBgG = 142
var initBgB = 180
var initBgA = 255

// rgba for the background after the sketch activation
var BgR = 226
var BgG = 142
var BgB = 180
var BgA = 10
// the rgba value are stored in the 'bg' variable, that can contain also a preloaded image if needed
var bg = [BgR, BgG, BgB, BgA]

// the particles arrays: the first store the particle's initial position, the second store the current position
var particles = []
var particlesCurrent = []

// preloading the source image and other needed assets
function preload(){
  img = loadImage('bugs.png')  
}