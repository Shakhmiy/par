import Link from "next/link";
import Image from "next/image"; 
import Logo from "@/public/Logo.svg";
import Header from "@/components/layout/header";
import Kos from "@/public/sadasd.svg"
import Arrow from "@/public/arrow-up-left.svg"
import Gor from "@/public/Vecctor.svg";

export default function Card() {
    return(
          <div className="bg-[url(/fdfd.png)] bg-cover bg-no-repeat bg-center w-[480] h-[300] rounded-2xl">
              <div className="flex flex-row p-4 pt-8 gap-35">
                <p className="flex text-4xl text-start text-white">Отраслевые <br />  корпоративные <br /> чемпионаты</p>
                <Image className="" src={Arrow} width={48} height={48} alt="a cool Image" />
              </div>
              <p className="text-sm text-start w-[336] h-[84] m-4 text-white">Оценка квалификации сотрудников, <br /> актуализация <br /> механизмов кадрового обеспечения <br /> предприятия</p>
          </div>
    )
}

