import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { animated, useSpring } from '@react-spring/three';

function BotBody(props: any) {
  const mesh = useRef<any>();
  const handRef = useRef<any>();
  const [hovered, setHover] = useState(false);
  const [smiling, setSmiling] = useState(false);
  const [handWave, setHandWave] = useState(false);

  // Color spring for body light
  const { color } = useSpring({
    color: hovered ? '#f472b6' : '#ffffff', // light pink on hover, white otherwise
    config: { mass: 1, tension: 170, friction: 26 },
  });

  // Smile scale spring
  const { smileScale } = useSpring({
    smileScale: smiling ? 1.2 : 1,
    config: { mass: 1, tension: 180, friction: 12 },
  });

  // Cursor tracking rotation
  useFrame(({ mouse }) => {
    if (mesh.current) {
      mesh.current.rotation.y = mouse.x * 0.5;
      mesh.current.rotation.x = mouse.y * 0.5;
    }
    if (handRef.current) {
      handRef.current.rotation.z = handWave ? Math.sin(Date.now() / 200) * 0.5 : 0;
    }
  });

  return (
    <group
      ref={mesh}
      {...props}
      onPointerOver={() => {
        setHover(true);
        setSmiling(true);
        setHandWave(true);
      }}
      onPointerOut={() => {
        setHover(false);
        setSmiling(false);
        setHandWave(false);
      }}
      scale={1.5}
      position={[0, -0.5, 0]}
    >
      {/* Head */}
      <animated.mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <animated.meshStandardMaterial color={color} />
        {/* Face (smile) */}
        <animated.mesh position={[0, 0, 0.51]} scale={smileScale}>
          <circleGeometry args={[0.3, 32]} />
          <meshBasicMaterial color="black" />
          {/* Simplified smile: a curved line using Line geometry */}
          <line>
            <bufferGeometry attach="geometry" >
              <bufferAttribute
                attach="attributes-position"
                array={new Float32Array([
                  -0.15, 0, 0,
                  -0.05, -0.1, 0,
                  0.05, -0.1, 0,
                  0.15, 0, 0,
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#fff" linewidth={1} />
          </line>



        </animated.mesh>
      </animated.mesh>

      {/* Body */}
      <animated.mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 1, 32]} />
        <animated.meshStandardMaterial color={color} />
      </animated.mesh>

      {/* Left Arm */}
      <animated.mesh position={[-0.7, -0.5, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <animated.meshStandardMaterial color={color} />
      </animated.mesh>

      {/* Right Arm (hand waving) */}
      <animated.group ref={handRef} position={[0.7, -0.5, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <animated.meshStandardMaterial color={color} />
      </animated.group>
    </group>
  );
}

export default function Reactive3DBot() {
  return (
    <div style={{ width: '300px', height: '400px', cursor: 'pointer' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <BotBody />
      </Canvas>
    </div>
  );
}
