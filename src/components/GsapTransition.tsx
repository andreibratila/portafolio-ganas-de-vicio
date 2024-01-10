"use client";
import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { LoaderAction, useLoaderStore } from "@/stores";

import { About, Base, Cerrando, Pedir } from "./loading";

export const GsapTransition = () => {
  //state
  const animationComplete = useLoaderStore((state) => state.animationComplete);
  const componente = useLoaderStore((state) => state.componente);

  //Actions
  const setAnimationComplete = useLoaderStore(
    (state) => state.setAnimationComplete
  );
  const setTimeline = useLoaderStore((state) => state.setTimeline);

  //Refs
  const leftDiv = useRef<HTMLDivElement>(null);
  const rightDiv = useRef<HTMLDivElement>(null);
  const welcomeMessage = useRef<HTMLDivElement>(null);

  const renderComponent = (componente: LoaderAction) => {
    switch (componente) {
      case "base":
        return <Base />;
      case "pedir":
        return <Pedir />;
      case "about":
        return <About />;
      case "cerrando":
        return <Cerrando />;
      default:
        return <Base />;
    }
  };

  useGSAP(() => {
    if (welcomeMessage.current) {
      // Anima los elementos hijos del mensaje de bienvenida con un retraso (stagger)
      gsap.to(welcomeMessage.current.children, {
        duration: 1,
        opacity: 0,
        y: -50,
        delay: 1,
        stagger: 0.2, // Retraso entre las animaciones de cada hijo
        ease: "power2.inOut",
        onComplete: () => {
          // Después de que los mensajes desaparezcan, inicia la animación de los divs
          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 1.2 }, // Establece la configuración por defecto para todas las animaciones de este timeline
            onComplete: () => setAnimationComplete(true),
          });

          tl.to(leftDiv.current, {
            x: "-100%",
          });

          tl.to(
            rightDiv.current,
            {
              x: "100%",
            },
            "<"
          ); // Inicia esta animación al mismo tiempo que la anterior

          setTimeline(tl);
        },
      });
    }
  }, [animationComplete, componente]); // TODO: verificar que se re-renderice solo cuando animationComplete cambie

  if (animationComplete) return null; // No renderiza nada si la animación ha terminado

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        ref={leftDiv}
        className="bg-purple-400 h-screen w-[50%] absolute left-0"
      />
      <div
        ref={rightDiv}
        className="bg-purple-400 h-screen w-[50%] absolute top-0 right-0"
      />
      <div
        ref={welcomeMessage}
        className="flex flex-col place-items-center content-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {renderComponent(componente)}
      </div>
    </div>
  );
};
