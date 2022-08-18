export declare function save(ctx: externref): void
export declare function restore(ctx: externref): void

export declare function clearRect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void

export declare function beginPath(ctx: externref): void
export declare function closePath(ctx: externref): void
export declare function clip(ctx: externref): void

export declare function moveTo(ctx: externref, x: f64, y: f64): void
export declare function lineTo(ctx: externref, x: f64, y: f64): void
export declare function quadraticCurveTo(ctx: externref, cpx: f64, cpy: f64, x: f64, y: f64): void
export declare function bezierCurveTo(ctx: externref, cp1x: f64, cp1y: f64, cp2x: f64, cp2y: f64, x: f64, y: f64): void
export declare function arcTo(ctx: externref, x1: f64, y1: f64, x2: f64, y2: f64, radius: f64): void

export declare function arc(ctx: externref, x: f64, y: f64, radius: f64, startAngle: f64, endAngle: f64, counterclockwise?: boolean): void
export declare function ellipse(ctx: externref, x: f64, y: f64, radiusX: f64, radiusY: f64, rotation: f64, startAngle: f64, endAngle: f64, counterclockwise?: boolean): void
export declare function rect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void

export declare function globalAlpha(ctx: externref, globalAlpha: f64): void
export declare function globalCompositeOperation(ctx: externref, globalCompositeOperation: string): void

export declare function font(ctx: externref, font: string): void
export declare function textAlgin(ctx: externref, textAlign: string): void
export declare function textBaseline(ctx: externref, textAlign: string): void

export declare function shadowBlur(ctx: externref, shadowBlur: f64): void
export declare function shadowColor(ctx: externref, shadowColor: string): void
export declare function shadowOffsetX(ctx: externref, shadowOffsetX: f64): void
export declare function shadowOffsetY(ctx: externref, shadowOffsetY: f64): void

export declare function lineWidth(ctx: externref, width: f64): void
export declare function lineDashOffset(ctx: externref, offset: f64): void
export declare function lineJoin(ctx: externref, join: string): void
export declare function lineCap(ctx: externref, join: string): void
export declare function strokeStyle(ctx: externref, style: string): void
export declare function stroke(ctx: externref): void
export declare function strokeRect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void
export declare function strokeText(ctx: externref, text: string, x: f64, y: f64, maxWidth?: f64): void

export declare function fillStyle(ctx: externref, style: string): void
export declare function fill(ctx: externref): void
export declare function fillRect(ctx: externref, x: f64, y: f64, width: f64, height: f64): void
export declare function fillText(ctx: externref, text: string, x: f64, y: f64, maxWidth?: f64): void