import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/customizingVertexShader.vert');
const fragmentShader = require('../Shaders/customizingVertexShader.frag');

export class CustomizingVertexShader extends CommonThree {
  private mesh: THREE.Mesh;

  constructor() {
    super({ isPerspective: true });
  }

  addObjects() {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  render() {
    super.render();
  }
}
