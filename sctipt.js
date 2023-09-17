let canvas = document.getElementById('c1')
let ctx = canvas.getContext('2d')
let myColor = 'red'
const color = document.getElementById('color')

color.oninput = function () {
  myColor = this.value
}
// ctx.fillStyle = "blue"
// ctx.fillRect(100, 100, 150, 100)
// ctx.fillStyle = 'red'
// ctx.fillRect(50,100,250,50)
// ctx.clearRect(150,100,100,50)
// ctx.rect(150,100,100,50)
// ctx.stroke()
// ctx.strokeStyle = "green"
// ctx.lineWidth = '5'
// ctx.rect(300,100,100,100)
// ctx.stroke()
// ctx.fillStyle = "orange"
// ctx.fill()
// ctx.clearRect(0,0,400,200)
// ctx.strokeStyle = "red"
// ctx.lineWidth = "10"
// ctx.moveTo(100,50)
// ctx.lineTo(150,150)
// ctx.stroke()

// ctx.beginPath()
// ctx.strokeStyle = "blue"
// ctx.lineWidth = "2"
// ctx.lineCap  = "butt"
// ctx.moveTo(200,50)
// ctx.lineTo(250,50)
// ctx.lineTo(250,100)
// ctx.stroke()

// ctx.clearRect(0,0,400,200)

canvas.onmousedown = function (event) {
  canvas.onmousemove = function (event) {
    ctx.fillStyle = myColor
    let x = event.offsetX
    let y = event.offsetY
    ctx.fillRect(x, y, 10, 10)
  }
  canvas.onmouseup = function () {
    canvas.onmousemove = null
  }
}