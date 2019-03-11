var scene=new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var particlesCount=1800,
    particles=new THREE.Geometry(),
    pMaterial=new THREE.PointsMaterial({
        color:0xffffff,
        size:5,
        map: THREE.ImageUtils.loadTexture(
            "images/star.jpg"
          ),
        blending: THREE.AdditiveBlending,
        transparent: true
    })

    for(var i=0; i<particlesCount; i++){
        var pX = Math.random() * 500 - 250,
            pY = Math.random() * 500 - 250,
            pZ = Math.random() * 500 - 250,
            particle=new THREE.Vector3(pX, pY, pZ);

        particles.vertices.push(particle);
    }

var particleSystem = new THREE.Points(particles,pMaterial);
particleSystem.sortParticles = true;

scene.add(particleSystem);
camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    for(i=0; i<particlesCount; i++){
        var particle=particles.vertices[i];
        particle.velocity = new THREE.Vector3(0,0,-Math.random());     
        //console.log(particle);
        particle.velocity.z-=Math.random*0.1;
        
        
      
    }

    particleSystem.rotation.z += 0.005;



    renderer.render( scene, camera );
};

animate();