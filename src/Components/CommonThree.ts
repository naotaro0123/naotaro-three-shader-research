import * as THREE from 'three';

export class CommonThree {
  private width: number;
  private height: number;
  protected renderer: THREE.WebGLRenderer;
  protected camera: THREE.OrthographicCamera | THREE.PerspectiveCamera;
  protected scene: THREE.Scene;

  constructor({ isPerspective = false }) {
    this.renderer = new THREE.WebGLRenderer();
    document.body.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.setCamera(isPerspective);

    this.addObjects();
    this.render();
  }

  private resize() {
    this.width = window.innerWidth * (window.innerHeight / window.innerWidth);
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    if (this.camera) {
      this.camera.updateProjectionMatrix();
    }
  }

  private setCamera(isPerspective: boolean) {
    if (isPerspective) {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 2000);
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
