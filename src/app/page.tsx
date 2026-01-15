// src/app/page.tsx
"use client";
import Main from "@/app/components/home";
import Services from "@/app/components/services";
import About from "@/app/components/about";
import Navbar from "@/app/components/navbar";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import Review from "@/app/components/review";
import Contacts from "@/app/components/contacts";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      {/* Sfondo fisso che copre l'intera vista */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <ShaderGradientCanvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ShaderGradient
            animate="on"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={3.92}
            cPolarAngle={115}
            cameraZoom={1}
            color1="#DCF2F9"
            color2="#DCF2F9"
            color3="#F9FAFB"
            envPreset="lobby"
            grain="off"
            lightType="3d"
            positionX={-0.5}
            positionY={0.1}
            positionZ={0}
            range="disabled"
            reflection={0.1}
            rotationZ={235}
            type="waterPlane"
            uDensity={1.1}
            uFrequency={5.5}
            uSpeed={0.4}
            uStrength={2.4}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Contenuto della pagina */}
      <Navbar />
      <main>
        <Main />
        <Services />
        <About />
        <Review />
        <Contacts />
        <Footer/>
      </main>
    </>
  );
}