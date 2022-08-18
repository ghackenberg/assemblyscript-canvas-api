# WebAssembly Boilerplate

This **boilerplate project** provides a **React frontend** written in **TypeScript**, which integrates a **WebAssembly** written in **AssemblyScript**. The **WebAssembly** uses the **Native HTML 5 Canvas API** for drawing **hardware-accelerated 2D graphics**.

## Packages

The project contains the following packages.

* [webassembly-builderplate-glue](./packages/glue/) - **[AssemblyScript + TypeScript]** - Exposing the Native HTML 5 Canvas API to AssemblyScript
* [webassembly-builderplate-wasm](./packages/wasm/) - **[AssemblyScript only]** - Using the Native HTML 5 Canvas API to draw hardware-accelerated 2D graphics
* [webassembly-builderplate-react](./packages/react/) - **[TypeScript only]** - Integrating the WebAssemlby package into a classical React frontend

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