import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Cortina from './Cortina.jsx'

const Menu = () => {
  return (
    <>
      <Canvas camera={{ fov:75 , position: [0, 2, 5] }}>
        <Suspense fallback={null}>
            <Cortina />
        </Suspense>
          
      </Canvas> 
    </>
  )
}

export default Menu