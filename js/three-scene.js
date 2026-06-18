const canvas = document.querySelector('#hero-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Particle Dragon Geometry
const particlesCount = 4000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: '#D4AF37',
    transparent: true,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 5;

// Animation
const animate = () => {
    const elapsedTime = Date.now() * 0.0005;
    
    // Wave motion for the "dragon" body
    for(let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const x = particlesGeometry.attributes.position.array[i3];
        particlesGeometry.attributes.position.array[i3 + 1] += Math.sin(elapsedTime + x) * 0.002;
    }
    particlesGeometry.attributes.position.needsUpdate = true;
    
    particlesMesh.rotation.y = elapsedTime * 0.1;
    particlesMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
