// reference: https://www.pentacreation.com/blog/2020/06/200627.html
import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/triangleShader.vert');
const fragmentShader = require('../Shaders/triangleShader.frag');

export class TriangleShader extends CommonThree {
  constructor() {
    super({ isPerspective: false });
  }

  addObjects() {
    // eslint-disable-next-line prettier/prettier
    const positions = new Float32Array([
       1.0, 0.0, 0.0,
       0.0, 1.0, 0.0,
      -1.0, 0.0, 0.0,
    ]);
    // eslint-disable-next-line prettier/prettier
    const colors = new Float32Array([
      1.0, 0.0, 0.0,
      0.0, 0.0, 1.0,
      0.0, 1.0, 0.0,
    ]);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
    });
    const triangle = new THREE.Mesh(geometry, material);
    triangle.position.set(0, -0.5, 0);
    this.scene.add(triangle);
  }

  render() {
    super.render();
  }
}
