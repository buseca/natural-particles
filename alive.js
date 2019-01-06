
var img
var imgW = 640
var imgH = 480/2

// vars to sizing the canvas
var sw = window.innerWidth
var sh = window.innerHeight

// MOSQUITO
var particlesDensity = 464
var particlesSize = 10
var particlesSpeedX = 0.20
var particlesSpeedY = 0.20
var repositioningX = 4
var repositioningY = 4
var sensitiveness = 30

var fillR = 190
var fillG = 154
var fillB = 154
var fillA = 240

var initBgR = 100
var initBgG = 125
var initBgB = 125
var initBgA = 255

var BgR = 30
var BgG = 125
var BgB = 125
var BgA = 5
var bg = [BgR, BgG, BgB, BgA]

var particles = []
var particlesCurrent = []

function preload(){
  img = loadImage('alive.png')  
  // bg = loadImage("bg3.jpg");
}








