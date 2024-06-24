varying mat3 vNormalMatrix;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vNormalMatrix = normalMatrix;
  vNormal = normal;
  vUv = uv;
  vPosition = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
