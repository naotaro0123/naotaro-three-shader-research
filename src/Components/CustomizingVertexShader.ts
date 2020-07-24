// reference: https://blog.mozvr.com/customizing-vertex-shaders/
import * as THREE from 'three';
import { CommonThree } from './CommonThree';

export class CustomizingVertexShader extends CommonThree {
  private mesh: THREE.Mesh;
  private materialShader: THREE.Shader;
  private time = 0;

  constructor() {
    super({ isPerspective: true });
    this.scene.background = new THREE.Color(0xcccccc);
  }

  addObjects() {
    const geometry = new THREE.SphereGeometry(3.0, 32, 32);
    const material = new THREE.MeshLambertMaterial({
      color: 'green',
      transparent: true,
      opacity: 0.5,
    });
    // onBeforeCompile equal rawShader
    material.onBeforeCompile = (shader) => {
      shader.uniforms['time'] = { value: 0 };
      shader.vertexShader = `
        uniform float time;
      ` + shader.vertexShader;
      const token = '#include <begin_vertex>';
      const customTransform = `
        vec3 transformed = vec3(position);
        // transformed.x = position.x + position.y / 20.0;
        transformed.x = position.x + sin(position.y * 10.0 + time + 10.0) * 0.1;
      `;
      shader.vertexShader = shader.vertexShader.replace(token, customTransform);
      this.materialShader = shader;
    }
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(1, 1, 1).normalize();
    this.scene.add(light);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.3));
  }

  render() {
    this.time++;
    this.mesh.rotation.y += 0.01;
    if (this.materialShader) {
      this.materialShader.uniforms['time'].value = this.time / 1000;
    }
    super.render();
  }
}
