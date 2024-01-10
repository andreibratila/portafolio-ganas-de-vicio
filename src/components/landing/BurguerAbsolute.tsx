"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderStore } from "@/stores";

export const BurguerAbsolute = () => {
  const animationComplete = useLoaderStore((state) => state.animationComplete);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(container.current, {
        delay: 2,
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.5,
        ease: "power2.out",
      });
    },
    { scope: container, dependencies: [animationComplete] }
  );

  return (
    <div
      ref={container}
      className="absolute z-[8] h-[52vh] block bottom-auto left-[0%] right-auto"
    >
      <Link href="/" className=" ">
        <Image
          className="w-[90vh] h-[70vh] object-contain block relative -top-[10vh] -left-[15vh] right-[0%]  hover:scale-95 duration-500"
          src="/landing/burger-big.png"
          alt="burguer"
          width={1521}
          height={1196}
        />
      </Link>
    </div>
  );
};
