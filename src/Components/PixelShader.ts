import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/pixelShader.vert');
const fragmentShader = require('../Shaders/pixelShader.frag');

type Uniforms = {
  resolution: { value: THREE.Vector2 };
};

export class PixelShader extends CommonThree {
  private mesh: THREE.Mesh;

  constructor() {
    super({ isPerspective: false });
  }

  addObjects() {
    const { clientWidth, clientHeight, style } = this.renderer.domElement;
    style.border = '1px solid #333';
    const uniforms: Uniforms = {
      resolution: { value: new THREE.Vector2(clientWidth, clientHeight) },
    };
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
    super.render();
  }
}
