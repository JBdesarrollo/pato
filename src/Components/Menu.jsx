import React, { Suspense, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "@react-three/drei";

const Menu = () => {
  const gltf = useLoader(GLTFLoader, "../Modelos/Bad.glb");

  return (
    <>
      <Canvas camera={{ fov: 75, position: [0, 2, 5] }}>
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Menu;
