import Link from "next/link";
import Image from "next/image"; 
import Logo from "@/public/Logo.svg";
import Сadr from "@/components/layout/header";
import Kos from "@/public/arrow-up-left.svg"

export default function Card() {
    return (
        <div className="container mx-auto flex flex-col justify-center text-center text-white mt-60 gap-10">
        <h1 className="text-8xl">ПАРТНЁРСКИЕ ПРОЕКТЫ 26 КАДРА</h1>
        <p className="text-4xl">Практико-ориентированное обучение, <br/>  подготовка специалистов и совместные <br/> проекты с индустрией</p>
        <div className="flex justify-center">
          <div className="flex justify-center items-center rounded-[9999] bg-white w-[228] h-[48] gap-2 ">
            <p className="text-black py-4 px-6">Смотреть кейсы</p>
            <Image
              src={Kos}
              width={48}
              height={48}
              alt="a cool Image" 
            />
          </div>
          </div>
      </div>
    )
}