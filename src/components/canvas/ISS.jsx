import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ISS = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./iss/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor='black' />
      <pointLight
        intensity={2}
        position={
          isMobile
            ? [-11.5, -0.7, -6]
            : isTablet
            ? [-14, -0.9, -7]
            : [1, -0.3, -3.6]
        }
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : isTablet ? 0.8 : 0.75}
        position={
          isMobile
            ? [-10, -2.15, 2.6]
            : isTablet
            ? [-10, -3, 4]
            : [4, -1.75, 6.6]
        }
        rotation={[0.3, 1.3, -0.2]}
      />
    </mesh>
  );
};

const ISSCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 501px) and (max-width: 1024px)");

    // Set the initial value of the `isMobile` and `isTablet` state variables
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Define callback functions to handle changes to the media queries
    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleTabletQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    // Add the callback functions as listeners for changes to the media queries
    mobileQuery.addEventListener("change", handleMobileQueryChange);
    tabletQuery.addEventListener("change", handleTabletQueryChange);

    // Remove the listeners when the component is unmounted
    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
      tabletQuery.removeEventListener("change", handleTabletQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ISS isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ISSCanvas;