import Image from "next/image";
import Link from "next/link";

export const BurguerAbsolute = () => {
  return (
    <div className="absolute z-[8] h-[52vh] block bottom-auto left-[0%] right-auto">
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
