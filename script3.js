const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.onclick = (e) => {
  let x = e.offsetX
  let y = e.offsetY
  ctx.lineTo(x, y)
  ctx.stroke()
  console.log(x, y)
}