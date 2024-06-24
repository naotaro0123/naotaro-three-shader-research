precision mediump float;

// # 01
// void main() {
//   gl_FragColor.r = vUv.x;
//   gl_FragColor.g = 0.0;
//   gl_FragColor.b = vUv.y;
//   gl_FragColor.a = 1.0;
// }

// # 02
// void main() {
//   vec2 p = vUv - vec2(0.5, 0.5);
//   float radius = length(p);
//   float angule = atan(p.y, p.x);
//   gl_FragColor.r = radius;
//   gl_FragColor.g = 0.0;
//   gl_FragColor.b = abs(angule / 3.14159);
//   gl_FragColor.a = 1.0;
// }

// # 03 Sampling: Displacement - stripe
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

// # 04 Sampling: Displacement - checkerborad
// float checkerborad(vec2 p, float steps) {
//   // xとyの整数を求める
//   float x = floor(p.x * steps);
//   float y = floor(p.y * steps);
//   // mod(x, y): x - y * floor(x / y)を返す
//   return mod(x + y, 2.);
// }
// void main() {
//   vec2 p = vUv;
//   float brightness = checkerborad(p, 20.);
//   gl_FragColor.rgb = vec3(brightness);
//   gl_FragColor.a = 1.;
// }

// # 05 quasicrystal 1
// void main() {
//   vec2 p = (vUv - 0.5) * 50.;
//   float brightness = cos(p.x);
//   gl_FragColor.rgb = vec3(brightness);
//   gl_FragColor.a = 1.;
// }

// # 06 point test
// uniform vec2 resolution;

// void main() {
//   vec2 position = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
//   float color = floor(0.1 / length(position));
//   gl_FragColor = vec4(color, 0.0, 0.0, 1.0);
// }

// # 07 lines1
// varying vec2 vUv;

// float lines(vec2 p, float steps) {
//   // xとyの整数を求める
//   float x = floor(p.x * steps);
//   float y = floor(p.y * steps);
//   return mod(x, 2.0);
// }

// void main() {
//   vec2 p = vUv;
//   float brightness = lines(p, 80.);
//   gl_FragColor.rgb = vec3(brightness);
//   gl_FragColor.a = 1.;
// }

// # 08 lines2
// varying mat3 vNormalMatrix;
// varying vec3 vNormal;
// varying vec2 vUv;
// varying vec3 vPosition;

// uniform vec2 resolution;

// void main() {
//   vec2 position = -1.0 + 2.0 * vUv;
//   vec4 distColor = vec4(0.0, 0.0, 0.0, 1.0);
//   float color = floor(sin(length(position.y * 40.0)) * 1.5);
//   distColor = vec4(color, 0.0, color / 1.5, 1.0);
//   gl_FragColor = distColor;
// }

// # 09 lines3
// uniform vec2 resolution;
varying vec2 vUv;

void main() {
  vec2 p = -1.0 + 2.0 * vUv;

  // vec2 p2 = floor(p * 0.);
	p = fract(p * 18.);

	// #define N(x) (fract(sin(dot(x, vec2(375.,479.)) * 292.))
	// float dir = sign(N(p2)) - .99);

	vec4 c;
	// c += smoothstep(.2,.22, abs(fract(p.x + dir * p.y) - .5));
  // dirを掛けることで、線が反対の斜めになる
	c += smoothstep(.2,.22, abs(fract(p.x + p.y) - .5));
	gl_FragColor = vec4(0.3, c.y, c.z, 1.0);
}
