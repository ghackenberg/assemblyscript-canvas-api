const canvas = document.createElement('canvas')

canvas.width = 100
canvas.height = 100

const context = canvas.getContext('2d')

export function drawLine(x1: number, y1: number, x2: number, y2: number) {
    console.log('Hello world!')

    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.lineWidth = 1
    context.strokeStyle = 'black'
    context.stroke()

    console.log(context)
}