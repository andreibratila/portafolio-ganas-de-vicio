import { BurguerAbsolute } from "@/components/landing";
import { Row1, Row2 } from "@/components/landing/col1";

export default function Home() {
  return (
    // cambiar a overflow-scroll a overflow-x-scroll
    <main className="w-[100vw] h-[100vh] fixed overflow-scroll">
      <div className="min-w-[100vw] h-full relative">
        {/* ROW */}
        <div className="flex ">
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
          <div></div>
        </div>
        {/* <StickerWrap /> */}
      </div>
    </main>
  );
}
