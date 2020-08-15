import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/sampleRayShader.vert');
const fragmentShader = require('../Shaders/sampleRayShader.frag');

const uniforms = {
  time: {
    value: 1.0,
  } as THREE.IUniform,
};

export class SampleRayShader extends CommonThree {
  private mesh: THREE.Mesh;
  private step = 0;

  constructor() {
    super({ isPerspective: false });
  }

  addObjects() {
    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      wireframe: false,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  render() {
    this.step++;
    (this.mesh.material as THREE.RawShaderMaterial).uniforms['time'].value = this.step / 60.0;
    super.render();
  }
}
