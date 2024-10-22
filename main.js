import * as THREE from 'three';

// creating a scene
const scene = new THREE.Scene();

// adding a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// used to get hex code value
function getHexCodeColor(color){
  const threeColor=new THREE.Color(color);

  return threeColor.getHex();
}

// used to draw on the webpage
const renderer = new THREE.WebGLRenderer();
// setting size for the renderer
renderer.setSize(window.innerWidth, window.innerHeight);
// calling the function with animation loop.
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// defining a geometry(there are a lot of geometries)
const geometry = new THREE.BoxGeometry(20, 20, 20);

// below is the material
const material = new THREE.MeshLambertMaterial({ color: getHexCodeColor('#FF5733') });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Adding the light back
var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);

// handling the position of the camera, farther the camera less the size of the object appearance.
camera.position.z = 40;

// continuously animating the object.
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
