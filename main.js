import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


function getHexCodeColor(color){
  const threeColor=new THREE.Color(color);

  return threeColor.getHex();
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(20, 20, 20);

const material = new THREE.MeshLambertMaterial({ color: getHexCodeColor('#FF5733') });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Adding the light back
var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);

camera.position.z = 40;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
