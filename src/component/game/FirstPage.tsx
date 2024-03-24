
// import * as THREE from 'three';

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { GLTFLoader } from 'three/examples/jsm/Addons.js';
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xF40A0A);
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.50, 5000 );
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setClearColor(0xffffff, 0); 
// renderer.setSize( window.innerWidth, window.innerHeight );
// const controls = new OrbitControls( camera, renderer.domElement );
// controls.minDistance = 50;
// controls.maxDistance = 500;
// document.body.appendChild( renderer.domElement );
// controls.update()



// let textMesh : THREE.Mesh;
// function FirstPage(){
//   // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//   // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//   // const cube = new THREE.Mesh( geometry, material );
//   // scene.add( cube );

//   const loader = new FontLoader();
//   const gltfLoader = new GLTFLoader();

//   gltfLoader.load('button.glb', function(gltf : any){
//     const object = gltf.scene;
//     object.scale.set(50, 50, 50);
//     object.rotation.x = Math.PI / 2;
//     object.position.y = 100;
//     scene.add(object);
//   })
//   loader.load('Madimi One_Regular.json', function (font) {
//     const geometry = new TextGeometry('Ping Pong', {
//       font: font,
//       size: 80,
//       height: 5,
//       curveSegments: 12,
//       bevelEnabled: true,
//       bevelThickness: 10,
//       bevelSize: 8,
//       bevelOffset: 0,
//       bevelSegments: 5
//     });


//     textMesh = new THREE.Mesh(geometry, [
//       new THREE.MeshPhongMaterial({ color: 0x2BE911 }),
//       new THREE.MeshPhongMaterial({ color: 0x7F50B })
//     ]);
    
//     textMesh.castShadow = true;
//     textMesh.position.y = 0;
//     textMesh.position.z = 0;
//     textMesh.position.x = -100;
//     textMesh.scale.set(0.5, 0.5, 0.5);
//     scene.add(textMesh);
    
//   });
  
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);
  
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);
//   camera.position.z = 179;
//   camera.position.x = 31;
//   camera.position.y = 60;

//   const plane = new THREE.Mesh(new THREE.PlaneGeometry(50000, 50000), new THREE.MeshPhongMaterial({color : 0xF40A0A, side : THREE.DoubleSide}));
//   plane.rotation.x = -Math.PI / 2;
//   plane.scale.set(4, 4, 4);
//   plane.receiveShadow = true;
//   scene.add(plane);
//   function animate() {
//     if (textMesh) {
//       // textMesh.rotation.y += 0.05;
//       // textMesh.rotation.x += 0.03;
//     }
//     requestAnimationFrame( animate );
//     renderer.render( scene, camera );
//   }
  
//   animate();
  
// }

// export default FirstPage;


import * as THREE from 'three';

// import Stats from '../../../node_modules/three/examples/jsm/libs/stats.module.js';

import { FBXLoader, GLTFLoader, OrbitControls } from 'three/examples/jsm/Addons.js';
import { UserContext } from './StartGame';
import { useContext } from 'react';
import Stats from 'three/examples/jsm/libs/stats.module.js';

let tableWidth = 30;
let tableHeight = 50;



export class Player
{
    constructor(name :any, goals : any)
    {
        this.raquete = undefined;
        this.goals = goals;
        this.name = name;
    }
    raquete : any;
    goals : any;
    name : any;
}
let camera:any, scene:any, renderer:any, stats:any;
scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
renderer.setClearColor(0x000000, 0); 
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
camera.position.set( 100, 200, 300 );
const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 100, 0 );
controls.maxDistance = 500;
controls.update();



const  player1 = new Player(document.getElementById("player1Name"), 0);
const  player2 = new Player(document.getElementById("player2Name"), 0);
let boundingBox : any;
const glbloader = new GLTFLoader();
let table : any;


const sphereGeometry = new THREE.SphereGeometry(0.05, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xEAAD0F, transparent : true})

let ball = {
	dirX : 0,
    dirY : 0,
    object :  new THREE.Mesh(sphereGeometry, sphereMaterial),
}

