"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, type ThreeEvent } from "@react-three/fiber";
import { Decal, OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export type Placement = "front" | "back" | "sleeve" | "shoulder";

type DecalTransform = {
  position: THREE.Vector3;
  normal: THREE.Vector3;
  scale: number;
};

const PLACEMENT_PRESETS: Record<Placement, DecalTransform> = {
  front: {
    position: new THREE.Vector3(0, 0.05, 0.4),
    normal: new THREE.Vector3(0, 0, 1),
    scale: 0.55,
  },
  back: {
    position: new THREE.Vector3(0, 0.05, -0.4),
    normal: new THREE.Vector3(0, 0, -1),
    scale: 0.55,
  },
  sleeve: {
    position: new THREE.Vector3(0.58, 0.18, 0.08),
    normal: new THREE.Vector3(0.95, 0.1, 0.3),
    scale: 0.22,
  },
  shoulder: {
    position: new THREE.Vector3(0.28, 0.6, 0.18),
    normal: new THREE.Vector3(0.3, 0.75, 0.35),
    scale: 0.22,
  },
};

const UP_AXIS = new THREE.Vector3(0, 0, 1);

function normalToEuler(normal: THREE.Vector3) {
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    UP_AXIS,
    normal.clone().normalize()
  );
  return new THREE.Euler().setFromQuaternion(quaternion);
}

function DecalLayer({
  image,
  transform,
}: {
  image: string;
  transform: DecalTransform;
}) {
  const texture = useTexture(image);
  const rotation = useMemo(() => normalToEuler(transform.normal), [transform.normal]);

  return (
    <Decal
      position={transform.position}
      rotation={rotation}
      scale={[transform.scale, transform.scale * 1.2, transform.scale]}
    >
      <meshStandardMaterial
        map={texture}
        transparent
        polygonOffset
        polygonOffsetFactor={-1}
        roughness={0.9}
      />
    </Decal>
  );
}

function TshirtModel({
  color,
  decalImage,
  placement,
  transform,
  onTransformChange,
  onDragStateChange,
}: {
  color: string;
  decalImage: string | null;
  placement: Placement;
  transform: DecalTransform;
  onTransformChange: (t: DecalTransform) => void;
  onDragStateChange: (dragging: boolean) => void;
}) {
  const { nodes } = useGLTF("/models/tshirt.glb") as unknown as {
    nodes: Record<string, { geometry?: THREE.BufferGeometry; isMesh?: boolean }>;
  };
  const meshRef = useRef<THREE.Mesh>(null);
  const dragging = useRef(false);

  const geometry = useMemo(() => {
    const meshKey = Object.keys(nodes).find((key) => nodes[key].isMesh);
    const raw = meshKey ? nodes[meshKey].geometry : undefined;
    if (!raw) return undefined;

    // The source mesh comes from a cloth-sim export with an arbitrary
    // scale/offset baked into its local vertices -- normalize it to a
    // consistent ~1.6 unit box centered at the origin, standing upright.
    const normalized = raw.clone();
    normalized.rotateX(Math.PI / 2);
    normalized.computeBoundingBox();
    const box = normalized.boundingBox!;
    const center = new THREE.Vector3();
    box.getCenter(center);
    normalized.translate(-center.x, -center.y, -center.z);

    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.6 / maxDim;
    normalized.scale(scale, scale, scale);
    normalized.computeVertexNormals();

    return normalized;
  }, [nodes]);

  if (!geometry) return null;

  function handlePointerDown(e: ThreeEvent<PointerEvent>) {
    if (!decalImage) return;
    const distance = e.point.distanceTo(transform.position);
    if (distance > transform.scale * 0.9) return;
    e.stopPropagation();
    dragging.current = true;
    onDragStateChange(true);
  }

  function handlePointerMove(e: ThreeEvent<PointerEvent>) {
    if (!dragging.current) return;
    e.stopPropagation();
    const normal = e.face?.normal
      ? e.face.normal.clone()
      : transform.normal.clone();
    onTransformChange({ position: e.point.clone(), normal, scale: transform.scale });
  }

  function stopDragging() {
    if (!dragging.current) return;
    dragging.current = false;
    onDragStateChange(false);
  }

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      <meshStandardMaterial color={color} roughness={0.6} metalness={0} />
      {decalImage && <DecalLayer key={placement} image={decalImage} transform={transform} />}
    </mesh>
  );
}

export function TshirtViewer({
  color,
  decalImage,
  placement,
}: {
  color: string;
  decalImage: string | null;
  placement: Placement;
}) {
  const [transform, setTransform] = useState<DecalTransform>(PLACEMENT_PRESETS.front);
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const [appliedPlacement, setAppliedPlacement] = useState(placement);

  if (placement !== appliedPlacement) {
    setAppliedPlacement(placement);
    setTransform(PLACEMENT_PRESETS[placement]);
  }

  return (
    <div className="aspect-square w-full touch-none bg-secondary">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 32 }} dpr={[1, 2]}>
        <hemisphereLight args={["#fdf6ea", "#8a8074", 1.3]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 3]} intensity={0.6} />
        <directionalLight position={[-3, 1.5, 1]} intensity={0.6} />
        <directionalLight position={[0, 1, -3]} intensity={0.5} />
        <directionalLight position={[0, -3, 2]} intensity={0.4} />
        <Suspense fallback={null}>
          <TshirtModel
            color={color}
            decalImage={decalImage}
            placement={placement}
            transform={transform}
            onTransformChange={setTransform}
            onDragStateChange={(dragging) => setOrbitEnabled(!dragging)}
          />
        </Suspense>
        <OrbitControls
          enabled={orbitEnabled}
          enablePan={false}
          minDistance={1.4}
          maxDistance={4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.6}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/tshirt.glb");
