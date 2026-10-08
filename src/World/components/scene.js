import { THREE } from '../import.js';

function createScene() {
    const scene = new THREE.Scene();

    scene.background = new THREE.Color('skyblue');

    return scene;
}

export { createScene };