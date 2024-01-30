import * as THREE from 'three';

const canvas = document.querySelector("canvas");

const width = 1280;
const height = 720;

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(width, height);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

scene.add( new THREE.AmbientLight(0xffffff, 0.3) );

const light = new THREE.DirectionalLight(0xffffff, 0.8);
light.position.set(3, 12, 5);
light.lookAt(0, 0, 0);

scene.add(light);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.y = 3;
camera.position.z = 5;

camera.lookAt(0, 0, 0);

window.render = function(playhead) {
	cube.rotation.y = playhead * Math.PI * 2;
	renderer.render(scene, camera);
}