/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 building.gltf 
Author: Gazi Akviran (https://sketchfab.com/akviran)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/building-1-2ccc76cf752e456b94b5b2cfbe6dbb49
Title: Building 1
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/building.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.200} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.556}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane011_0" position={[0.155, 0, 0]} scale={[1.271, 1.19, 1.19]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Color} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.dirt} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Color.001']} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Fence2} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.ModularRoads} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.ColorPalette} />
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.BusStop} />
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Glass} />
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Sign} />
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.material} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Color.002']} />
              </group>
            </group>
          </group>
        </group>
      </group>
      </group>
    </group>
  )
}

useGLTF.preload('/building.gltf')