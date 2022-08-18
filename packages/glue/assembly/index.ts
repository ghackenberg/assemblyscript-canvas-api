@external('webassembly-boilerplate-glue', 'save')
export declare function save(ctx: externref): void
@external('webassembly-boilerplate-glue', 'restore')
export declare function restore(ctx: externref): void

@external('webassembly-boilerplate-glue', 'clearRect')
export declare function clearRect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void

@external('webassembly-boilerplate-glue', 'beginPath')
export declare function beginPath(ctx: externref): void
@external('webassembly-boilerplate-glue', 'closePath')
export declare function closePath(ctx: externref): void
@external('webassembly-boilerplate-glue', 'clip')
export declare function clip(ctx: externref): void

@external('webassembly-boilerplate-glue', 'moveTo')
export declare function moveTo(ctx: externref, x: f64, y: f64): void
@external('webassembly-boilerplate-glue', 'lineTo')
export declare function lineTo(ctx: externref, x: f64, y: f64): void
@external('webassembly-boilerplate-glue', 'quadraticCurveTo')
export declare function quadraticCurveTo(ctx: externref, cpx: f64, cpy: f64, x: f64, y: f64): void
@external('webassembly-boilerplate-glue', 'bezierCurveTo')
export declare function bezierCurveTo(ctx: externref, cp1x: f64, cp1y: f64, cp2x: f64, cp2y: f64, x: f64, y: f64): void
@external('webassembly-boilerplate-glue', 'arcTo')
export declare function arcTo(ctx: externref, x1: f64, y1: f64, x2: f64, y2: f64, radius: f64): void

@external('webassembly-boilerplate-glue', 'arc')
export declare function arc(ctx: externref, x: f64, y: f64, radius: f64, startAngle: f64, endAngle: f64, counterclockwise?: boolean): void
@external('webassembly-boilerplate-glue', 'ellipse')
export declare function ellipse(ctx: externref, x: f64, y: f64, radiusX: f64, radiusY: f64, rotation: f64, startAngle: f64, endAngle: f64, counterclockwise?: boolean): void
@external('webassembly-boilerplate-glue', 'rect')
export declare function rect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void

@external('webassembly-boilerplate-glue', 'globalAlpha')
export declare function globalAlpha(ctx: externref, globalAlpha: f64): void
@external('webassembly-boilerplate-glue', 'globalCompositeOperation')
export declare function globalCompositeOperation(ctx: externref, globalCompositeOperation: string): void

@external('webassembly-boilerplate-glue', 'font')
export declare function font(ctx: externref, font: string): void
@external('webassembly-boilerplate-glue', 'textAlign')
export declare function textAlgin(ctx: externref, textAlign: string): void
@external('webassembly-boilerplate-glue', 'textBaseline')
export declare function textBaseline(ctx: externref, textAlign: string): void

@external('webassembly-boilerplate-glue', 'shadowBlur')
export declare function shadowBlur(ctx: externref, shadowBlur: f64): void
@external('webassembly-boilerplate-glue', 'shadowColor')
export declare function shadowColor(ctx: externref, shadowColor: string): void
@external('webassembly-boilerplate-glue', 'shadowOffsetX')
export declare function shadowOffsetX(ctx: externref, shadowOffsetX: f64): void
@external('webassembly-boilerplate-glue', 'shadowOffsetY')
export declare function shadowOffsetY(ctx: externref, shadowOffsetY: f64): void

@external('webassembly-boilerplate-glue', 'lineWidth')
export declare function lineWidth(ctx: externref, width: f64): void
@external('webassembly-boilerplate-glue', 'lineDashOffset')
export declare function lineDashOffset(ctx: externref, offset: f64): void
@external('webassembly-boilerplate-glue', 'lineJoin')
export declare function lineJoin(ctx: externref, join: string): void
@external('webassembly-boilerplate-glue', 'lineCap')
export declare function lineCap(ctx: externref, join: string): void
@external('webassembly-boilerplate-glue', 'strokeStyle')
export declare function strokeStyle(ctx: externref, style: string): void
@external('webassembly-boilerplate-glue', 'stroke')
export declare function stroke(ctx: externref): void
@external('webassembly-boilerplate-glue', 'strokeRect')
export declare function strokeRect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void
@external('webassembly-boilerplate-glue', 'strokeText')
export declare function strokeText(ctx: externref, text: string, x: f64, y: f64, maxWidth?: f64): void

@external('webassembly-boilerplate-glue', 'fillStyle')
export declare function fillStyle(ctx: externref, style: string): void
@external('webassembly-boilerplate-glue', 'fill')
export declare function fill(ctx: externref): void
@external('webassembly-boilerplate-glue', 'fillRect')
export declare function fillRect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void
@external('webassembly-boilerplate-glue', 'fillText')
export declare function fillText(ctx: externref, text: string, x: f64, y: f64, maxWidth?: f64): void