attribute vec3 color;
varying vec3 vColor;

void main() {
  vColor = color;
  gl_Position = vec4(projectionMatrix * modelViewMatrix * vec4(position, 1.0));
}
