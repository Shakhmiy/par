import Link from "next/link";
import Image from "next/image"; 
import Logo from "@/public/Logo.svg";
import Header from "@/components/layout/header";
import Kos from "@/public/sadasd.svg"
import Arrow from "@/public/arrow-up-left.svg"
import Card from "@/components/ui/card";
import Gor from "@/public/Vecctor.svg";
import Txt from "@/public/txt.svg"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-center">
     <div className=" h-screen flex flex-col justify-center text-center text-white gap-10 relative">
        <h1 className="text-8xl">ПАРТНЁРСКИЕ ПРОЕКТ 26 КАДР</h1>

        
        <p className="text-4xl">Практико-ориентированное обучение, <br/>  подготовка специалистов и совместные <br/> проекты с индустрией</p>
        <div className="flex justify-center">
          <div className="flex justify-center items-center rounded-full bg-white w-[228] h-[48] gap-2 ">
            <p className="text-black py-4 px-6">Смотреть кейсы</p>
            <Image
              src={Kos}
              width={48}
              height={48}
              alt="a cool Image" 
            />
          </div>
          </div>
          <Image className=" absolute bottom-0 left-0 leading-none w-full"
              src={Gor}
              width={3000}
              height={200}
              alt="a cool Image" 
            />
      </div>  
      
      <div className="bg-white">
        <div className="flex container mx-auto flex-col gap-9 pt-18">
          <h1 className="flex text-5xl justify-start text-black text-[55px]">Кейсы</h1>
          <div className="grid grid-cols-3 gap-5">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className="flex container mx-auto flex-row justify-between my-16">
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl">СТАНЬТЕ ПАРТНЁРОМ 26 КАДР</h1>
              <p className="text-xl text-start">Обсудим совместные проекты, <br /> подготовку специалистов и форматы <br /> сотрудничества для вашего бизнеса</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start rounded-[8] bg-[#F2F2F2] w-[568] h-[53] gap-2">
                <p className="text-black py-4 px-6 text-bace">ФИО</p>
              </div>
              <div className="flex justify-start rounded-[8] bg-[#F2F2F2] w-[568] h-[53] gap-2">
                <p className="text-black py-4 px-6 text-bace">Email или телефон</p>
              </div>
              <div className="flex justify-start rounded-[8] bg-[#F2F2F2] w-[568] h-[53] gap-2">
                <p className="text-black py-4 px-6 text-bace">Компания</p>
              </div>
              <div className="flex justify-center rounded-[8] bg-[#00d812] w-[568] h-[53] gap-2">
                <p className="text-black py-4 px-6 text-bace">Отправить</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image className="" src={Txt} width={24} height={24} alt="a cool Image" />
                <p className="text-xl">Согласен на обработку персональных данных</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}