const ShodowGeometry = new THREE.SphereGeometry(0.05, 32, 32);
const ShodowMaterial = new THREE.MeshBasicMaterial({color: 0x000000, transparent : true, opacity : 0.8})
const shodow = new THREE.Mesh(ShodowGeometry, ShodowMaterial);
shodow.position.y = -0.8;
scene.add(shodow);

glbloader.load('src/component/game/table.glb', (gltf)=>{
	table = gltf.scene;
	table.castShadow = true;
	table.scale.set(30, 30, 30);
	boundingBox = new THREE.Box3().setFromObject(table);
	tableWidth = boundingBox.max.x - boundingBox.min.x;
	tableHeight = boundingBox.max.z - boundingBox.min.z;
	scene.add(table);
})



interface props{
    roomName : string;
    mode : string;
}



export default function FirstPage({roomName , mode} : props){
	
			const socket = useContext(UserContext);
			const clock = new THREE.Clock();

			let mixer:any;

			base();
			logic();
			function logic(){

				scene.add(new THREE.AxesHelper(100))
				setTimeout(() =>{
					ball.object.position.y = 50;
					ball.object.position.z =  -(boundingBox.max.z - boundingBox.min.z) * 0.4;
					ball.object.position.x = 30;
					ball.object.scale.set(21, 21, 21);
					scene.add( ball.object );
					glbloader.load( 'src/component/game/raquete1.glb', function ( gltf : any ) {
					
						player1.raquete = gltf.scene;
						player1.raquete.scale.set(6, 6, 6);
						player1.raquete.position.set(0, 40, (boundingBox.max.z - boundingBox.min.z) * -0.5);
						scene.add( player1.raquete );
							
					});
					glbloader.load( 'src/component/game/raquete1.glb', function ( gltf : any ) {
					
						player2.raquete = gltf.scene;
						player2.raquete.scale.set(6, 6, 6);
						// boundingBox = new THREE.Box3().setFromObject(table);
				
						player2.raquete.position.set(0, 40, (boundingBox.max.z - boundingBox.min.z) * 0.5);
						scene.add( player2.raquete );
							
					});
					// glbloader.load('gameready_cottage_free.glb', (gltf) => {
					// 	gltf.scene.scale.set(100, 100, 100);
					// 	scene.add(gltf.scene);
					// })
				}, 1000)

				renderer.domElement.addEventListener('mousemove', onMouseMove);

				let initclientX = window.innerWidth / 2;
				let initClientY = window.innerHeight / 2;
				let stepX = 0;
				let stepZ = -3;
				let raqueteStepX = 0;
				function onMouseMove(event : MouseEvent) {
						if (player1.raquete)// && !controls.enabled
						{
							moveZ = (event.clientY - initClientY) / window.innerHeight * 70;
							stepX = (event.clientX - initclientX) / window.innerWidth * (boundingBox.max.x - boundingBox.min.x); 
							raqueteStepX = stepX;
							stepX = stepX * 1.5;
							player1.raquete.position.z -= moveZ;
							player1.raquete.position.x -=  raqueteStepX;


							if (player1.raquete.position.x > 5)
								player1.raquete.rotation.z  = -Math.PI / 6;
							else if (player1.raquete.position.x < -5)
								player1.raquete.rotation.z  = Math.PI / 6;
							else
								player1.raquete.rotation.z  = 0;

							if (mode == 'online')
								socket.emit('PlayerMoves', [player1.raquete.position, player1.raquete.rotation, 'salah', index]);
							if (index == 1)
							{
								socket.emit('moveX', ['salah' ,raqueteStepX]);
								socket.emit('moveZ', ['salah' ,moveZ]);
								socket.emit('speed', ['salah', event.clientY - initClientY]);
							}
							else{
								if (event.clientY - initClientY < -60){
									p1Speed =  -6;
									deltaT = 1 / 30;
									player1fp = (boundingBox.max.z - boundingBox.min.z) / 3;

								}
								else if (event.clientY - initClientY < -30){
									p1Speed =  -3.5;
									player1fp = (boundingBox.max.z - boundingBox.min.z) / 3;
								}
								else {
									p1Speed =  -3;
									player1fp = (boundingBox.max.z - boundingBox.min.z) / 4;
								}
							}
							initclientX = event.clientX ;
							initClientY = event.clientY;
						}

				}
				function reset(){
					ball.object.position.y = 50;
					ball.object.position.z = -(boundingBox.max.z - boundingBox.min.z) * 0.4 * (stepZ < 0 ? 1 : -1);
					ball.object.position.x = 35;
					ball.dirX = 0;
					// falligPoint = (boundingBox.max.z - boundingBox.min.z) / 4;
					stepZ  = 0;
					up = false;
					floorY = 45;
					deltaT = 1/35;
					touchNet = false;
					if (mode == "practice")
						player2.raquete.position.z = (boundingBox.max.z - boundingBox.min.z) * 0.5

				}
					
				let maxZ = 11 / 2;
				let minZ = 11 / -2;
				let maxX = 6 / 2;
				let minX = 6 / -2;
				let moveX = 0;
				let moveZ = 0;
				let timer1 = 0;
				let timer2 = 0;
				let flag1 = false;
				let flag2 = false;
				let player1fp = (boundingBox.max.z - boundingBox.min.z) / 4;
				let player2fp = (boundingBox.max.z - boundingBox.min.z) / 4;

				function timerCheck(){
					if (flag1)
						timer1++;
					if (flag2)
						timer2++;
					if (timer1 > 20)
					{
						timer1 = 0;
						flag1 = false;
					}
					if (timer2 > 20)
					{
						timer2 = 0;
						flag2 = false;
					}
				}

				let gravity = 9.8;

				let deltaT = 1/35;        
				let up = false;
				let move = false;
				let rot = 0;
				let index : number;

				let factor = 10;
				function calculateStepY(){
					return ((-0.5 * gravity * Math.pow(deltaT, 2) - Math.abs(stepZ) * (deltaT)) * factor); // stepz could be negative that is why must be abs
				}

				function touchRaquete(raqueteX : number, raqueteRotZ : number){
					// if (Math.abs(ball.object.position.x - raqueteX) < 6)
					// 	return (true);
					// if (Math.abs(ball.object.position.x - raqueteX) - 12 < 6 && Math.abs(ball.object.position.x)  > Math.abs(raqueteX) && raqueteRotZ != 0)
					// 	return(true);
					// if (Math.abs(ball.object.position.x - raqueteX) + 12 < 6 && raqueteRotZ != 0)
					// 	return(true);



					if (ball.object.position.x <= 0 && raqueteX <= 0 && raqueteRotZ == 0)
						return((Math.abs(ball.object.position.x - raqueteX)) < 25 ? true : false);
					else if (ball.object.position.x <= 0 && raqueteX <= 0 && raqueteRotZ != 0)
						return((Math.abs(ball.object.position.x - (raqueteX - 12)) < 15) ? true : false);
					else if (ball.object.position.x >= 0 && raqueteX >= 0 && raqueteRotZ == 0)
						return((Math.abs(ball.object.position.x - raqueteX)) < 25 ? true : false);
					else if (ball.object.position.x >= 0 && raqueteX >= 0 && raqueteRotZ != 0)
						return((Math.abs(ball.object.position.x - (raqueteX + 12)) < 15) ? true : false);
					// if (raqueteRotZ == 0)
					// 	return((Math.abs(ball.object.position.x - raqueteX)) < 10 ? true : false);
					// return((Math.abs(ball.object.position.x - (raqueteX + 12)) < 10) ? true : false);
					return(false);
				}

				let middle = 0;
				let falligPoint = (boundingBox.max.z - boundingBox.min.z) / 4;
				let floorY = 45;
				let touchNet = false;

		function animate() {

				if (index == undefined && mode == 'online')
					socket.emit('index', "salah");
				if (ball.object && table && player1.raquete && player2.raquete && (index == 0 || mode == "practice"))
				{
						console.log("falligPoint : " ,falligPoint)
						maxZ = tableHeight / 2;
						minZ = tableHeight / -2;
						maxX = tableWidth / 2.2;
						minX = tableWidth / -2.2;
						if (!touchNet && !flag2 && Math.abs(player2.raquete.position.z - ball.object.position.z) < 10 && touchRaquete(player2.raquete.position.x, player2.raquete.rotation.z))
						{

							falligPoint = player2fp;
							if (mode == "practice")
								falligPoint = (boundingBox.max.z - boundingBox.min.z) / 3;
							middle = ball.object.position.z - falligPoint;   
							stepZ = p2Speed;
							move = true;
							up = false; 
							flag2 = true;
							deltaT = 1/35;
							stepZ *= -1;
							ball.dirX += -moveX / 4;
							moveX = 0;
							if (mode == "practice"){
								ball.dirX  = 0;
								// player2.raquete.position.z -= (boundingBox.max.z - boundingBox.min.z) * 0.3;
								stepZ = -3;
							}
						}
						if (!touchNet && !flag1 && Math.abs(player1.raquete.position.z - ball.object.position.z) < 10 && touchRaquete(player1.raquete.position.x, player1.raquete.rotation.z))
						{
							falligPoint = player1fp;
							middle = ball.object.position.z + falligPoint;;
							stepZ = p1Speed;
							up = false;
							move = true;
							flag1 = true;
							deltaT = 1/35;
							stepZ *= -1;
							ball.dirX += -stepX / 4;
							// if (mode == "practice")
								// player2.raquete.position.z = (boundingBox.max.z - boundingBox.min.z) * 0.5;
						}
						else if(ball.object.position.z > maxZ*1.5)
						{
							// floorY = 0;
							reset();
						}
						else if(ball.object.position.z < minZ*1.5)
						{
							// floorY = 0;
							reset()
						}
						// if (ball.object.position.x >= maxX || ball.object.position.x <= minX){
							// reset();
							// floorY = -1;
						// }
						if (move){
							ball.object.position.x += ball.dirX;
							ball.object.position.z += stepZ;
							if (Math.abs(ball.object.position.z) < 10 && ball.object.position.y < 50 && (mode == "online" || stepZ > 0)){
								falligPoint = 0.1;
								middle = ball.object.position.z - falligPoint;;
								up = false;
								stepZ *= -1;
								// stepZ = stepZ / 3;
								touchNet = true;
								console.log("falligPointCHange : " ,falligPoint)

							}
							if (ball.object.position.y > floorY && !up)
							{
								console.log("TRUE")
								if(ball.object.position.z < middle && stepZ > 0)
									ball.object.position.y -= calculateStepY();
								else if (ball.object.position.z  > middle && stepZ > 0)
									ball.object.position.y += calculateStepY();
								else if (ball.object.position.z < middle && stepZ < 0)
									ball.object.position.y += calculateStepY() ;
								else if (ball.object.position.z  > middle && stepZ < 0)
									ball.object.position.y -= calculateStepY();
							}
							else{
								ball.object.position.y -= calculateStepY();
								if (ball.object.position.y > floorY)
									up = false;
							}
							if (ball.object.position.y <= floorY)
							{
								up = true;
								if (stepZ > 0)
									middle = ball.object.position.z + falligPoint / 2;
								else
									middle = ball.object.position.z - falligPoint / 2;
							}

						}
						if (mode == "practice"){
						player2.raquete.position.x =  ball.object.position.x ;
						}
						timerCheck();
						}
						if (ball.object && mode == "online" && index == 0)
							socket.emit('data', [{x : ball.object.position.x, y : ball.object.position.y, z : ball.object.position.z}, "salah"]);

						shodow.position.x = ball.object.position.x;
						shodow.position.z = ball.object.position.z;
						if (shodow.position.z > maxZ || shodow.position.z < minZ || shodow.position.x < minX || shodow.position.x > maxX)
							shodow.material.opacity = 0;
						else{
							ShodowMaterial.color = new THREE.Color(0x0000000);
							shodow.material.opacity = 0.5;
						}
					// 	setTimeout(function() {
					// 		requestAnimationFrame(animate);
					// }, 1000 / 60); 
						requestAnimationFrame( animate );

						const delta = clock.getDelta();

						if ( mixer ) mixer.update( delta );

						renderer.render( scene, camera );

						stats.update();
				}

				document.addEventListener('mousedown', mouseDown);
				document.addEventListener('mouseup', mouseUp);

				function mouseUp(event : MouseEvent){
					if (controls)
						controls.enabled = true;
					if (player1.raquete)
						player1.raquete.rotation.x = 0;
				}

				function mouseDown(event : MouseEvent) {
					const mouse = new THREE.Vector2();
					mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
					mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

					const raycaster = new THREE.Raycaster();
					raycaster.setFromCamera(mouse, camera);

					const intersects = raycaster.intersectObject(player1.raquete);
					if (!intersects)
						return ;
					if (intersects.length > 0) {
						controls.enabled = false;
					}
				}

				socket.on('data', (message : any)=> {
					if (index == 1 && ball.object){
						ball.object.position.x = message[0].x;
						ball.object.position.y = message[0].y;
						ball.object.position.z = -message[0].z;
					}
				})

				socket.on('moveX', (mx : any) => {
					moveX = mx;
				})


				let p2moveZ : number;
				socket.on('moveZ', (mz : any) => {
					// console.log("moveZ : ", mz);

					p2moveZ = mz;
				})

				socket.on('PlayerMoves', (pos : any, rot : any) => {
					player2.raquete.position.x = pos.x;
					player2.raquete.position.y = pos.y;
					player2.raquete.position.z = -pos.z;

					player2.raquete.rotation.copy(rot);

				})


				socket.on('index', (i) =>{
					index = i;
					console.log("Game index : ", i);
				})

				let p2Speed =  3;
				let p1Speed = -3;

				socket.on('speed', (spd) => {
					p2Speed = spd;
				})
				500
				
				socket.on('falligPoint', (fp) =>{
					player2fp = (boundingBox.max.z - boundingBox.min.z) / fp;
				})
				animate();

			}

			function base() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );



				scene.background = new THREE.Color( 0x000000 );
				scene.fog = new THREE.Fog(0x000000, 200, 600)

				const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 5 );
				hemiLight.position.set( 0, 200, 0 );
				scene.add( hemiLight );

				const dirLight = new THREE.DirectionalLight( 0xffffff, 5 );
				dirLight.position.set( 0, 200, 100 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 180;
				dirLight.shadow.camera.bottom = - 100;
				dirLight.shadow.camera.left = - 120;
				dirLight.shadow.camera.right = 120;
				scene.add( dirLight );
				const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
				mesh.rotation.x = - Math.PI / 2;
				mesh.receiveShadow = true;
				scene.add( mesh );

				const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
				grid.material.opacity = 0.2;
				grid.material.transparent = true;
				scene.add( grid );

				const fbxloader = new FBXLoader();
				fbxloader.load( 'src/component/game/people_freePack_webGl_ani.fbx', function ( object  : any) {
          
				mixer = new THREE.AnimationMixer( object );
		
				const action = mixer.clipAction( object.animations[ 0 ] );
				action.play();
				object.traverse( function ( child : any ) {
				if ( child.isMesh ) {
					child.castShadow = true;
					child.receiveShadow = true;
				}} );
				object.position.z = 500;
				object.position.x = -500;
				object.scale.set(0.5, 0.5, 0.5);
				object.rotation.y = Math.PI/2;
				scene.add( object );
				} );



				container.appendChild( renderer.domElement );
				window.addEventListener( 'resize', onWindowResize );

			// stats
			stats = new Stats();
			// container.appendChild( stats.dom );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}


			// function animate() {

			// 	requestAnimationFrame( animate );

			// 	const delta = clock.getDelta();

			// 	if ( mixer ) mixer.update( delta );

			// 	renderer.render( scene, camera );

			// 	stats.update();

			// }
    }