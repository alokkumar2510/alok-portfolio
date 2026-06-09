"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Core() {
  const m = useRef<THREE.Mesh>(null!);
  useFrame((s) => { if (m.current) { m.current.rotation.y = s.clock.elapsedTime * 0.3; m.current.rotation.x = s.clock.elapsedTime * 0.15; } });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={m}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color="#00E5FF" wireframe emissive="#00E5FF" emissiveIntensity={0.6} />
      </mesh>
    </Float>
  );
}

function OrbitNodes() {
  const group = useRef<THREE.Group>(null!);
  const items = useMemo(() => Array.from({ length: 18 }).map((_, i) => {
    const r = 1.8 + (i % 3) * 0.6;
    const a = (i / 18) * Math.PI * 2;
    const y = (Math.sin(i) * 0.6);
    return { pos: [Math.cos(a) * r, y, Math.sin(a) * r] as [number, number, number], c: i % 2 ? "#7C3AED" : "#22D3EE" };
  }), []);
  useFrame((_, dt) => { if (group.current) group.current.rotation.y += dt * 0.18; });
  return (
    <group ref={group}>
      {items.map((it, i) => (
        <mesh key={i} position={it.pos}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color={it.c} emissive={it.c} emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  );
}

export function SkillGalaxy() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 5.5], fov: 50 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#00E5FF" />
      <pointLight position={[-3, -2, 0]} intensity={0.8} color="#7C3AED" />
      <Stars radius={40} depth={20} count={800} factor={2.5} fade speed={0.4} />
      <Core />
      <OrbitNodes />
    </Canvas>
  );
}
