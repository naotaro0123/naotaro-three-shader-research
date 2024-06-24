import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/pixelShader.vert');
const fragmentShader = require('../Shaders/pixelShader.frag');

type Uniforms = {
  time: {
    value: number;
  };
  resolution: { value: THREE.Vector2 };
};

export class PixelShader extends CommonThree {
  private mesh: THREE.Mesh;
  // private step = 0;

  constructor() {
    super({ isPerspective: false });
  }

  addObjects() {
    const { clientWidth, clientHeight } = this.renderer.domElement;
    const uniforms: Uniforms = {
      time: { value: 0.0 },
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
    // this.step++;
    // (this.mesh.material as THREE.RawShaderMaterial).uniforms['time'].value = this.step / 60.0;
    super.render();
  }
}
