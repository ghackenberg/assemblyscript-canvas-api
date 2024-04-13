# AssemblyScript Canvas API

This **boilerplate project** provides a **React frontend** written in **TypeScript**, which integrates a **WebAssembly** written in **AssemblyScript**. The **WebAssembly** uses the **Native HTML 5 Canvas API** for drawing **hardware-accelerated 2D graphics**.

## Packages

The project contains the following packages.

* [webassembly-boilerplate-glue](./packages/glue/) - **[AssemblyScript + TypeScript]** - Exposing the Native HTML 5 Canvas API to AssemblyScript
* [webassembly-boilerplate-wasm](./packages/wasm/) - **[AssemblyScript only]** - Using the Native HTML 5 Canvas API for drawing hardware-accelerated 2D graphics
* [webassembly-boilerplate-react](./packages/react/) - **[TypeScript only]** - Integrating the WebAssemlby package into a classical React frontend

## Examples

The following examples demonstrate the use of the [Glue Package](./packages/glue/) for accessing the **Native HTML 5 Canvas API** in **AssemblyScript**. Note that we expose a purely **functional variant** of the API. In this variant the 2D rendering context is a function parameter rather than the enclosing object. We designed this approach so that API calls from within WebAssembly cause **minimal overhead**.

### AssemblyScript Example

```typescript
// Import HTML 5 Canvas API bindings from Glue Package
import { clearRect } from 'webassembly-boilerplate-glue/assembly/'
import { fillStyle } from 'webassembly-boilerplate-glue/assembly/'
import { fillRect } from 'webassembly-boilerplate-glue/assembly/'

// Export draw function to TypeScript/JavaScript
export function draw(ctx: externref): void {
    clearRect(ctx, 0, 0, 100, 100)
    fillStyle(ctx, 'blue')
    fillRect(ctx, 0, 0, 100, 100)
}
```

### TypeScript Example

```typescript
// Import draw function from AssemblyScript build
import { draw } from 'webassembly-boilerplate-wasm'

// Create HTML 5 Canvas object
const canvas = document.createElement('canvas')
// Get 2D rendering context
const context = canvas.getContext('2d')
// Pass 2D rendering context to WebAssembly
draw(context)
```

## Dependencies

We distinguish between build-time and run-time dependencies.

### Build-time

* [assemblyscript^0.20.19](https://www.assemblyscript.org/) - AssemblyScript compiler
* [typescript^4.7.4](https://www.typescriptlang.org/) - TypeScript compiler
* [webpack^5.74.0](https://webpack.js.org/) - Web application bundler

### Run-time

* [react^18.2.0](https://reactjs.org/) - React framework
* [react-dom^18.2.0](https://reactjs.org/docs/react-dom.html) - React DOM binding

## Scripts

We distinguish between install, build, and serve scripts.

### Install

Install 3rd party dependencies:

```
npm install
```

### Build

Build debug version:

```
npm run build:debug
```

Build release version:

```
npm run build:release
```

### Serve

Serve debug version:

```
npm run serve
```
