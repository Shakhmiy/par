import Link from "next/link";
import Image from "next/image"; 
import Logo from "@/public/Logo.svg";
import Header from "@/components/layout/header";
import Kos from "@/public/arrow-up-left.svg"
import Card from "@/components/ui/card";
import Gor from "@/public/Vecctor.svg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-center">
      <Card/>
      <Image className="connainer mx-auto"
              src={Gor}
              width={3000}
              height={200}
              alt="a cool Image" 
            />
      <div className="bg-white min-h-screen">
        <div className="container mx-auto flex flex-col w-[1160px] mt-8 gap-12"> 
          <h3 className="text-black w-[320px] justify-start items-center font-light">Кейсы</h3>
        </div>
      </div>

    </div>
  )
}
