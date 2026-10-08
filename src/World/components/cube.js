import { THREE } from '../import.js';

function createCube() {
    const geometry = new THREE.BoxBufferGeometry(2,2,2);
    const material = new THREE.MeshStandardMaterial({color: 'purple'});
    const cube  = new THREE.Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.1, 0.8);

    return cube;
}

export {createCube};