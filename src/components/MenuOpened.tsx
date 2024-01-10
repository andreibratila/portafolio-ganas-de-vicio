"use client";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils";
import { useLoaderStore } from "@/stores";

export const MenuOpened = () => {
  const openMenu = useLoaderStore((state) => state.openMenu);
  const setOpenMenu = useLoaderStore((state) => state.setOpenMenu);

  const container = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  const { contextSafe } = useGSAP(
    () => {
      if (!background.current) return;
      if (!menu.current) return;

      tl.current = gsap
        .timeline()
        .from(background.current.children, {
          onStart: () => {
            if (!menu.current) return;
            gsap.set(menu.current.children, { opacity: 0, x: -100 });
          },
          duration: 1.5,

          x: -window.innerWidth,
          delay: 0,
          stagger: 0.2, // Retraso entre las animaciones de cada hijo
          ease: "power2.inOut",
        })
        .to(menu.current.children, {
          duration: 0.5,
          opacity: 1,
          x: 0,
          delay: 0,
          stagger: 0.5, // Retraso entre las animaciones de cada hijo
          ease: "power2.inOut",
        });
    },
    { scope: background, dependencies: [openMenu] }
  );
  const onClickGood = contextSafe(() => {
    tl.current.eventCallback("onReverseComplete", () => {
      setOpenMenu(false);
    });

    // Inicia la animación de reversa
    tl.current.reverse();
  });
  if (!openMenu) return;

  //TODO: animar el menu
  return (
    <div
      ref={container}
      className={cn("w-full h-full z-[999] hidden", openMenu && "block")}
    >
      {/* background */}
      <div
        ref={background}
        className="*:h-[20%] *:w-[100%] *:bg-red-500 h-full w-full absolute top-0 left-0"
      >
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      <div
        ref={menu}
        className=" flex flex-col absolute text-center place-content-center place-items-center *:text-6xl space-y-10  h-full w-full"
      >
        <h1> Hamburguesa1</h1>
        <h1> Hamburcheesbur</h1>
        <h1> BBQQUESO</h1>
        <h1> Milanesa</h1>
        <button
          onClick={() => onClickGood()}
          className="absolute top-10 left-10 bg-slate-300 p-10 rounded-xl"
        >
          {" "}
          cerrar
        </button>
      </div>
    </div>
  );
};
