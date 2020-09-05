varying vec2 vUv;
uniform float time;

void main() {
  gl_FragColor.r = vUv.x;
  gl_FragColor.g = 0.0;
  gl_FragColor.b = vUv.y;
  gl_FragColor.a = 1.0;
}
