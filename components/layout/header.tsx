import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";


export default function Header() {
    return (
      <div className="flex gap-185 m-[16px] justify-between px-[129px] py-[16px] ">
      <Image
        src={Logo}
        width={300}
        height={36}
        alt="a cool Image" 
      />
      <nav className="flex justify-center w-[130px] h-[51px] bg-[#ffffff] text-[#000000] rounded-full p-4">
        <Link href="!">Связаться</Link>
      </nav>
    </div>
    )
}