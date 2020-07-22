// varying vec2 vUv;

// void main() {
//   vec4 color = vec4(vUv.x, vUv.y, 0.0, 1.0);
//   gl_FragColor = color;
// }
precision mediump float;
uniform float time;
varying vec2 vUv;

void main() {
  vec2 fuv = -1.0 + 2.0 * vUv;
  float r = abs(sin(fuv.s * fuv.t + time / 5.0));
  float g = abs(sin(fuv.s * fuv.t + time / 4.0));
  float b = abs(sin(fuv.s * fuv.t + time / 3.0));
  gl_FragColor = vec4(r, g, b, 1.0);
}
