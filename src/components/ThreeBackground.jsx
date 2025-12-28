import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars(props) {
  const ref = useRef();

  const [sphere] = useMemo(() => {
    // Generate random points in a sphere manually to ensure no NaNs
    const pointCount = 2500;
    const data = new Float32Array(pointCount * 3);
    const radius = 1.5;

    for (let i = 0; i < pointCount; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * radius; // Cbrt for uniform distribution in sphere

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      data[i * 3] = x;
      data[i * 3 + 1] = y;
      data[i * 3 + 2] = z;
    }

    // Safety check - although math above guarantees numbers
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0;
    }

    return [data];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const color = '#FF1F1F'; // Brand Red

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.002} // Smaller, refined particles
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ThreeBackground({ forceDark }) {
  const bgColor = '#050505'; // Brand Black

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;
