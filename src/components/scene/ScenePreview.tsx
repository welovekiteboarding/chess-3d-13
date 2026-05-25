import { Canvas } from '@react-three/fiber'

function PreviewPiece() {
  return (
    <group rotation={[0, Math.PI / 8, 0]}>
      <mesh
        castShadow
        position={[0, -0.75, 0]}
      >
        <cylinderGeometry args={[0.9, 1.2, 0.35, 48]} />
        <meshStandardMaterial args={[{ color: '#60472d' }]} />
      </mesh>
      <mesh
        castShadow
        position={[0, -0.15, 0]}
      >
        <cylinderGeometry args={[0.55, 0.8, 1.1, 48]} />
        <meshStandardMaterial
          args={[
            {
              color: '#d2b48c',
              metalness: 0.1,
              roughness: 0.4,
            },
          ]}
        />
      </mesh>
      <mesh
        castShadow
        position={[0, 0.6, 0]}
      >
        <sphereGeometry args={[0.45, 48, 48]} />
        <meshStandardMaterial
          args={[
            {
              color: '#ead9bc',
              metalness: 0.1,
              roughness: 0.25,
            },
          ]}
        />
      </mesh>
    </group>
  )
}

export function ScenePreview() {
  if (import.meta.env.MODE === 'test') {
    return (
      <div className="scene-frame scene-frame--test">
        <p className="eyebrow">Canvas Preview</p>
        <h3>3D preview placeholder</h3>
        <p className="hero-body">
          The browser test environment does not provide a WebGL context, so the
          scene swaps to a static placeholder during unit tests.
        </p>
      </div>
    )
  }

  return (
    <div className="scene-frame">
      <Canvas
        camera={{ fov: 40, position: [4.4, 4.1, 5.1] }}
        className="scene-canvas"
        dpr={[1, 2]}
        shadows
      >
        <color
          args={['#102018']}
          attach="background"
        />
        <fog
          args={['#102018', 8, 15]}
          attach="fog"
        />
        <ambientLight intensity={0.75} />
        <directionalLight
          castShadow
          intensity={1.4}
          position={[4, 7, 5]}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
        />
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial args={[{ color: '#213428' }]} />
        </mesh>
        <mesh
          receiveShadow
          position={[0, -0.9, 0]}
        >
          <boxGeometry args={[5.4, 0.35, 5.4]} />
          <meshStandardMaterial args={[{ color: '#6f5338' }]} />
        </mesh>
        <mesh position={[0, 1.8, -2.8]}>
          <torusGeometry args={[1.1, 0.03, 32, 96]} />
          <meshBasicMaterial args={[{ color: '#b68a56' }]} />
        </mesh>
        <PreviewPiece />
      </Canvas>
    </div>
  )
}
