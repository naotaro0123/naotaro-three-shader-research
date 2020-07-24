import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/basicShader.vert');
const fragmentShader = require('../Shaders/basicShader.frag');

export class BasicShader extends CommonThree {
  constructor() {
    super({ isPerspective: false });
  }

  addObjects() {
    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      wireframe: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  }

  render() {
    super.render();
  }
}
