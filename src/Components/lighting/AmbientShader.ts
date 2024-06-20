import * as THREE from 'three';
import { CommonThree } from '../CommonThree';
import { DatGUI } from '../common/DatGUI';
const vertexShader = require('../../Shaders/ambientShader.vert');
const fragmentShader = require('../../Shaders/ambientShader.frag');

const uniforms = {
  time: {
    type: 'f',
    value: 1.0,
  } as THREE.IUniform,
  ambientColor: {
    type: 'f',
    value: [0.2, 0.2, 0.2],
  } as THREE.IUniform,
};

export class AmbientShader extends CommonThree {
  private gui: DatGUI;
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

    // this.gui = new DatGUI(this.mesh, 'rotate');
    this.gui = new DatGUI(uniforms.ambientColor.value);
  }

  render() {
    this.step++;
    if (this.mesh.material instanceof THREE.RawShaderMaterial) {
      this.mesh.material.uniforms['time'].value = (this.step / 60.0) * 5;
      if (this.gui.rgbColors) {
        this.mesh.material.uniforms['ambientColor'].value = this.gui.rgbColors;
      }
    }
    super.render();
  }
}
