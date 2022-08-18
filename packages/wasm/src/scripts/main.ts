import { beginPath, clearRect, lineTo, lineWidth, moveTo, stroke, strokeStyle } from './webassembly-boilerplate-glue'

export function drawLines(ctx: externref, count: i32): void {
    clearRect(ctx, 0, 0, 100, 100)

    lineWidth(ctx, 2)
    strokeStyle(ctx, 'black')

    while (count-- > 0) {
        beginPath(ctx)
        moveTo(ctx, count * 10, 0)
        lineTo(ctx, 100 + count * 10, 100)
        stroke(ctx)
    }
}