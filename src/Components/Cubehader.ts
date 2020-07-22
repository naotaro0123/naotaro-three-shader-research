import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const cubeVertexShader = require('../Shaders/cubeShader.vert');
const cubeFragmentShader = require('../Shaders/cubeShader.frag');

const uniforms = {
  time: {
    type: 'f',
    value: 1.0
  }
}

export class CubeShader extends CommonThree {
  private mesh: THREE.Mesh;
  private step = 0;

  constructor() {
    super();
  }

  addObjects() {
    const geometry = new THREE.BoxBufferGeometry(4, 4, 4);
    const material = new THREE.RawShaderMaterial({
      uniforms,
      vertexShader: cubeVertexShader,
      fragmentShader: cubeFragmentShader,
      wireframe: false
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  render() {
    this.step++;
    console.log(this.step)
    this.mesh.material = new THREE.RawShaderMaterial({
      uniforms,
      vertexShader: cubeVertexShader,
      fragmentShader: cubeFragmentShader,
    });
    // (this.mesh.material as THREE.Material).uniforms.time.value = this.step / 60.0 * 5;
    super.render();
  }
}
