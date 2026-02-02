import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralParticles({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const [positions, connections] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const connectionPairs: number[] = [];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 2;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    // Create neural connections
    const connectionCount = Math.floor(count * 0.3);
    for (let i = 0; i < connectionCount; i++) {
      const a = Math.floor(Math.random() * count);
      const b = Math.floor(Math.random() * count);
      
      const dist = Math.sqrt(
        Math.pow(pos[a * 3] - pos[b * 3], 2) +
        Math.pow(pos[a * 3 + 1] - pos[b * 3 + 1], 2) +
        Math.pow(pos[a * 3 + 2] - pos[b * 3 + 2], 2)
      );

      if (dist < 2) {
        connectionPairs.push(
          pos[a * 3], pos[a * 3 + 1], pos[a * 3 + 2],
          pos[b * 3], pos[b * 3 + 1], pos[b * 3 + 2]
        );
      }
    }

    return [pos, new Float32Array(connectionPairs)];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
    if (lineRef.current) {
      lineRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      lineRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(connections, 3));
    return geometry;
  }, [connections]);

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function FloatingOrbs() {
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (orb1.current) {
      orb1.current.position.x = Math.sin(t * 0.3) * 2;
      orb1.current.position.y = Math.cos(t * 0.5) * 1.5;
    }
    if (orb2.current) {
      orb2.current.position.x = Math.cos(t * 0.4) * 2.5;
      orb2.current.position.y = Math.sin(t * 0.3) * 2;
    }
    if (orb3.current) {
      orb3.current.position.x = Math.sin(t * 0.2) * 1.5;
      orb3.current.position.z = Math.cos(t * 0.4) * 2;
    }
  });

  return (
    <group>
      <mesh ref={orb1} position={[2, 1, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
      </mesh>
      <mesh ref={orb2} position={[-2, -1, -1]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
      </mesh>
      <mesh ref={orb3} position={[0, 2, -3]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(220, 20%, 97%) 0%, hsl(230, 25%, 95%) 50%, hsl(240, 20%, 93%) 100%)',
        }}
      />
      
      {/* 3D Neural Network */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ position: 'absolute', inset: 0 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <NeuralParticles count={1500} />
        <FloatingOrbs />
      </Canvas>

      {/* Radial Gradient Overlays */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, hsla(217, 91%, 60%, 0.08) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, hsla(262, 83%, 68%, 0.08) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, hsla(192, 91%, 56%, 0.05) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default NeuralBackground;
