"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useLoaderStore } from "@/stores";

import { HoverCityGiff } from "..";

export const Row1 = () => {
  const animationComplete = useLoaderStore((state) => state.animationComplete);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      gsap.from(container.current, {
        delay: 0.8,
        duration: 1,
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: container, dependencies: [animationComplete] }
  );

  return (
    <div
      ref={container}
      className=" z-[19] w-[144.78vh] h-[29.18vh] flex flex-col ml-[71.89vh] relative justify-end"
    >
      <Link href="/cities" className="w-full inline-block group">
        <div className="flex place-items-center">
          <Image
            className="w-[4.32vh] h-[1.94vh]"
            src="/svg/icon-world.svg"
            alt="burger-club"
            width={40}
            height={35}
          />
          <span className="ml-2  font-[700] leading-[1.51vh]">
            VICIO BURGER CLUB
          </span>
        </div>
        <div className="relative overflow-hidden h-[18.69vh]">
          <div className="transform -translate-y-full group-hover:translate-y-0 transition duration-500 bg-no-repeat bg-contain bg-[url('/svg/vicio-cities.svg')] w-[123.34vh] h-[18.69vh]" />
          <div className="transform -translate-y-full group-hover:translate-y-0 transition duration-500 bg-no-repeat bg-contain bg-[url('/svg/vicio-cities.svg')] w-[123.34vh] h-[18.69vh]" />
        </div>
        <HoverCityGiff />
      </Link>
    </div>
  );
};
