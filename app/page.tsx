import Link from "next/link";
import Image from "next/image"; 
import Logo from "@/public/Logo.svg";
import Header from "@/components/layout/header";
import Kos from "@/public/arrow-up-left.svg"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-center">
      <Header/>

      <div className="bg-black min-h-screen">
        <div className="">
            <h1 className="text-8x1 text-white pt-100">ПАТНЁРСКИЕ ПРОЕКТЫ 26 КАДРА</h1>
            <p className="text-white text-4x1 pt-8 pb-8">Практико-ориентированное обучение, <br/>  подготовка специалистов и совместные <br/> проекты с индустрией</p>
            <div className="flex items-center justify-center">
              <Link href="!" className="bg-white rounded:full p-2 text-[#000000] w-[228px] ">Смотреть кейсы</Link>
              <Image
                src={Kos}
                width={48}
                height={48}
                alt="a cool Image" 
              />
            </div>
        </div>
      </div>
    </div>
  )
} 