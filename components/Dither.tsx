"use client";

import React, { useRef, useEffect } from "react";

interface DitherProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: string | number[];
  colorNum?: number;
  pixelSize?: number;
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  className?: string;
}

const VERTEX_SHADER_SRC = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// High-Performance React Bits Dither Shader
const FRAGMENT_SHADER_SRC = `
precision highp float;

uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;
uniform float colorNum;
uniform float pixelSize;

// 8x8 Bayer Matrix for authentic retro Bayer dithering
float getBayer8(int x, int y) {
  int idx = y * 8 + x;
  if (idx < 16) {
    if (idx == 0) return 0.0/64.0;
    if (idx == 1) return 48.0/64.0;
    if (idx == 2) return 12.0/64.0;
    if (idx == 3) return 60.0/64.0;
    if (idx == 4) return 3.0/64.0;
    if (idx == 5) return 51.0/64.0;
    if (idx == 6) return 15.0/64.0;
    if (idx == 7) return 63.0/64.0;
    if (idx == 8) return 32.0/64.0;
    if (idx == 9) return 16.0/64.0;
    if (idx == 10) return 44.0/64.0;
    if (idx == 11) return 28.0/64.0;
    if (idx == 12) return 35.0/64.0;
    if (idx == 13) return 19.0/64.0;
    if (idx == 14) return 47.0/64.0;
    return 31.0/64.0;
  } else if (idx < 32) {
    if (idx == 16) return 8.0/64.0;
    if (idx == 17) return 56.0/64.0;
    if (idx == 18) return 4.0/64.0;
    if (idx == 19) return 52.0/64.0;
    if (idx == 20) return 11.0/64.0;
    if (idx == 21) return 59.0/64.0;
    if (idx == 22) return 7.0/64.0;
    if (idx == 23) return 55.0/64.0;
    if (idx == 24) return 40.0/64.0;
    if (idx == 25) return 24.0/64.0;
    if (idx == 26) return 36.0/64.0;
    if (idx == 27) return 20.0/64.0;
    if (idx == 28) return 43.0/64.0;
    if (idx == 29) return 27.0/64.0;
    if (idx == 30) return 39.0/64.0;
    return 23.0/64.0;
  } else if (idx < 48) {
    if (idx == 32) return 2.0/64.0;
    if (idx == 33) return 50.0/64.0;
    if (idx == 34) return 14.0/64.0;
    if (idx == 35) return 62.0/64.0;
    if (idx == 36) return 1.0/64.0;
    if (idx == 37) return 49.0/64.0;
    if (idx == 38) return 13.0/64.0;
    if (idx == 39) return 61.0/64.0;
    if (idx == 40) return 34.0/64.0;
    if (idx == 41) return 18.0/64.0;
    if (idx == 42) return 46.0/64.0;
    if (idx == 43) return 30.0/64.0;
    if (idx == 44) return 33.0/64.0;
    if (idx == 45) return 17.0/64.0;
    if (idx == 46) return 45.0/64.0;
    return 29.0/64.0;
  } else {
    if (idx == 48) return 10.0/64.0;
    if (idx == 49) return 58.0/64.0;
    if (idx == 50) return 6.0/64.0;
    if (idx == 51) return 54.0/64.0;
    if (idx == 52) return 9.0/64.0;
    if (idx == 53) return 57.0/64.0;
    if (idx == 54) return 5.0/64.0;
    if (idx == 55) return 53.0/64.0;
    if (idx == 56) return 42.0/64.0;
    if (idx == 57) return 26.0/64.0;
    if (idx == 58) return 38.0/64.0;
    if (idx == 59) return 22.0/64.0;
    if (idx == 60) return 41.0/64.0;
    if (idx == 61) return 25.0/64.0;
    if (idx == 62) return 37.0/64.0;
    return 21.0/64.0;
  }
}

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

const int OCTAVES = 3;
float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < OCTAVES; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p + fbm(p2)); 
}

vec3 dither(vec2 coord, vec3 color) {
  int x = int(mod(coord.x, 8.0));
  int y = int(mod(coord.y, 8.0));
  float threshold = getBayer8(x, y) - 0.25;
  float stepVal = 1.0 / (colorNum - 1.0);
  color += threshold * stepVal;
  float bias = 0.2;
  color = clamp(color - bias, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void main() {
  vec2 normalizedPixelSize = pixelSize / resolution;
  vec2 uvPixel = normalizedPixelSize * floor((gl_FragCoord.xy / resolution) / normalizedPixelSize);
  
  vec2 uv = uvPixel;
  uv -= 0.5;
  uv.x *= resolution.x / max(resolution.y, 1.0);
  
  float f = pattern(uv);
  
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / max(resolution.y, 1.0);
    float dist = length(uv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    f -= 0.5 * effect;
  }
  
  vec3 col = mix(vec3(0.0), waveColor, f);
  
  vec2 scaledCoord = floor(gl_FragCoord.xy / pixelSize);
  col = dither(scaledCoord, col);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

export default function Dither({
  waveSpeed = 0.08,
  waveFrequency = 3.0,
  waveAmplitude = 0.3,
  waveColor = [0.45, 0.45, 0.45],
  colorNum = 4,
  pixelSize = 2.0,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.35,
  className = "",
}: DitherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  const parsedColor =
    typeof waveColor === "string"
      ? waveColor.split(",").map((v) => parseFloat(v.trim()))
      : waveColor;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl2", {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
      }) as WebGLRenderingContext | null) ||
      (canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
      }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const posAttrLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posAttrLoc);
    gl.vertexAttribPointer(posAttrLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "resolution");
    const uTime = gl.getUniformLocation(program, "time");
    const uWaveSpeed = gl.getUniformLocation(program, "waveSpeed");
    const uWaveFrequency = gl.getUniformLocation(program, "waveFrequency");
    const uWaveAmplitude = gl.getUniformLocation(program, "waveAmplitude");
    const uWaveColor = gl.getUniformLocation(program, "waveColor");
    const uMousePos = gl.getUniformLocation(program, "mousePos");
    const uEnableMouse = gl.getUniformLocation(program, "enableMouseInteraction");
    const uMouseRadius = gl.getUniformLocation(program, "mouseRadius");
    const uColorNum = gl.getUniformLocation(program, "colorNum");
    const uPixelSize = gl.getUniformLocation(program, "pixelSize");

    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const parentW = canvas.parentElement?.clientWidth || rect.width || 300;
      const parentH = canvas.parentElement?.clientHeight || rect.height || 200;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const newWidth = Math.max(1, Math.floor(parentW * dpr));
      const newHeight = Math.max(1, Math.floor(parentH * dpr));

      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        gl.viewport(0, 0, newWidth, newHeight);
        width = newWidth;
        height = newHeight;
      }
    };

    resize();

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(canvas);

    const startTime = performance.now();
    let isRunning = true;

    const drawFrame = (currentTime: number) => {
      gl.useProgram(program);
      gl.uniform2f(uResolution, width || canvas.width || 300, height || canvas.height || 200);
      gl.uniform1f(uTime, currentTime);
      gl.uniform1f(uWaveSpeed, waveSpeed);
      gl.uniform1f(uWaveFrequency, waveFrequency);
      gl.uniform1f(uWaveAmplitude, waveAmplitude);
      gl.uniform3f(uWaveColor, parsedColor[0] ?? 0.45, parsedColor[1] ?? 0.45, parsedColor[2] ?? 0.45);
      gl.uniform2f(uMousePos, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1i(uEnableMouse, enableMouseInteraction ? 1 : 0);
      gl.uniform1f(uMouseRadius, mouseRadius);
      gl.uniform1f(uColorNum, colorNum);
      gl.uniform1f(uPixelSize, pixelSize);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    // Draw initial frame 0 synchronously
    drawFrame(0);

    const render = () => {
      if (!isRunning) return;
      const currentTime = disableAnimation ? 0 : (performance.now() - startTime) * 0.001;
      drawFrame(currentTime);
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    const handlePointerMove = (e: MouseEvent) => {
      if (!enableMouseInteraction || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      mouseRef.current = {
        x: (e.clientX - rect.left) * dpr,
        y: (e.clientY - rect.top) * dpr,
      };
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      isRunning = false;
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();

      if (gl) {
        gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
      }
    };
  }, [
    waveSpeed,
    waveFrequency,
    waveAmplitude,
    parsedColor,
    colorNum,
    pixelSize,
    disableAnimation,
    enableMouseInteraction,
    mouseRadius,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block absolute inset-0 rounded-[inherit] pointer-events-none object-cover ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
