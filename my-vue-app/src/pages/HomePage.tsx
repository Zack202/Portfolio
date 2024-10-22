import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Planet from '../models/Planet'
import { Euler, Vector3 } from 'three'
import Space from '../models/Space'
import Comet from '../models/Comet'

const HomePage = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setcurrentStage] = useState(1)
  console.log(currentStage)
  const adjustPlanetForScreenSize = (): [Vector3, Vector3, Euler] => {
    let screenScale: Vector3
    let screenPosition: Vector3 = new Vector3(0, -2.5, -23)
    let rotation: Euler = new Euler(0.1, 3.7, 0)

    if (window.innerWidth < 768) {
      screenScale = new Vector3(0.9, 0.9, 0.9)
    } else {
      screenScale = new Vector3(1, 1, 1)
    }

    return [screenScale, screenPosition, rotation]
  }

  

  const [planetScale, planetPosition, planetRotation] = adjustPlanetForScreenSize() ;

  return (
    <section className='w-full h-screen relative'>
        {/* <div className='absolute top-28 left-0 right-0 z-10 flex 
        items-center justify-center'>
            POPUP
        </div> */}
        <Canvas 
          className={`w-full h-screen bg-transparent' ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{near: 0.1, far: 1000}}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[5,1,1]} intensity={2}/>
              <ambientLight  intensity={0.6}/>
              <pointLight />
              <spotLight position={[5,1,1]} intensity={2}/>
              <hemisphereLight //skyColor='#b1e1ff'
               groundColor='#000000' intensity={1}/>

              <Comet 
                isRotating={isRotating}
                scale={new Vector3(0.01, 0.01, 0.01)}
                position={new Vector3(-10, 0, -10)}
                rotation={new Euler(0, 0, 0)}
              />
              <Space 
                isRotating={isRotating}
              />
              <Planet
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                position={planetPosition}
                rotation={planetRotation}
                scale={planetScale}
                setCurrentStage={setcurrentStage}
              />
            </Suspense>

        </Canvas>
  </section>
  )
}

export default HomePage