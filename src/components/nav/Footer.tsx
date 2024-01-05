import Link from "next/link";
import { LineFooter } from "./LineFooter";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="fixed z-[2] bottom-[0%] top-auto left-[0%] right-[0%]">
      <div className="pl-[1.81vh] pr-[2.81vh]">
        <div className="flex place-content-between items-center">
          <div className="h-[3.45vh]  space-x-11 justify-start items-center p-[0.81vh] flex">
            <Link
              className="group uppercase leading-[1.83vh] text-[1.51vh] font-[700] "
              href="/collection"
            >
              Collection
              <LineFooter />
            </Link>
            <Link
              className="group uppercase leading-[1.83vh] text-[1.51vh] font-[700] "
              href="/collection"
            >
              vicio cities
              <LineFooter />
            </Link>
            <Link
              className="group uppercase leading-[1.83vh] text-[1.51vh] font-[700] "
              href="/collection"
            >
              about us
              <LineFooter />
            </Link>
            <Link
              className="group uppercase leading-[1.83vh] text-[1.51vh] font-[700] "
              href="/collection"
            >
              curra aqui
              <LineFooter />
            </Link>
            <Link
              className="group uppercase leading-[1.83vh] text-[1.51vh] font-[700] "
              href="/collection"
            >
              faqs
              <LineFooter />
            </Link>
          </div>
          <div className="flex space-x-7 pb-[2.81vh] items-end">
            <Link
              className="group uppercase leading-[1.32vh] text-[1.08vh] font-[400] "
              href="/collection"
            >
              Presskit
              <LineFooter height="h-[0.9375px]" />
            </Link>

            <div className="relative hover-trigger group/dropdown uppercase leading-[1.32vh] text-[1.08vh] font-[400]">
              <nav
                className="absolute bg-black rounded-xl border border-grey-100 px-4 py-2
                    opacity-0
                    group-hover/dropdown:opacity-100
                    transform
                    transition-transform min-w-max
                    group-hover/dropdown:-translate-y-[100%]   duration-500
                    translate-y-0
                    translate-x-[-20%]
                    
                "
              >
                <div className="py-[1.08vh] text-white flex flex-col space-y-3">
                  <Link className="group" href="/collection">
                    <div className="max-w-max">
                      Canal Etico
                      <LineFooter height="h-[0.9375px]" color="bg-white" />
                    </div>
                  </Link>
                  <Link className="group" href="/collection">
                    <div className="max-w-max">
                      Aviso Legal
                      <LineFooter height="h-[0.9375px]" color="bg-white" />
                    </div>
                  </Link>
                  <Link className="group" href="/collection">
                    <div className="max-w-max">
                      Condiciones Generales
                      <LineFooter height="h-[0.9375px]" color="bg-white" />
                    </div>
                  </Link>
                  <Link className="group" href="/collection">
                    <div className="max-w-max">
                      Politica de Cookies
                      <LineFooter height="h-[0.9375px]" color="bg-white" />
                    </div>
                  </Link>
                  <Link className="group" href="/collection">
                    <div className="max-w-max">
                      Politica de Privacidad
                      <LineFooter height="h-[0.9375px]" color="bg-white" />
                    </div>
                  </Link>
                  <Link className="group" href="/collection">
                    <div className="max-w-max">
                      Politica Redes Sociales
                      <LineFooter height="h-[0.9375px]" color="bg-white" />
                    </div>
                  </Link>
                </div>
              </nav>
              Asuntos Legales
            </div>

            <button> ESP </button>
            <Link
              className="relative group flex flex-col space-y-2 hover:child-rotate-90 place-self-end"
              href="/collection"
            >
              <Image
                className="group-hover:-rotate-180 transition-transform"
                src="/svg/instagram-logo.svg"
                alt="instagram"
                width={20}
                height={20}
              />
              <Image
                className="group-hover:-rotate-90 transition-transform"
                src="/svg/arrow-lateral.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
