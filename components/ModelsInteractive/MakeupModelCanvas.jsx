
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import MakeupModel from './MakeupModel'
export default function MakeupModelCanvas() {
  const ref = useRef()
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} >
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
        false
          <MakeupModel/>
        false
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate enableZoom={false}  enablePan={false}/>
    </Canvas>
  )
}