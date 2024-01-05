"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { landingProducts } from "@/data";

export const Row2 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

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

  return (
    <div className="flex space-x-[2.16vh]">
      {/* Div down Burguer */}
      {
        //TODO: MIRAR GAP DE FLEX "gap-[2.16vh]"
      }
      <div className="flex flex-col gap-[2.16vh]">
        {/* FIRST ROW: BOX DOWN BURGUER */}
        <div className="h-[21.29vh] relative">
          <div className="text-right inline-block absolute top-[2.59vh] bottom-auto left-auto right-[2.59vh]">
            <div className="text-[1.4vh] font-[700] leading-[1.51vh] ">
              TE DAMOS LO TUYO
              <br />
              @GANASDEVICIO
            </div>
          </div>
          <div className="absolute bg-[url('/svg/icon-star.svg')] bg-contain bg-no-repeat top-[6.7vh] right-[20.75vh]  w-[3.45vh] h-[4.21vh]" />
          <div className="absolute bg-[url('/svg/icon-star.svg')] bg-contain bg-no-repeat top-[18.7vh] right-[8.32vh]  w-[1.62vh] h-[1.94vh]" />
          <div className="absolute bg-[url('/svg/icon-happy.svg')] bg-contain bg-no-repeat bottom-[0%] right-[3.02vh]  w-[3.24vh] h-[3.24vh]" />
        </div>
        {/* SECOND ROW: COLLECTION LINK*/}
        <div className="flex gap-x-[2.16vh]">
          {/* icon burguer trufada */}
          <div className="w-[14.7vh] h-full min-w-[14.7vh] flex justify-end relative -top-[1.8vh] ">
            <div className="text-right text-[1.4vh] font-bold  leading-[1.51vh]">
              Cheeseburger
              <br />
              Trufada
            </div>
            <Image
              className="h-[1.08vh] w-[1.08vh] mt-[0.32vh] ml-[0.32vh] object-contain"
              src="/svg/arrow-lateral.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </div>
          {/* Link collection */}
          <div className="z-[9] w-[78.27vh] flex flex-col relative">
            <Link className="w-full flex group" href="/collection">
              {/* left icon */}
              <div className="flex flex-col items-center justify-center gap-[.64vh]">
                <div className="w-full flex justify-between">
                  <div className="text-[1.4vh] font-bold leading-[1.51vh]">
                    W23
                  </div>

                  <Image
                    className="group-hover:rotate-90 transition-transform w-[1.94vh] h-[1.94vh] mt-[.21vh] object-contain"
                    src="/svg/arrow-lateral.svg"
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[6.81vh] h-[4.54vh] bg-[url('/svg/burger-box.svg')] z-[2] bg-contain bg-no-repeat">
                  <Image
                    className="inline-block max-w-full place-self-center scale-[.93] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    src="/gif/burger-rotation-hover.gif"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="w-[7.13vh] h-[3.13vh] bg-contain bg-no-repeat bg-[url('/svg/map.svg')]" />
              </div>
              {/* text right */}
              <div className="w-[70.96vh] h-[10.96vh] pl-[12px] flex overflow-hidden">
                <div className="w-[141.92vh]">
                  <div className="bg-[url('/svg/collection-link.svg')] bg-no-repeat bg-contain w-full h-full transform -translate-y-full group-hover:translate-y-0 transition duration-500" />
                  <div className="bg-[url('/svg/collection-link.svg')] bg-no-repeat bg-contain w-full h-full transform -translate-y-full group-hover:translate-y-0 transition duration-500" />
                </div>
              </div>
            </Link>
            <div className="w-full text-right pt-[0.86vh] flex place-content-end">
              <div className="font-[700] inline-block text-[1.4vh] leading-[1.51vh]">
                AQUÍ TIENES NUESTRO MENÚ
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-[46vh] ">
                <div className="flex flex-wrap">
                  {landingProducts.map(({ name, url }) => (
                    <div className=" h-[1.51vh]" key={name}>
                      <Link
                        className="text-[1.29vh] font-[400] leading-[1.51vh] uppercase ml-[.35vh]"
                        href={url}
                      >
                        {"" + name} /
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Div flex derecha  */}
      <div className="flex relative gap-[2.16vh]">
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
        <div className="w-[38vh] h-[44vh] relative">
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
    </div>
  );
};
