import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../styles/Theater.css";
import {
  Html,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber/dist/react-three-fiber.cjs";
import { TextureLoader } from "three";
import colorMapTexture from "../../assets/textures/wall/Acoustic_Foam_001_basecolor.jpg";
import normalMapTexture from "../../assets/textures/wall/Acoustic_Foam_001_normal.jpg";
import heightMapTexture from "../../assets/textures/wall/Acoustic_Foam_001_height.png";
import roughnessMapTexture from "../../assets/textures/wall/Acoustic_Foam_001_roughness.jpg";
import aoMapTexture from "../../assets/textures/wall/Acoustic_Foam_001_ambientOcclusion.jpg";
import { ScreenTheater } from "../Theater/ScreenTheater";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => console.log("click")}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      castShadow={true}
      receiveShadow={true}
    >
      <boxGeometry args={[20, 10, 2]} />
      <meshPhongMaterial color={"white"} />
      <Html position={[0, 0.05, 1.01]} color={"transparent"} transform occlude>
        <ScreenTheater />
      </Html>
    </mesh>
  );
}

function Wall(props) {
  const mesh = useRef();

  const [colorMap, normalMap, heightMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      colorMapTexture,
      normalMapTexture,
      heightMapTexture,
      roughnessMapTexture,
      aoMapTexture,
    ]
  );

  const diviseur = 12;

    colorMap.repeat.set(diviseur, diviseur);
    aoMap.repeat.set(diviseur, diviseur);
    normalMap.repeat.set(diviseur, diviseur);
    heightMap.repeat.set(diviseur, diviseur);
    roughnessMap.repeat.set(diviseur, diviseur);

    colorMap.wrapS = THREE.RepeatWrapping;
    colorMap.wrapT = THREE.RepeatWrapping;
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;
    heightMap.wrapS = THREE.RepeatWrapping;
    heightMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.wrapS = THREE.RepeatWrapping;
    roughnessMap.wrapT = THREE.RepeatWrapping;
    aoMap.wrapS = THREE.RepeatWrapping;
    aoMap.wrapT = THREE.RepeatWrapping;
    
    


  return (
    <mesh {...props} ref={mesh}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        displacementMap={heightMap}
        displacementScale={0.4}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

const Theater = ({ handleChangeView }) => {
  const group = useRef();

  return (
    <div className="theater">
      <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
        <spotLight position={[40, 10, 30]} intensity={1.2} />
        <spotLight position={[-40, 10, 30]} intensity={1.2} />
        <Box position={[0, 0, 0]} />
        <Wall position={[0, 0, -1]} />
        <ContactShadows position={[0, -4.5, 0]} scale={10} blur={2} far={4.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={Math.PI / 8}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

export default Theater;
