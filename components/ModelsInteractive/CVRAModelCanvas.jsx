
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import CVRAModel from './CVRAModel'
export default function CVRAModelCanvas() {
  const ref = useRef()
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} >
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
        false
          <CVRAModel/>
        false
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate enableZoom={false}  enablePan={false}/>
    </Canvas>
  )
}