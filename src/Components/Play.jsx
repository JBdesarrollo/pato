import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Play = () => {
  return (
    <Canvas camera={{ fov:75 , position: [0, 2, 5] }}>
        <mesh>
            <boxGeometry args={[1,1,1]}></boxGeometry>
            <meshBasicMaterial color={'hotpink'} />
        </mesh>  
    </Canvas> 
      
  )
}

export default Play