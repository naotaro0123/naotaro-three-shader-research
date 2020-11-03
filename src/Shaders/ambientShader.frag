precision mediump float;
uniform float time;
varying vec2 vUv;
uniform vec3 ambientColor;

void main() {
  vec2 fuv = -1.0 + 2.0 * vUv;
  float r = abs(sin(fuv.s * fuv.t + time / 5.0));
  float g = abs(sin(fuv.s * fuv.t + time / 4.0));
  float b = abs(sin(fuv.s * fuv.t + time / 3.0));
  vec3 color = vec3(r, g, b) * ambientColor;
  gl_FragColor = vec4(color, 1.0);
}
