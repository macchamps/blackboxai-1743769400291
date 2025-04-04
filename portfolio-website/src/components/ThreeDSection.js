import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function Box(props) {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={props.color || "#2563eb"} />
    </mesh>
  );
}

const ThreeDSection = () => {
  return (
    <div className="h-[50vh] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeDSection;