import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/customizingVertexShader.vert');
const fragmentShader = require('../Shaders/customizingVertexShader.frag');

export class CustomizingVertexShader extends CommonThree {
  constructor() {
    super();
  }

  addObjects() {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      wireframe: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  }
}
