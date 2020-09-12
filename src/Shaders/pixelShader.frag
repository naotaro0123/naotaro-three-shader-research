varying vec2 vUv;
uniform float time;

// void main() {
//   gl_FragColor.r = vUv.x;
//   gl_FragColor.g = 0.0;
//   gl_FragColor.b = vUv.y;
//   gl_FragColor.a = 1.0;
// }

void main() {
  vec2 p = vUv - vec2(0.5, 0.5);
  float radius = length(p);
  float angule = atan(p.y, p.x);
  gl_FragColor.r = radius;
  gl_FragColor.g = 0.0;
  gl_FragColor.b = abs(angule / 3.14159);
  gl_FragColor.a = 1.0;
}
