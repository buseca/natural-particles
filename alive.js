
var img
var sw = window.innerWidth
var sh = window.innerHeight
var imgW = 640
var imgH = 480

// MOSQUITO
var particlesDensity = 564
var particlesSize = 4
var particlesSpeedX = 0.08
var particlesSpeedY = 0.08
var repositioningX = 4
var repositioningY = 4
var sensitiveness = 75

var fillR = 68
var fillG = 54
var fillB = 54
var fillA = 120

var initBgR = 226
var initBgG = 142
var initBgB = 180
var initBgA = 255

var BgR = 226
var BgG = 142
var BgB = 180
var BgA = 255
var bg = [BgR, BgG, BgB, BgA]

var particles = []
var particlesCurrent = []

function preload(){
  img = loadImage('alive.png')  
  bg = loadImage("bg3.jpg");
}








