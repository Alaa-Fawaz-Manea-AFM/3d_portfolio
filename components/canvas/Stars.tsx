"use client";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import Loader from "../Loader";

const generateSpherePoints = (count: number, radius: number): Float32Array => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);

    points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = radius * Math.cos(phi);
  }
  return points;
};

const StarsCard = () => {
  const ref = useRef<THREE.Points>(null);

  const [sphere] = useState(() => generateSpherePoints(500, 1.2));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          size={0.009}
          color="#f272c8"
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Stars = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<Loader />}>
          <StarsCard />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Stars;
