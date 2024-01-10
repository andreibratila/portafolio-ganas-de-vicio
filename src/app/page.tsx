"use client";
import { useEffect, useRef } from "react";
import { BurguerAbsolute, StickerWrap } from "@/components/landing";
import { Row1, Row2 } from "@/components/landing/col1";

import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

import { useGSAP } from "@gsap/react";
import { useLoaderStore } from "@/stores";
import { cn } from "@/utils";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const openMenu = useLoaderStore((state) => state.openMenu);
  const animationComplete = useLoaderStore((state) => state.animationComplete);

  const main = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!main.current) return;
      // OBTENGO EL ANCHO DEL MAIN
      let mainWidth = main.current?.offsetWidth;
      // OBTENGO EL ANCHO DE LA VENTANA DEL NAVEGADOR que debo restarle al ancho del main
      let ammoutToScroll = mainWidth! - window.innerWidth;

      // Creo una animacion que se mueva de izquierda a derecha
      const tween = gsap.to(main.current, {
        x: -ammoutToScroll,
        duration: 3,
        ease: "none",
      });
      // Creo un trigger para que se vea la animacion suave
      ScrollTrigger.create({
        trigger: main.current,
        end: () => "+=" + ammoutToScroll,
        pin: true,
        start: "top 100vh",
        animation: tween,
        scrub: 1,
        markers: true,
      });
    },
    { scope: main, dependencies: [animationComplete, openMenu] }
  );

  // verifico que la animacion haya terminado para que se pueda hacer scroll
  if (!animationComplete || openMenu) return null;
  return (
    // cambiar a overflow-scroll a overflow-x-scroll
    <>
      <main className={cn("w-[100vw] h-[100vh] fixed top-20")}>
        <div
          ref={main}
          className="flex min-w-[200vw] h-full relative overflow-y-scroll"
        >
          <StickerWrap />

          {/* ROW */}
          <div className="flex scroll">
            {/* FIRST COLUMN */}
            <div className="flex flex-col gap-[2.16vh]">
              {/* BURGER WRAP */}
              <BurguerAbsolute />
              {/* UP ROW */}
              <Row1 />
              {/* DOWN ROW */}
              <Row2 />
            </div>
            {/* SECOND COLUMN */}
            <div>aqui hay mas cosas mike</div>
          </div>
        </div>
      </main>
    </>
  );
}
