import * as THREE from 'three';

export class CommonThree {
  protected renderer: THREE.WebGLRenderer;
  protected camera: THREE.OrthographicCamera;
  protected scene: THREE.Scene;

  constructor() {
    const width = window.innerWidth * (window.innerHeight / window.innerWidth);
    const height = window.innerHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, 0, -1);
    this.scene = new THREE.Scene();

    this.addObjects();
    this.render();
  }

  addObjects() {}

  render() {
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);
  }
}
