"use client";
import { useRef } from "react";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoaderStore } from "@/stores";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Video = () => {
  const animationComplete = useLoaderStore((state) => state.animationComplete);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const slider = useRef(null);

  let xPercent = 0,
    direction = -1;

  const handleMouseEnter = () => {
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
  };
  const handleMouseEnter2 = () => {
    if (videoRef2.current !== null) {
      videoRef2.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current !== null) {
      videoRef.current.pause();
    }
  };
  const handleMouseLeave2 = () => {
    if (videoRef2.current !== null) {
      videoRef2.current.pause();
    }
  };

  useGSAP(
    () => {
      if (!container.current) return;
      gsap.from(container.current.children, {
        delay: 1.5,
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 10,
          end: window.innerHeight,
          onUpdate: (self) => {
            direction = self.direction === 1 ? 1 : -1;
          },
        },
        x: "-500px",
      });

      const animate = () => {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }

        gsap.set([text1.current, text2.current], { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      };

      requestAnimationFrame(animate);
    },
    { scope: container, dependencies: [animationComplete, xPercent] }
  );

  return (
    <div ref={container} className="flex relative gap-[2.16vh]">
      <div
        className="w-[38vh] h-[44vh] relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          loop
          muted
          className="w-full h-full hidden group-hover:block"
        >
          <source src="/video/VICIO-Web-01.webm" type="video/webm" />
        </video>
        <Image
          className="w-full h-full group-hover:hidden"
          src="/image/picture-1.jpg"
          alt=""
          width={150}
          height={400}
        />
      </div>
      <div className="w-[38vh] h-[44vh] relative overflow-hidden">
        <div className="absolute -bottom-[7.5vh] cursor-not-allowed -ml-20 rotate-[10deg] flex ">
          <div
            ref={text1}
            className="bg-cover bg-no-repeat bg-[url('/svg/banda-vicio.svg')] w-[80.21vh] h-[7.78vh] -mr-2 "
          />
          <div
            ref={text2}
            className="bg-cover bg-no-repeat bg-[url('/svg/banda-vicio.svg')] w-[80.21vh] h-[7.78vh] "
          />
        </div>
        <video className="w-full h-full " loop autoPlay muted>
          <source src="/video/VICIO-Web-02.webm" type="video/webm" />
        </video>
      </div>
      <div
        className="w-[38vh] h-[44vh] relative group"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <video
          ref={videoRef2}
          loop
          muted
          className="w-full h-full hidden group-hover:block"
        >
          <source src="/video/VICIO-Web-03.webm" type="video/webm" />
        </video>
        <Image
          className="w-full h-full group-hover:hidden"
          src="/image/FOTO-1.png"
          alt=""
          width={150}
          height={400}
        />
      </div>
    </div>
  );
};
