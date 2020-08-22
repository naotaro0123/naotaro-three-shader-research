varying vec2 vUv;
uniform float time;

float sphere(vec3 p) {
  return length(p) - 1.0;
}

vec3 getNormal(vec3 p) {
  float d = 0.001;
  return normalize(vec3(
    sphere(p + vec3(d, 0.0, 0.0)) - sphere(p + vec3(-d, 0.0, 0.0)),
    sphere(p + vec3(0.0, d, 0.0)) - sphere(p + vec3(0.0, -d, 0.0)),
    sphere(p + vec3(0.0, 0.0, d)) - sphere(p + vec3(0.0, 0.0, -d))
  ));
}

vec3 trans(vec3 p) {
  return mod(p, 4.0) - 2.0;
}

float transSphere(vec3 p) {
  return length(trans(p)) - 1.0;
}

vec3 getTransNormal(vec3 p) {
  float d = 0.001;
  return normalize(vec3(
    transSphere(p + vec3(d, 0.0, 0.0)) - transSphere(p + vec3(-d, 0.0, 0.0)),
    transSphere(p + vec3(0.0, d, 0.0)) - transSphere(p + vec3(0.0, -d, 0.0)),
    transSphere(p + vec3(0.0, 0.0, d)) - transSphere(p + vec3(0.0, 0.0, -d))
  ));
}

void main() {
  // //----------------------------------------------------
  // // glsl_sample - sample_22.frag
  // //----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // vec3 cameraPosition = vec3(0.0, 0.0, 3.0);
  // vec3 cameraDirection = vec3(0.0, 0.0, -1.0);
  // vec3 cameraUp = vec3(0.0, 1.0, 0.0);
  // vec3 cameraSide = cross(cameraDirection, cameraUp);
  // float targetDepth = 0.1;

  // vec3 ray = normalize(cameraSide * p.x + cameraUp * p.y + cameraDirection * targetDepth);
  // gl_FragColor = vec4(ray.xy, -ray.z, 1.0);

  // //----------------------------------------------------
  // // glsl_sample - sample_23.frag
  // //----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // vec3 cameraPosition = vec3(0.0, 0.0, 3.0);
  // vec3 cameraDirection = vec3(0.0, 0.0, -1.0);
  // vec3 cameraUp = vec3(0.0, 1.0, 0.0);
  // vec3 cameraSide = cross(cameraDirection, cameraUp);
  // float targetDepth = 1.0;

  // vec3 ray = normalize(cameraSide * p.x + cameraUp * p.y + cameraDirection * targetDepth);

  // float dist = 0.0;
  // float rayLength = 0.0;
  // vec3 rayPosition = cameraPosition;
  // for (int i = 0; i < 12; ++i) {
  //   dist = sphere(rayPosition);
  //   rayLength += dist;
  //   rayPosition = cameraPosition + ray * rayLength;
  // }
  // if (abs(dist) < 0.1) {
  //   gl_FragColor = vec4(vec3(1.0), 1.0);
  // } else {
  //   gl_FragColor = vec4(vec3(0.0), 1.0);
  // }

  // //----------------------------------------------------
  // // glsl_sample - sample_24.frag
  // //----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // vec3 cameraPosition = vec3(0.0, 0.0, 3.0);
  // vec3 cameraDirection = vec3(0.0, 0.0, -1.0);
  // vec3 cameraUp = vec3(0.0, 1.0, 0.0);
  // vec3 cameraSide = cross(cameraDirection, cameraUp);
  // float targetDepth = 1.0;

  // vec3 ray = normalize(cameraSide * p.x + cameraUp * p.y + cameraDirection * targetDepth);

  // float dist = 0.0;
  // float rayLength = 0.0;
  // vec3 rayPosition = cameraPosition;
  // for (int i = 0; i < 22; ++i) {
  //   dist = sphere(rayPosition);
  //   rayLength += dist;
  //   rayPosition = cameraPosition + ray * rayLength;
  // }
  // if (abs(dist) < 0.1) {
  //   vec3 normal = getNormal(rayPosition);
  //   gl_FragColor = vec4(normal, 1.0);
  // } else {
  //   gl_FragColor = vec4(vec3(0.0), 1.0);
  // }

  // //----------------------------------------------------
  // // glsl_sample - sample_25.frag
  // //----------------------------------------------------
  // vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  // vec3 cameraPosition = vec3(0.0, 0.0, 3.0);
  // vec3 cameraDirection = vec3(0.0, 0.0, -1.0);
  // vec3 cameraUp = vec3(0.0, 1.0, 0.0);
  // vec3 cameraSide = cross(cameraDirection, cameraUp);
  // float targetDepth = 1.0;

  // vec3 ray = normalize(cameraSide * p.x + cameraUp * p.y + cameraDirection * targetDepth);

  // float dist = 0.0;
  // float rayLength = 0.0;
  // vec3 rayPosition = cameraPosition;
  // for (int i = 0; i < 22; ++i) {
  //   dist = sphere(rayPosition);
  //   rayLength += dist;
  //   rayPosition = cameraPosition + ray * rayLength;
  // }
  // if (abs(dist) < 0.1) {
  //   vec3 normal = getNormal(rayPosition);
  //   float diff = max(dot(normal, normalize(vec3(1.0))), 0.1);
  //   gl_FragColor = vec4(vec3(diff), 1.0);
  // } else {
  //   gl_FragColor = vec4(vec3(0.0), 1.0);
  // }

  //----------------------------------------------------
  // glsl_sample - sample_26.frag
  //----------------------------------------------------
  vec2 p = vec2(vUv.x - 0.5, vUv.y - 0.5) * 2.0;
  vec3 cameraPosition = vec3(0.0, 0.0, 3.0);
  vec3 cameraDirection = vec3(0.0, 0.0, -1.0);
  vec3 cameraUp = vec3(0.0, 1.0, 0.0);
  vec3 cameraSide = cross(cameraDirection, cameraUp);
  float targetDepth = 1.0;

  vec3 ray = normalize(cameraSide * p.x + cameraUp * p.y + cameraDirection * targetDepth);

  float dist = 0.0;
  float rayLength = 0.0;
  vec3 rayPosition = cameraPosition;
  for (int i = 0; i < 64; ++i) {
    dist = transSphere(rayPosition);
    rayLength += dist;
    rayPosition = cameraPosition + ray * rayLength;
  }
  if (abs(dist) < 0.1) {
    vec3 normal = getTransNormal(rayPosition);
    float diff = max(dot(normal, normalize(vec3(1.0))), 0.1);
    gl_FragColor = vec4(vec3(diff), 1.0);
  } else {
    gl_FragColor = vec4(vec3(0.0), 1.0);
  }
}
