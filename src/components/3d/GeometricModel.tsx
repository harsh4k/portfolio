import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

function BuildCube() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer wireframe cube */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#EEE9DC"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      {/* Inner solid cube */}
      <mesh>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color="#F13A18"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
      {/* Orbiting ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.03, 16, 64]} />
        <meshStandardMaterial color="#C9FF3D" />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[1.6, 0.03, 16, 64]} />
        <meshStandardMaterial color="#EEE9DC" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function GeometricModel() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#F13A18" />
        <BuildCube />
      </Canvas>
    </div>
  );
}
