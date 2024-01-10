"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useLoaderStore } from "@/stores";
import { cn } from "@/utils";

export const NavbarTop = () => {
  const openMenu = useLoaderStore((state) => state.openMenu);
  const setOpenMenu = useLoaderStore((state) => state.setOpenMenu);
  const animationComplete = useLoaderStore((state) => state.animationComplete);

  const navbar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!navbar.current) return;
      gsap.from(navbar.current, {
        duration: 1,
        y: -100,
        ease: "power2.inOut",
      });
    },
    { scope: navbar, dependencies: [animationComplete] }
  );
  if (!animationComplete) return null;

  return (
    <header
      ref={navbar}
      className={cn(
        "w-full h-[8.64vh] fixed top-0 z-[3] mb-96 block",
        openMenu && "hidden"
      )}
    >
      <nav className="py-[2.81vh] flex place-content-between px-3  ">
        <Link href="/">
          <Image
            className="w-[12.64vh] h-[3.02vh]"
            src="/svg/vicioLogo.svg"
            width={100}
            height={100}
            alt="Vicio Logo"
          />
        </Link>
        <div className="flex space-x-3 ">
          <div className="flex">
            <div className="flex space-y-1 flex-col">
              <Image
                className="w-[1.51vh] h-[1.94vh]"
                src="/svg/fireNavbar.svg"
                alt="fire"
                width={13}
                height={13}
              />
              <Image
                className="w-[4.21vh] "
                src="/svg/lineFireNavbar.svg"
                alt="Line"
                width={35}
                height={10}
              />
            </div>
            <p className="uppercase text-black font-bol leading-[1.72vh] text-right ml-2 text-xs font-[700] ">
              The hottest burger of today is <br /> BBQ Bacon Cheeseburger
            </p>
          </div>
          {
            //TODO: IMPORTANTE A;adir movimiento al boton
          }
          <button
            onClick={() => setOpenMenu(true)}
            className="w-[10.81vh] uppercase border border-black rounded-[100%] py-[1.39vh] font-sans text-[1.29vh] font-bold leading-[1.72vh] text-black hover:text-white hover:bg-black transition duration-200"
          >
            ¡Pide ya!
          </button>
        </div>
      </nav>
    </header>
  );
};
