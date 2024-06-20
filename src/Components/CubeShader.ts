// reference: https://www.pentacreation.com/blog/2020/07/200720.html
import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/cubeShader.vert');
const fragmentShader = require('../Shaders/cubeShader.frag');

const uniforms = {
  time: {
    type: 'f',
    value: 1.0,
  } as THREE.IUniform,
};

export class CubeShader extends CommonThree {
  private mesh: THREE.Mesh;
  private step = 0;

  constructor() {
    super({ isPerspective: true });
  }

  addObjects() {
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.RawShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  render() {
    this.step++;
    (this.mesh.material as THREE.RawShaderMaterial).uniforms['time'].value = (this.step / 60.0) * 5;
    super.render();
  }
}
