import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(cube2);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
group.add(cube3);
cube3.position.x = 2;

/**
 * Position
 */
/*
Position is a Vector3; it has three properties: x, y, and z
- x axis is going to the right
- y axis is going upward
- z axis is going forward (towards the user)

Position has many methods:
.length() provides the distance between the object and the center of the scene
    example: console.log(mesh.position.length());
.distanceTo() provides the distance from another Vector3 object
    example 1: console.log(mesh.position.distanceTo(new THREE.Vector3(0, 1, 2)));
    example 2: console.log(mesh.position.distanceTo(camera.position));
.normalize() takes the vector's length and reduces it so that it becomes 1
.set(x, y, z) changes all 3 values of x, y, and z at once
    example: mesh.position.set(0.7, -0.6, 1);
*/
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.set(0.7, 0, 1);

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Scale
 */
/*
Scale is a Vector3
*/
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
// mesh.scale.set(2, 0.5, 0.5);

/**
 * Rotation
 */
/*
Rotation is not a Vector3. It is a Euler
Euler(x: Float, y: Float, z: Float, order: String)
The value of the axes is expressed in radians. Half a rotation is 3.14150, or Pi, but we can use Math.PI
BE CAREFUL! The order of the rotation axes matters
*/
// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI / 3;
// mesh.rotation.y = Math.PI / 4;
// mesh.rotation.z = Math.PI / 2;

/**
 * LOOK AT THIS!
 */
/*
Object3D instances have a lookAt(...) method which rotates the object so that its -z faces the target you provided. The target must be a Vector3
    example 1: camera.lookAt(new THREE.Vector3(0, -1, 0));
    example 2: camera.lookAt(mesh.position); => camera looking straight at our object
*/

/**
 * Sizes
 */
const sizes = {
	width: 800,
	height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.x = 1;
// camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);
// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
