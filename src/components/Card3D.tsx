import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'

import {
  ContactShadows,
  Float,
  Sparkles,
  useGLTF,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import type { MotionValue } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'
import type { Group, Material, Object3D } from 'three'

import modelUrl from '../assets/3d/nubank_credit_card.glb?url'
import type { ThemeConfig } from '../types/theme'

type Card3DProps = {
  theme: ThemeConfig
  progress?: MotionValue<number>
}

type CardModelProps = Card3DProps & {
  reduceMotion: boolean
}

function disposeMaterial(material: Material | Material[]) {
  if (Array.isArray(material)) {
    material.forEach((item) => item.dispose())
    return
  }

  material.dispose()
}

function CardModel({ theme, progress, reduceMotion }: CardModelProps) {
  const rootRef = useRef<Group>(null)
  const sceneRef = useRef<Group>(null)
  const gltf = useGLTF(modelUrl)

  const clonedScene = useMemo(() => {
    const clone = gltf.scene.clone(true)

    clone.traverse((child: Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        child.receiveShadow = true

        if (Array.isArray(child.material)) {
          child.material = child.material.map((material) => material.clone())
        } else if (child.material) {
          child.material = child.material.clone()
        }
      }
    })

    return clone
  }, [gltf.scene])

  useLayoutEffect(() => {
    if (!sceneRef.current) {
      return
    }

    const box = new THREE.Box3().setFromObject(sceneRef.current)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()

    box.getSize(size)
    box.getCenter(center)

    sceneRef.current.position.x -= center.x
    sceneRef.current.position.y -= center.y
    sceneRef.current.position.z -= center.z

    const scale = 3.7 / Math.max(size.x, size.y, size.z)
    sceneRef.current.scale.setScalar(scale)
  }, [clonedScene])

  useEffect(() => {
    return () => {
      clonedScene.traverse((child: Object3D) => {
        if (child instanceof THREE.Mesh) {
          disposeMaterial(child.material)
        }
      })
    }
  }, [clonedScene])

  useFrame((state, delta) => {
    if (!rootRef.current) {
      return
    }

    const scrollProgress = progress?.get() ?? 0.5
    const pointerX = reduceMotion ? 0 : state.pointer.x * 0.18
    const pointerY = reduceMotion ? 0 : state.pointer.y * 0.12

    const targetRotationX =
      THREE.MathUtils.degToRad(-18 + scrollProgress * 16) + pointerY
    const targetRotationY =
      THREE.MathUtils.degToRad(-36 + scrollProgress * 86) + pointerX
    const targetRotationZ = THREE.MathUtils.degToRad(-8 + scrollProgress * 10)
    const targetPositionY = reduceMotion
      ? 0
      : THREE.MathUtils.lerp(-0.16, 0.22, scrollProgress)

    rootRef.current.rotation.x = THREE.MathUtils.damp(
      rootRef.current.rotation.x,
      targetRotationX,
      4.8,
      delta,
    )
    rootRef.current.rotation.y = THREE.MathUtils.damp(
      rootRef.current.rotation.y,
      targetRotationY,
      4.8,
      delta,
    )
    rootRef.current.rotation.z = THREE.MathUtils.damp(
      rootRef.current.rotation.z,
      targetRotationZ,
      4.4,
      delta,
    )
    rootRef.current.position.y = THREE.MathUtils.damp(
      rootRef.current.position.y,
      targetPositionY,
      3.8,
      delta,
    )
  })

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[4.5, 5.2, 4.8]}
        intensity={1.8}
        color={theme.palette.contrast}
      />
      <pointLight
        position={[-4, 1, 4]}
        intensity={1.1}
        color={theme.card.gradient[0]}
      />
      <pointLight
        position={[2.5, -1, 3]}
        intensity={1}
        color={theme.card.gradient[2]}
      />

      <Float
        speed={reduceMotion ? 1 : 1.4}
        rotationIntensity={reduceMotion ? 0.02 : 0.05}
        floatIntensity={reduceMotion ? 0.08 : 0.22}
      >
        <group ref={rootRef}>
          <group ref={sceneRef}>
            <primitive object={clonedScene} />
          </group>
        </group>
      </Float>

      <Sparkles
        count={24}
        scale={[5.4, 3.2, 2]}
        position={[0, 0.2, -0.2]}
        size={2.6}
        speed={0.25}
        color={theme.card.gradient[0]}
      />

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.35}
        width={7.2}
        height={4}
        blur={2.8}
        far={4}
        color={theme.card.edge}
      />
    </>
  )
}

export function Card3D({ theme, progress }: Card3DProps) {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <div className="model-stage" aria-label={`Cartao 3D ${theme.label}`}>
      <div className="model-stage__glow" />
      <Canvas
        className="model-stage__canvas"
        dpr={[1, 1.8]}
        shadows
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.15, 5.6], fov: 28 }}
      >
        <CardModel theme={theme} progress={progress} reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  )
}

useGLTF.preload(modelUrl)
