import { drawLine } from './webassembly-boilerplate-glue'

export function add(a: i32, b: i32): i32 {
    drawLine(0, 0, 100, 100)
    drawLine(0, 0, 100, 100)

    return a + b
}