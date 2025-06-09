
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Model Component
const AngryModelMesh = () => {
  const meshRef = useRef<THREE.Group>(null);
  // Updated path to use public folder
  const { scene } = useGLTF('/angry.glb');
  
  return (
    <group ref={meshRef}>
      <primitive 
        object={scene} 
        scale={1.5}
        position={[0, -0.5, 0]}
        rotation={[0, 0.3, 0]}
      />
    </group>
  );
};

// Loading fallback component
const ModelLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full"
    />
    <span className="ml-4 text-white">Loading 3D Model...</span>
  </div>
);

// Main AngryModel component
export const AngryModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
      className="w-full h-[300px] md:h-[400px] relative"
    >
      {/* Glowing container */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl overflow-hidden h-full">
        <Suspense fallback={<ModelLoader />}>
          <Canvas
            camera={{ 
              position: [0, 0, 4], 
              fov: 45,
              near: 0.1,
              far: 1000
            }}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: "high-performance"
            }}
            className="w-full h-full"
            style={{ background: 'transparent' }}
          >
            {/* Lighting setup */}
            <ambientLight intensity={0.6} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <pointLight position={[-5, 5, 5]} intensity={0.4} color="#ff69b4" />
            <pointLight position={[5, -5, -5]} intensity={0.4} color="#8b5cf6" />
            
            {/* Environment for reflections */}
            <Environment preset="city" />
            
            {/* 3D Model */}
            <AngryModelMesh />
            
            {/* Interactive controls (desktop only) */}
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
              maxAzimuthAngle={Math.PI / 3}
              minAzimuthAngle={-Math.PI / 3}
              enableDamping
              dampingFactor={0.05}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        </Suspense>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.div>
  );
};

// Preload the model with updated path
useGLTF.preload('/angry.glb');
