import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import spaceScene from '../3d/free_-_skybox_space_nebula.glb'

interface SpaceProps {
    isRotating: boolean
}

const Space: React.FC<SpaceProps> = () => {
    const space = useGLTF(spaceScene)
    const spaceRef = useRef<THREE.Mesh>(null)

    useFrame((_, delta) => {
        if (true) {
            spaceRef.current!.rotation.y += 0.02 * delta
        }
    })

  return (
    <mesh ref = {spaceRef}>
        <primitive object={space.scene} />
    </mesh>
  )
}

export default Space