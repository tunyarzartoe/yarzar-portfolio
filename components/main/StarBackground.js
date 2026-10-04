"use client";
import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

/** Generate random points uniformly distributed inside a sphere of given radius */
function randomInSphere(count, radius) {
  const positions = new Float32Array(count * 3);
  let i = 0;
  while (i < count * 3) {
    const x = (Math.random() - 0.5) * 2;
    const y = (Math.random() - 0.5) * 2;
    const z = (Math.random() - 0.5) * 2;
    if (x * x + y * y + z * z <= 1) {
      positions[i++] = x * radius;
      positions[i++] = y * radius;
      positions[i++] = z * radius;
    }
  }
  return positions;
}

const StarBackground = (props) => {
  const ref = useRef();
  const sphere = useMemo(() => randomInSphere(7000, 1.2), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0018}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div
    className="w-full h-full fixed inset-0 z-[-1] pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-700"
    style={{ position: "fixed", top: 0, left: 0 }}
  >
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;
