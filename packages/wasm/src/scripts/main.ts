import { test } from './webassembly-boilerplate-glue'

export function add(a: i32, b: i32): i32 {
    test()
    return a + b
}