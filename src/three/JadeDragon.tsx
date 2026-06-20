import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Procedural coiled dragon body built from a tube along a hand-authored
 * serpentine spline. Lit with jade rim-light + lacquer-red accent light
 * so the carved-jade-stone read comes from real WebGL lighting, not a
 * flat texture.
 */
function DragonBody() {
  const meshRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const coils = 2.4;
    const turns = 80;
    for (let i = 0; i <= turns; i++) {
      const t = i / turns;
      const angle = t * Math.PI * coils;
      const radius = 3.2 - t * 1.6;
      const x = Math.cos(angle) * radius;
      const y = (t - 0.5) * 5.2;
      const z = Math.sin(angle) * radius * 0.6;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  const geometry = useMemo(() => {
    // Tube radius tapers toward the tail using a custom radius function
    const tubularSegments = 220;
    const radialSegments = 16;
    const geo = new THREE.TubeGeometry(curve, tubularSegments, 1, radialSegments, false);

    // Taper the body: thicker near the head (t=0), thinner at the tail (t=1)
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const uvAttr = geo.getAttribute("uv") as THREE.BufferAttribute;
    for (let i = 0; i < posAttr.count; i++) {
      const v = uvAttr.getX(i); // 0..1 along the tube length
      const taper = 0.55 + 0.55 * Math.pow(1 - v, 1.3) - v * 0.25;
      const center = curve.getPointAt(v);
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);
      const dx = x - center.x;
      const dy = y - center.y;
      const dz = z - center.z;
      posAttr.setXYZ(i, center.x + dx * taper, center.y + dy * taper, center.z + dz * taper);
    }
    geo.computeVertexNormals();
    return geo;
  }, [curve]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.18;
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.15;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color="#1e7f5c"
        roughness={0.32}
        metalness={0.15}
        emissive="#0f3d2e"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function DragonHead() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = 2.5 + Math.sin(t * 0.4) * 0.15;
    ref.current.rotation.y = t * 0.18;
  });

  return (
    <group ref={ref} position={[3.2, 2.5, 0]}>
      {/* Head */}
      <mesh position={[0.4, 0.1, 0]} rotation={[0, 0, -0.15]}>
        <coneGeometry args={[0.55, 1.3, 8]} />
        <meshStandardMaterial color="#1e7f5c" roughness={0.3} metalness={0.18} emissive="#0f3d2e" emissiveIntensity={0.25} />
      </mesh>
      {/* Jaw */}
      <mesh position={[0.75, -0.15, 0]} rotation={[0, 0, -0.5]}>
        <coneGeometry args={[0.22, 0.7, 6]} />
        <meshStandardMaterial color="#1a6b4d" roughness={0.3} metalness={0.15} />
      </mesh>
      {/* Eyes - emissive lacquer red */}
      <mesh position={[0.55, 0.35, 0.28]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial color="#c92a2a" emissive="#c92a2a" emissiveIntensity={2.2} />
      </mesh>
      <mesh position={[0.55, 0.35, -0.28]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial color="#c92a2a" emissive="#c92a2a" emissiveIntensity={2.2} />
      </mesh>
      {/* Horns */}
      <mesh position={[0.15, 0.65, 0.12]} rotation={[0.3, 0, -0.4]}>
        <coneGeometry args={[0.06, 0.55, 6]} />
        <meshStandardMaterial color="#c9a45c" roughness={0.25} metalness={0.4} />
      </mesh>
      <mesh position={[0.15, 0.65, -0.12]} rotation={[-0.3, 0, -0.4]}>
        <coneGeometry args={[0.06, 0.55, 6]} />
        <meshStandardMaterial color="#c9a45c" roughness={0.25} metalness={0.4} />
      </mesh>
    </group>
  );
}

function EmberParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 140;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      let y = posAttr.getY(i);
      y += delta * 0.4;
      if (y > 5.5) y = -5.5;
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c92a2a" size={0.045} transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} color="#0f3d2e" />
      <directionalLight position={[5, 6, 4]} intensity={1.6} color="#4fd1a5" />
      <directionalLight position={[-6, -2, -4]} intensity={0.9} color="#c92a2a" />
      <pointLight position={[0, 0, 4]} intensity={0.6} color="#e3c98a" />
      <DragonBody />
      <DragonHead />
      <EmberParticles />
    </>
  );
}

export default function JadeDragon() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
