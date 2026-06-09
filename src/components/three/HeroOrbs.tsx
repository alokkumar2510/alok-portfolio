"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Rings() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, dt) => { ref.current.rotation.x += dt * 0.08; ref.current.rotation.y += dt * 0.05; });
  return (
    <group ref={ref}>
      {[1.6, 2.0, 2.4].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / (2 + i * 0.3), 0, i]}>
          <torusGeometry args={[r, 0.005, 16, 200]} />
          <meshBasicMaterial color={i % 2 ? "#7C3AED" : "#00E5FF"} transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroOrbs() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#00E5FF" />
        <directionalLight position={[-3, -2, 1]} intensity={0.6} color="#7C3AED" />
        <Stars radius={50} depth={30} count={1200} factor={3} fade speed={0.6} />
        <Rings />
      </Suspense>
    </Canvas>
  );
}
