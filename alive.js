
var img
var sw = window.innerWidth
var sh = window.innerHeight
var imgW = 640
var imgH = 480/2

// MOSQUITO
var particlesDensity = 464
var particlesSize = 12
var particlesSpeedX = 0.15
var particlesSpeedY = 0.15
var repositioningX = 4
var repositioningY = 4
var sensitiveness = 50

var fillR = 198
var fillG = 154
var fillB = 154
var fillA = 240

var initBgR = 6
var initBgG = 125
var initBgB = 125
var initBgA = 255

var BgR = 6
var BgG = 125
var BgB = 125
var BgA = 255
var bg = [BgR, BgG, BgB, BgA]

var particles = []
var particlesCurrent = []

function preload(){
  img = loadImage('alive.png')  
  // bg = loadImage("bg3.jpg");
}








