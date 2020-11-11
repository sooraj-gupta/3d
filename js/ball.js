const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xf7e7ff, 1);
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

var gY = -30;

const Sgeometry = new THREE.SphereGeometry( 5, 32, 32 );
const Smaterial = new THREE.MeshLambertMaterial( {color: 0x009dff} );
const sphere = new THREE.Mesh( Sgeometry, Smaterial );
scene.add( sphere );
sphere.castShadow = true;

const Sgeometrytiny = new THREE.SphereGeometry( 2, 32, 32 );
const Smaterialtiny = new THREE.MeshLambertMaterial( {color: 0x00ff4e} );
const spheretiny = new THREE.Mesh( Sgeometrytiny, Smaterialtiny );
spheretiny.position.set( 20,-15,30 );
scene.add( spheretiny );
spheretiny.castShadow = true;
spheretiny.receiveShadow = true;

const Sgeometrytiny2 = new THREE.SphereGeometry( 2, 32, 32 );
const Smaterialtiny2 = new THREE.MeshLambertMaterial( {color: 0xff4e00} );
const spheretiny2 = new THREE.Mesh( Sgeometrytiny2, Smaterialtiny2 );
spheretiny2.position.set( -7.5,-10,30 );
scene.add( spheretiny2 );
spheretiny2.castShadow = true;
spheretiny2.receiveShadow = true;


var ground = new THREE.Mesh( new THREE.BoxGeometry( 100, 10, 100), new THREE.MeshLambertMaterial() );
scene.add(ground);

var box1 = new THREE.Mesh( new THREE.BoxGeometry( 5 , 10, 5 ), new THREE.MeshLambertMaterial() );
box1.position.set( 30,-20,30 );
scene.add(box1);

var box2 = new THREE.Mesh( new THREE.BoxGeometry( 5 , 20, 5 ), new THREE.MeshLambertMaterial() );
box2.position.set( 0,-20,30 );
scene.add(box2);

var box3 = new THREE.Mesh( new THREE.BoxGeometry( 5 , 20, 5 ), new THREE.MeshLambertMaterial() );
box3.position.set( -15,-20,30 );
scene.add(box3);

box1.castShadow = true;
box2.castShadow = true;
box1.receiveShadow = true;
box2.receiveShadow = true;

ground.position.y = gY;
ground.castShadow = true;
ground.receiveShadow = true;

const light = new THREE.SpotLight( 0xffffff, 0.5);
light.position.set( 48,50,48 );
light.castShadow = true;
light.shadowDarkness = 0.1;
scene.add( light );

const light2 = new THREE.SpotLight( 0xffffff, 0.5);
light2.position.set( -48,50,48 );
light2.castShadow = true;
scene.add( light2 );
light2.shadowCameraVisible = true;

const light3 = new THREE.PointLight( 0xffffff, 0.1);
light3.position.set( -48,50,-48 );
light3.castShadow = true;
//scene.add( light3 );

const light4 = new THREE.PointLight( 0xffffff, 0.1);
light4.position.set( 48,50,-48 );
light4.castShadow = true;
//scene.add( light4 );

camera.position.z = 100;
camera.position.x = 0;
camera.position.y = -9;

var bV = 0;
var a = 0.098;

var tinyYV = 0;
var tinyV = 0.4;

var tinyYV2 = 0;
var tinyV2 = 0.4;

var i = 0;
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	sphere.position.y += bV
	spheretiny.position.y += tinyYV;
	spheretiny2.position.y += tinyYV2;
	bV -= a;
	tinyYV -= a;
	tinyYV2 -= a;
	if( sphere.position.y - 10 < gY )
	{
		bV = -bV - a;
	}
	if( spheretiny.position.y - 7 < gY )
	{
		tinyYV = -tinyYV - a;
	}
	if( spheretiny2.position.y - 7 < gY )
	{
		tinyYV2 = -tinyYV2 - a;
	}
	i += 0.01;
	camera.position.x += Math.cos( i );
	camera.position.z += Math.sin( i )*-1;
	camera.position.y = Math.sin( i )*-10;
	camera.rotation.y += 0.01;
	
	
	
	spheretiny.position.x += tinyV;
	spheretiny2.position.x += tinyV2;
	
	if ( spheretiny.position.x + 10 > 35 || spheretiny.position.x - 10 < -5  )
		tinyV = -tinyV;
	if ( spheretiny2.position.x + 10 > 5 || spheretiny2.position.x - 10 < -20  )
		tinyV2 = -tinyV2;
}
animate();	