import * as THREE from 'three';
import { GUI } from 'dat.gui';

export type TransControlMode = 'translate' | 'rotate' | 'scale';

export class DatGUI {
  public rgbColor: number[];
  private gui: GUI;

  constructor(private object: THREE.Object3D | number[], private mode?: TransControlMode) {
    this.initGUI();
  }

  private initGUI() {
    this.gui = new GUI();
    if (this.object instanceof THREE.Mesh) {
      this.addXYZFolder(this.mode, this.object);
    } else if (this.object instanceof Array) {
      this.addRGBFolder(this.object);
    }
  }

  private target(object: THREE.Object3D) {
    switch (this.mode) {
      case 'translate':
        return object.position;
      case 'rotate':
        return object.rotation;
      case 'scale':
        return object.scale;
      default:
        return object.position;
    }
  }

  private addXYZFolder(folderName: string, object: THREE.Object3D) {
    const guiFolder = this.gui.addFolder(folderName);
    const max = 10;
    const min = -max;
    ['x', 'y', 'z'].forEach((pos) => {
      guiFolder.add(this.target(object), pos, min, max, 0.01);
    });
    guiFolder.open();
  }

  private addRGBFolder(array: number[]) {
    const guiFolder = this.gui.addFolder('RGB');
    this.rgbColor = array;
    const rgb = {
      value: this.rgbColor.map((color) => color * 255),
    };
    guiFolder.addColor(rgb, 'value').onChange((values: number[]) => {
      values.forEach((value: number, index: number) => {
        this.rgbColor[index] = value / 255;
      });
    });
    guiFolder.open();
  }

  update() {
    this.gui.updateDisplay();
  }
}
