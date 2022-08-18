import { drawLine } from './webassembly-boilerplate-glue'

export function drawLines(ctx: externref, count: i32): void {
    while (count-- > 0) {
        drawLine(ctx, 0 + 10 * count, 0, 100 + 10 * count, 100)
    }
}