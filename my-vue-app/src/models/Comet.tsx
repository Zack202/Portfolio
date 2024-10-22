import cometScene from '../3d/space_comet.glb'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three';

interface CometProps {
    isRotating: boolean;
    [key: string]: any;
}

const Comet = ({ isRotating, ...props}: CometProps) => {
    const ref = useRef<THREE.Mesh>(null)
    const { scene, animations } = useGLTF(cometScene)
    const { actions } = useAnimations(animations, ref)
    console.log(actions)
    
    // useEffect(() => {
    //     if (isRotating) {
    //         actions['CometAction'].play()
    //     } else {
    //         actions['CometAction'].stop()
    //     }
    // }, [isRotating, actions])
  
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Comet