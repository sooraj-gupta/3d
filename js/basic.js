const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.setClearColor(0xf7e7ff, 1);
			document.body.appendChild( renderer.domElement );
			
			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshPhongMaterial( { color: 0x6c4ac7 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
			
			var torusGeometry = new THREE.TorusGeometry(5, 2, 20, 50);
			var phongMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
			var torus = new THREE.Mesh(torusGeometry, phongMaterial);
			scene.add(torus);
			
			var boxGeometry = new THREE.BoxGeometry();
			var lambertMaterial = new THREE.MeshLambertMaterial();
			var box = new THREE.Mesh(boxGeometry, lambertMaterial);
			scene.add(box);
			
			var box2Geometry = new THREE.BoxGeometry(50,50,-100);
			var lambertMaterial2 = new THREE.MeshLambertMaterial();
			var box2 = new THREE.Mesh(box2Geometry, lambertMaterial2);
			scene.add(box2);
			
			const light = new THREE.PointLight( );
			light.position.set( 0, 50, 220 );
			light.castShadow = true;
			scene.add( light );
			
			const amb = new THREE.AmbientLight( 0x111111 );
			scene.add( amb );

			camera.position.z = 20;
			camera.position.x = 0;
			camera.position.y = -2;
			
			cube.position.x = -20;
			var i = 0;
			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				box.rotation.y += 0.01;
				
				torus.rotation.y += 0.01;
				i+=0.01;
				camera.position.z += Math.sin( 3*i );
				camera.position.x += Math.cos( 5*i );
				camera.position.y += Math.cos( 10*i );
				
				//light.position.x -= 0.2;
				/*camera.position.z += 0.01;
				camera.position.x += 0.01;
				camera.position.y -= 0.01;*/
			}
			animate();	
			