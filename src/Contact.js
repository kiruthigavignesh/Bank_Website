import React from 'react';
import Model from "./components/Building";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";


const Contact = () => {
  return (
  
      <div  >
<h1
        class="text-center mt-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Contact Us
       </h1>
 <Canvas style={{ height: '900px' , width:'1250px', marginTop:'40px'}} >
   <OrbitControls   enableRotate={true}/>
   <ambientLight intensity={0.6} />
   <directionalLight intensity={0.5} />
   <Suspense fallback={null}>
   <Model />
   </Suspense>

 </Canvas> 
  
</div>
  )
}

export default Contact
