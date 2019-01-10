
var img
var imgW = 640
var imgH = 480

// vars to sizing the canvas
var sw = window.innerWidth
var sh = window.innerHeight

// MOSQUITO
var particlesDensity = 421
var particlesSize = 1
var particlesSpeedX = 0.00
var particlesSpeedY = 5.60
var repositioningX = 10
var repositioningY = 10
var sensitiveness = 100

var fillR = 150
var fillG = 114
var fillB = 114
var fillA = 230

var initBgR = 30
var initBgG = 26
var initBgB = 26
var initBgA = 255

var BgR = 18
var BgG = 10
var BgB = 10
var BgA = 5
var bg = [BgR, BgG, BgB, BgA]

var particles = []
var particlesCurrent = []

function preload(){
  img = loadImage('cosmic.png')  
  // bg = loadImage("bg3.jpg");
}








