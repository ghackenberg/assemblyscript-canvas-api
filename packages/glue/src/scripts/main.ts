const glue = {
    save: (ctx: CanvasRenderingContext2D) => {
        ctx.save()
    },
    restore: (ctx: CanvasRenderingContext2D) => {
        ctx.restore()
    },

    clearRect: (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
        ctx.clearRect(x, y, width, height)
    },

    beginPath: (ctx: CanvasRenderingContext2D) => {
        ctx.beginPath()
    },
    closePath: (ctx: CanvasRenderingContext2D) => {
        ctx.closePath()
    },
    clip: (ctx: CanvasRenderingContext2D) => {
        ctx.clip()
    },
    
    moveTo: (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        ctx.moveTo(x, y)
    },
    lineTo: (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        ctx.lineTo(x, y)
    },
    quadraticCurveTo: (ctx: CanvasRenderingContext2D, cpx: number, cpy: number, x: number, y: number) => {
        ctx.quadraticCurveTo(cpx, cpy, x, y)
    },
    bezierCurveTo: (ctx: CanvasRenderingContext2D, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => {
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    },
    arcTo: (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, radius: number) => {
        ctx.arcTo(x1, y1, x2, y2, radius)
    },
    
    arc: (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean) => {
        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)
    },
    ellipse: (ctx: CanvasRenderingContext2D, x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean) => {
        ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
    },
    rect: (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
        ctx.rect(x, y, width, height)
    },
    
    globalAlpha: (ctx: CanvasRenderingContext2D, globalAlpha: number) => {
        ctx.globalAlpha = globalAlpha
    },
    globalCompositeOperation: (ctx: CanvasRenderingContext2D, globalCompositeOperation: GlobalCompositeOperation) => {
        ctx.globalCompositeOperation = globalCompositeOperation
    },
    
    font: (ctx: CanvasRenderingContext2D, font: string) => {
        ctx.font = font
    },
    textAlign: (ctx: CanvasRenderingContext2D, textAlign: CanvasTextAlign) => {
        ctx.textAlign = textAlign
    },
    textBaseline: (ctx: CanvasRenderingContext2D, textBaseline: CanvasTextBaseline) => {
        ctx.textBaseline = textBaseline
    },
    
    shadowBlur: (ctx: CanvasRenderingContext2D, shadowBlur: number) => {
        ctx.shadowBlur = shadowBlur
    },
    shadowColor: (ctx: CanvasRenderingContext2D, shadowColor: string) => {
        ctx.shadowColor = shadowColor
    },
    shadowOffsetX: (ctx: CanvasRenderingContext2D, shadowOffsetX: number) => {
        ctx.shadowOffsetX = shadowOffsetX
    },
    shadowOffsetY: (ctx: CanvasRenderingContext2D, shadowOffsetY: number) => {
        ctx.shadowOffsetY = shadowOffsetY
    },
    
    lineWidth: (ctx: CanvasRenderingContext2D, width: number) => {
        ctx.lineWidth = width
    },
    lineDashOffset: (ctx: CanvasRenderingContext2D, offset: number) => {
        ctx.lineDashOffset = offset
    },
    lineJoin: (ctx: CanvasRenderingContext2D, join: CanvasLineJoin) => {
        ctx.lineJoin = join
    },
    lineCap: (ctx: CanvasRenderingContext2D, cap: CanvasLineCap) => {
        ctx.lineCap = cap
    },
    strokeStyle: (ctx: CanvasRenderingContext2D, style: string | CanvasGradient | CanvasPattern) => {
        ctx.strokeStyle = style
    },
    stroke: (ctx: CanvasRenderingContext2D) => {
        ctx.stroke()
    },
    strokeRect: (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
        ctx.strokeRect(x, y, width, height)
    },
    strokeText: (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth?: number) => {
        ctx.strokeText(text, x, y, maxWidth)
    },
    
    fillStyle: (ctx: CanvasRenderingContext2D, style: string | CanvasGradient | CanvasPattern) => {
        ctx.fillStyle = style
    },
    fill: (ctx: CanvasRenderingContext2D) => {
        ctx.fill()
    },
    fillRect: (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
        ctx.fillRect(x, y, width, height)
    },
    fillText: (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth?: number) => {
        ctx.fillText(text, x, y, maxWidth)
    }
}

export default glue