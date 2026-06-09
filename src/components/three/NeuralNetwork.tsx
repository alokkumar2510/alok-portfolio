"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Network() {
  const groupRef = useRef<THREE.Group>(null!);

  const { nodes, lineSegments } = useMemo(() => {
    const layers = [4, 7, 7, 5];
    const spacing = 1.6;
    const nodes: { pos: [number, number, number]; layer: number }[] = [];
    layers.forEach((count, li) => {
      const x = (li - (layers.length - 1) / 2) * spacing;
      for (let i = 0; i < count; i++) {
        const y = (i - (count - 1) / 2) * 0.7;
        nodes.push({ pos: [x, y, (Math.random() - 0.5) * 0.4], layer: li });
      }
    });

    // Build flat positions array for LineSegments
    const positions: number[] = [];
    let offset = 0;
    for (let li = 0; li < layers.length - 1; li++) {
      const a = layers[li], b = layers[li + 1];
      for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
          const p1 = nodes[offset + i].pos;
          const p2 = nodes[offset + a + j].pos;
          positions.push(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
        }
      }
      offset += a;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return { nodes, lineSegments: geom };
  }, []);

  useFrame((s, dt) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += dt * 0.12;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.18;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={n.layer % 2 ? "#7C3AED" : "#00E5FF"}
            emissive={n.layer % 2 ? "#7C3AED" : "#00E5FF"}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}
      <lineSegments>
        <primitive object={lineSegments} attach="geometry" />
        <lineBasicMaterial color="#22D3EE" transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

export function NeuralNetwork() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 55 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={1} color="#00E5FF" />
      <pointLight position={[-4, -2, -2]} intensity={1} color="#7C3AED" />
      <Network />
    </Canvas>
  );
}
