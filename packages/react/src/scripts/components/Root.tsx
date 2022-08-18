import * as React from 'react'
import { drawLines } from 'webassembly-boilerplate-wasm'

export const Root = () => {
    const canvas = React.useRef<HTMLCanvasElement>()
    const [context, setContext] = React.useState<CanvasRenderingContext2D>()
    React.useEffect(() => {
        canvas.current && setContext(canvas.current.getContext('2d'))
    }, [canvas])
    React.useEffect(() => {
        context && drawLines(context, 15)
    }, [context])
    return (
        <canvas ref={canvas}/>
    )
}