varying vec2 vUv;
uniform float time;

float orb(vec2 position, vec2 offset) {
  vec2 q = position - offset;
  float len = length(q);
  return 0.02 / len;
}

vec3 hsv(float h, float s, float v){
  vec4 t = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(vec3(h) + t.xyz) * 6.0 - vec3(t.w));
  return v * mix(vec3(t.x), clamp(p - vec3(t.x), 0.0, 1.0), s);
}

float sineLine(vec2 position, float speed, float offset) {
  return 0.005 / abs(position.y + sin(((position.x - offset * time * 0.2) - time * speed) * 5.0) * 0.75);
}

void main() {
  // ----------------------------------------------------
  // glsl_sample - sample_07.frag
  // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // gl_FragColor = vec4(vec3(length(p)), 1.0);

  // ----------------------------------------------------
  // glsl_sample - sample_08.frag
  // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float len = length(p);
  // float light = 0.1 / len;
  // gl_FragColor = vec4(vec3(light), 1.0);

  // ----------------------------------------------------
  // glsl_sample - sample_09.frag
  // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float light = orb(p, vec2(0.5, 0.5));
  // gl_FragColor = vec4(vec3(light), 1.0);

  // ----------------------------------------------------
  // glsl_sample - sample_10.frag
  // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // vec2 offset = vec2(cos(time), sin(time));
  // float light = orb(p, offset);
  // gl_FragColor = vec4(vec3(light), 1.0);

  // // ----------------------------------------------------
  // // glsl_sample - sample_11.frag
  // // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float light = 0.0;

  // for (int i = 1; i <= 20; ++i) {
  //   float f = float(i) * 0.25;
  //   vec2 offset = vec2(cos(time * f), sin(time * f)) * 0.75;
  //   light += orb(p, offset);
  // }
  // gl_FragColor = vec4(vec3(light), 1.0);

  // // ----------------------------------------------------
  // // glsl_sample - sample_12.frag
  // // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // vec3 light = vec3(0.0);

  // for (int i = 1; i <= 20; ++i) {
  //   float hue = (1.0 / 20.0) * float(i);
  //   vec3 color = hsv(hue, 1.0, 1.0);
  //   float f = float(i) * 0.25;
  //   vec2 offset = vec2(cos(time * f), sin(time * f)) * 0.75;
  //   light += color * orb(p, offset);
  // }
  // gl_FragColor = vec4(light, 1.0);

  // // ----------------------------------------------------
  // // glsl_sample - sample_13.frag
  // // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float l = 0.01 / abs(p.y);
  // gl_FragColor = vec4(vec3(l), 1.0);

  // // ----------------------------------------------------
  // // glsl_sample - sample_14.frag
  // // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float l = 0.01 / abs(p.y + sin(p.x * 5.0) * 0.5);
  // gl_FragColor = vec4(vec3(l), 1.0);

  // // ----------------------------------------------------
  // // glsl_sample - sample_15.frag
  // // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float l = 0.01 / abs(p.y + sin((p.x - time) * 5.0) * 0.5);
  // gl_FragColor = vec4(vec3(l), 1.0);

  // ----------------------------------------------------
  // glsl_sample - sample_16.frag
  // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // vec3 light = vec3(0.0);
  // for (int i = 0; i < 16; i++) {
  //   vec3 color = hsv(float(i) / 16.0, 1.0, 1.0);
  //   light += color * sineLine(p, 0.5, 6.28 / 16.0 * float(i));
  // }
  // gl_FragColor = vec4(vec3(light), 1.0);

  // // ----------------------------------------------------
  // // glsl_sample - sample_17.frag
  // // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float tile = 1.0;
  // if (
  //   (mod(p.x, 1.0) > 0.5 && mod(p.y, 1.0) < 0.5) ||
  //   (mod(p.x, 1.0) < 0.5 && mod(p.y, 1.0) > 0.5)
  // ) {
  //   tile = 0.25;
  // }
  // gl_FragColor = vec4(vec3(tile), 1.0);

  // // ----------------------------------------------------
  // // glsl_sample - sample_18.frag
  // // ----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // float y = sin(time);
  // float x = cos(time);
  // mat2 m = mat2(x, y, -y, x);
  // vec2 q = m * p;

  // float tile = 1.0;
  // if (
  //   (mod(q.x, 1.0) > 0.5 && mod(q.y, 1.0) < 0.5) ||
  //   (mod(q.x, 1.0) < 0.5 && mod(q.y, 1.0) > 0.5)
  // ) {
  //   tile = 0.25;
  // }
  // gl_FragColor = vec4(vec3(tile), 1.0);

  // ----------------------------------------------------
  // glsl_sample - sample_19.frag
  // ----------------------------------------------------
  vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  float y = sin(time);
  float x = cos(time);
  mat2 m = mat2(x, y, -y, x);
  vec2 q = m * (p + sin(time)) * 5.0;

  float tile = 1.0;
  if (
    (mod(q.x, 1.0) > 0.5 && mod(q.y, 1.0) < 0.5) ||
    (mod(q.x, 1.0) < 0.5 && mod(q.y, 1.0) > 0.5)
  ) {
    tile = 0.25;
  }
  gl_FragColor = vec4(vec3(tile), 1.0);

}
