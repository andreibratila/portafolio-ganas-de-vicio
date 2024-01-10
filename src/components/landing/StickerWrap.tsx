"use client";
import { use, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
export const StickerWrap = () => {
  const sticker1 = useRef<HTMLDivElement>(null);
  const sticker2 = useRef<HTMLDivElement>(null);
  const sticker3 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      Draggable.create(sticker1.current, {
        inertia: true,
      });
      Draggable.create(sticker2.current, {
        inertia: true,
      });
      Draggable.create(sticker3.current, {
        inertia: true,
      });
    },
    { dependencies: [] }
  );

  return (
    <section className="relative">
      <div
        className="absolute w-[31.89vh] h-[15.67vh] bg-[url('/image/Sticker-1.png')] bg-no-repeat bg-contain top-[37.1vh] left-[67vh] z-10 cursor-grab"
        ref={sticker1}
      />
      <div
        className="absolute w-[9.2vh] h-[9.2vh] bg-[url('/image/Sticker-2.png')] bg-no-repeat bg-contain top-[30.6vh] left-[130.1vh] z-10 cursor-grab rotate-12"
        ref={sticker2}
      />
      <div
        className="absolute w-[9vh] h-[9vh] bg-[url('/image/Sticker-3.png')] bg-no-repeat bg-contain top-[64.7vh] left-[204.7vh] z-10 cursor-grab rotate-12"
        ref={sticker3}
      />
    </section>
  );
};
