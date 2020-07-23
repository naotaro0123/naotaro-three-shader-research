import * as THREE from 'three';

export class CommonThree {
  protected renderer: THREE.WebGLRenderer;
  protected camera: THREE.OrthographicCamera | THREE.PerspectiveCamera;
  protected scene: THREE.Scene;

  constructor({ isPerspective = false }) {
    const width = window.innerWidth * (window.innerHeight / window.innerWidth);
    const height = window.innerHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

    this.setCamera(isPerspective, width, height);
    this.scene = new THREE.Scene();

    this.addObjects();
    this.render();
  }

  private setCamera(isPerspective: boolean, width: number, height: number) {
    if (isPerspective) {
      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
      this.camera.position.set(0, 4, 10);
      this.camera.rotation.set(-0.35, 0, 0);
    } else {
      this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1);
    }
  }

  addObjects() {}

  render() {
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);
  }
}
