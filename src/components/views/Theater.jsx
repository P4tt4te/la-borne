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
    >
      <planeGeometry args={[20, 10]} />
      <Html position={[0, 0.05, 0.09]} transform occlude>
        <div>
            <img src={"https://apexcharts.com/wp-content/uploads/2021/02/basic-boxplot.svg"} />
        </div>
      </Html>
    </mesh>
  );
}

const Theater = ({ handleChangeView }) => {
  const group = useRef();

  return (
    <div className="theater">
      <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Box position={[0, 0, 0]} />
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

export default Theater;
