const [form] = document.forms
const resetBtn = document.querySelector('[type=reset]')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const points = []

const inputX = document.querySelector('input[name="x"]')
const inputY = document.querySelector('input[name="y"]')

drawGrid()

canvas.onclick = (e) => {
  const x = e.offsetX
  const y = e.offsetY
  const color = form.color.value
  const width = form.width.value

  if (points.length !== 0) {
    if (x < points.at(-1).x) {
      alert('fail')
      return
    }
  }
  console.log(points);
  addPoint(x, y, color, width)
  addValueToInput(x, y)
}

function addValueToInput(dotX, dotY) {
  inputX.value = dotX
  inputY.value = dotY
}

resetBtn.onclick = () => {
  drawGrid()
  points.splice(0)
}

function drawGrid() {
  drawRect(0, 0, 400, 200, 'white')
  for (let i = 50; i < 400; i += 50) {
    drawLine(i, 0, i, 200, 'black')
    drawLabel(i + 2, 2, i, 'black')
  }
  for (let i = 50; i < 200; i += 50) {
    drawLine(0, i, 400, i, 'black')
    drawLabel(1, i + 3, 200 - i, 'black')
  }
}

function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}

function drawLine(x1, y1, x2, y2, color, width = 1) {
  ctx.lineWidth = width
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}

function drawLineTwo(x1, y1, width) {
  ctx.moveTo(x1, y1)
  ctx.lineWidth = width
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 7)
  ctx.fill()
}

function drawLabel(x, y, text, color) {
  ctx.fillStyle = color
  ctx.fillText(text, x, y + 6)
}

function addPoint(x, y, color, width) {
  points.push({ x, y })
  drawCircle(x, y, 3, color)

  if (points.length > 1) {
    const a = points.at(-2)
    const b = points.at(-1)
    drawLine(a.x, a.y, b.x, b.y, color, width)
  }
}