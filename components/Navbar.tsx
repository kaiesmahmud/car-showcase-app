import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-5 sm:px-16 px-6">
          <Link href={'/'} className="flex justify-center items-center">
            <Image 
              src={'/logo.svg'}
              alt="Car rent Logo"
              width={118} height={18}
              className=" object-contain"
              />
          </Link>
          <CustomButton
            title="Sign In"
            btnType="submit"
            containerStyles="bg-white text-blue-800 shadow-xl rounded-full  px-5 py-2 "
          />
      </nav>
    </header>
    )
}

export default Navbar