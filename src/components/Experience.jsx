import { OrbitControls, ScrollControls } from '@react-three/drei'
import React from 'react'

//3js
import { Car } from './Car';

export const Experience = () => {
    return (
        <>
        <ambientLight intensity={10} />
        <OrbitControls enableZoom={false}/>
        <ScrollControls pages={3} damping={0.25}>
            {/* <mesh>
            <boxGeometry />
            <meshNormalMaterial />
            </mesh> */}

            <Car />
        </ScrollControls>
        </>
    );
};

