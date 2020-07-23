import * as THREE from 'three';
import { CommonThree } from './CommonThree';
const vertexShader = require('../Shaders/customizingVertexShader.vert');
const fragmentShader = require('../Shaders/customizingVertexShader.frag');

export class CustomizingVertexShader extends CommonThree {
  constructor() {
    super({ isPerspective: false });
  }

  addObjects() {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    // const material = new THREE.ShaderMaterial({
    //   vertexShader: vertexShader,
    //   fragmentShader: fragmentShader,
    //   wireframe: false
    // });
    const material = new THREE.MeshLambertMaterial({
      color: 'green',
      transparent: true,
      opacity: 0.5
    });
    material.onBeforeCompile = (shader) => {
      const token = '#include <begin_vertex>';
      const customTransform = `
        vec3 transformed = vec3(position);
        transformed.x = position.x + position.y / 20.0;
      `;
      shader.vertexShader = shader.vertexShader.replace(token, customTransform);
      shader.fragmentShader = fragmentShader;

      // shader.vertexShader = vertexShader;
      // shader.fragmentShader = fragmentShader;
    }
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  }
}
