import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../styles/Theater.css";
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";

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
      <Html position={[0, 0.05, 2.09]} color={"transparent"} transform occlude>
        <div onClick={(e) => e.preventDefault()}>
          <img
            src={
              "https://apexcharts.com/wp-content/uploads/2021/02/basic-boxplot.svg"
            }
          />
        </div>
      </Html>
    </mesh>
  );
}

function Wall(props) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <planeGeometry args={[100, 50]} />
      <meshPhongMaterial color={"black"} roughness={0.6} metalness={0} />
    </mesh>
  );
}

const Theater = ({ handleChangeView }) => {
  const group = useRef();

  return (
    <div className="theater">
      <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
        <ambientLight color={"#FFFFFF"} intensity={1} />
        <spotLight position={[40, 10, 30]} intensity={4} />
        <spotLight position={[-40, 10, 30]} intensity={4} />
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
