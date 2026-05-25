import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";


export default function Header() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row container mx-auto mt-4 justify-between"> 
      <Image
        src={Logo}
        width={300}
        height={36}
        alt="a cool Image" 
      />
      <nav className="flex">
        <Link className="flex justify-center items-center rounded-[999] bg-white text-black py-4 px-6" href="!">Связаться</Link>
      </nav>
      </div>
    </div>
    )
}


