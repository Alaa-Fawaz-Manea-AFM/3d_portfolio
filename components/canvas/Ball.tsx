"use client";
import {
  Decal,
  Float,
  Preload,
  useTexture,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Loader";

const BallCard = ({ imgurl }: { imgurl: string }) => {
  const [decal] = useTexture([imgurl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[Math.PI * 2, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const Ball = ({ src }: { src: string }) => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<Loader />}>
      <OrbitControls enableZoom={false} />

      <BallCard imgurl={src} />
    </Suspense>

    <Preload all />
  </Canvas>
);

export default Ball;
