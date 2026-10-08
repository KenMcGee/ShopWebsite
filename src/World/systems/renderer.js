import { THREE } from '../import.js';

function createRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.physicallyCorrectLights = true;
    return renderer;
}

export { createRenderer };