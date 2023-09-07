import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col  text-gray-600 mt-5 ">
      <div className="flex flex-col md:flex-row flex-wrap justify-around gap-5 px-6 py-10">
        <div className="flex flex-col gap-6 sm:w-full md:w-[35%] lg:w-[20%]  border-r-2 mb-4">
          <Image 
              src={'/logo.svg'}
              alt="Car rent Logo"
              width={118} height={18}
              className=" object-contain"
              />
          <p className="text-gray-600  text-base">
            Nehal 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around md:w-[60%] lg:w-[70%] flex-wrap">
          {
            footerLinks.map((link)=>(
              <div key={link.title} className="flex flex-col items-start md:items-center gap-4">
                <h3 className="font-bold pt-5 text-lg">{link.title}</h3>
                {
                  link.links.map(i => (
                    <Link href={i.url} key={i.title} className="hover:text-blue-800">
                      {i.title}
                    </Link>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div className="p-5 font-bold border-top border-t-2 w-full mt-4 flex flex-col md:flex-row justify-between">
          <p>All rights reserved in 2023</p>
          <div className="flex justify-between gap-10 mt-3 font-normal  underline ">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer