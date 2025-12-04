import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from './ThemeProvider';

function Stars(props) {
  const ref = useRef();
  const { theme } = useTheme();

  const [sphere] = useMemo(() => {
    // Generate random points in a sphere
    const points = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    return [points];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const color = theme === 'dark' ? '#87CEFA' : '#1e3a8a'; // Dark blue for light theme

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ThreeBackground({ forceDark }) {
  const { theme } = useTheme();
  const isDark = forceDark || theme === 'dark';
  const bgColor = isDark ? '#1f2937' : '#ffffff';

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;
