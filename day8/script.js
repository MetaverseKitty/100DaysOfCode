let font 
let graphic

function preload () {
  font = loadFont("spacegrotesk-medium.otf")
}

function setup  () {
  createCanvas(500, 500)
  graphic = createGraphics(500, 500)
  graphic.fill("#ef5236")
  graphic.textSize(400)
  graphic.textFont("Times New Roman")
  graphic.textAlign(CENTER, CENTER)
  graphic.text("01", width / 2, height / 2)
}

function draw () {
  background("#ecf072")


copy(graphic, 0, 0, 500, 500, 0, 0, 100, 500)
}