import './Scene.css';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
//import { PointerLockControls } from '@react-three/drei'   Leave this commented out for now, will use orbit controls for setting up scene
import { OrbitControls } from "@react-three/drei";
import Ground from './Ground';

function Scene() {
  return (
    <div id="canvas-wrap">
        <Canvas>
          <color attach="background" args={['#000000']} />
          {/*<PointerLockControls />*/}
          <OrbitControls />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Ground />
        </Canvas>
    </div>
  )
};

export default  Scene;