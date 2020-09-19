precision mediump float;

varying vec2 vUv;
uniform float time;

// void main() {
//   gl_FragColor.r = vUv.x;
//   gl_FragColor.g = 0.0;
//   gl_FragColor.b = vUv.y;
//   gl_FragColor.a = 1.0;
// }
// void main() {
//   vec2 p = vUv - vec2(0.5, 0.5);
//   float radius = length(p);
//   float angule = atan(p.y, p.x);
//   gl_FragColor.r = radius;
//   gl_FragColor.g = 0.0;
//   gl_FragColor.b = abs(angule / 3.14159);
//   gl_FragColor.a = 1.0;
// }

// // Sampling: Displacement - stripe
// float stripes(vec2 p, float steps) {
//   // 1. fract(x)の場合、x - floor(x)を返す
//   // 2. p.xは-1.0〜1.0の値。つまりsteps=10なら-10.0〜10.0
//   // 3. -10 - floor(-10) 〜 10 - floor(10)になる
//   // 4. floor(x)はx以下の最大の整数を返す
//   return fract(p.x * steps);
// }
// void main() {
//   vec2 p = vUv;
//   float brightness = stripes(p, 10.);
//   gl_FragColor.rgb = vec3(brightness);
//   gl_FragColor.a = 1.;
// }

// Sampling: Displacement - checkerborad
float checkerborad(vec2 p, float steps) {
  // xとyの整数を求める
  float x = floor(p.x * steps);
  float y = floor(p.y * steps);
  // mod(x, y): x - y * floor(x / y)を返す
  return mod(x + y, 2.);
}
void main() {
  vec2 p = vUv;
  float brightness = checkerborad(p, 20.);
  gl_FragColor.rgb = vec3(brightness);
  gl_FragColor.a = 1.;
}
