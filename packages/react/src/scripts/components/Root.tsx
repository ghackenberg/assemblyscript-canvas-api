import * as React from 'react'
import { add } from 'webassembly-boilerplate-wasm'

export const Root = () => {
    return (
        <h1>{add(1, 2)}</h1>
    )
}