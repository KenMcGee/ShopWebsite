import { THREE } from '../import.js';

function createRenderer() {
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.physicallyCorrectLights = true;
    return renderer;
}

export { createRenderer };