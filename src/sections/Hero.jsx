import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";

const Hero = () => {
    const x = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },

    })

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Cześć <span className="waving-hand">👋</span>,
                    nazywam się Patryk i pracuję jako Fullstack Developer
                </p>
                <p className="hero_tag text-gray_gradient">
                    Programuję aplikację webowe, mobilne oraz desktopowe
                </p>
            </div>

                <div className="w-full h-full absolute inset-0">
                    <Leva />
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader/>}>


                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                            <HackerRoom
                                scale={[x.positionX, x.positionY, x.positionZ]}
                                position={[0,0,0]}
                                rotation={[0, 280, 0]}
                            />

                            <ambientLight intensity={1} />
                            <directionalLight position={[10,10,10]} intensity={0.5}/>
                        </Suspense>
                    </Canvas>
                </div>
        </section>
    )
}
export default Hero
