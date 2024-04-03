"use client";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Loader from "../Loader";

const StarsCard = () => {
  const ref = useRef<any>();

  const generateRandomPointInSphere = (radius: number) => {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return [x, y, z];
  };

  // Generate positions for the points using math-random
  const sphere = new Float32Array(1500);
  for (let i = 0; i < sphere.length; i += 3) {
    const [x, y, z] = generateRandomPointInSphere(1.2);
    sphere[i] = x;
    sphere[i + 1] = z;
    sphere[i + 2] = y;
  }

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
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

const Stars = () => (
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={<Loader />}>
        <StarsCard />
      </Suspense>

      <Preload all />
    </Canvas>
  </div>
);

export default Stars;
