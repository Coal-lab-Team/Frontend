"use client";

import cn from "@/utils/twcx";
import { FOOTER_LINKS } from "@/libs/constants";
import Image from "next/image";
// import { BsTwitterX } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-full  pt-5 lg:pt-10 border-t border-gray-300 bg-[#153333]">
      <div className="w-full h-full max-container flex flex-col justify-between px-4 lg:px-8 min-[1490px]:px-0 pb-8">
        <div className="flex flex-col gap-y-5 ">
          <div className="w-full max-[550px]:flex-col flex justify-between lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
            <Image
              src="/home/footer.svg"
              alt="logo"
              width={155}
              height={55}
              className="max-sm:w-[120px]"
            />
            <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] lg:hidden ">
              <h2 className="w-[270px] text-[14px] leading-[175%] text-white-100">
                At our marketing company, we believe that marketing is more than
                just advertising.
              </h2>
            </div>
          </div>
          <div className="flex max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start [&>ul>span]:text-white-100 [&>ul>span]:text-base [&>ul>span]:font-semibold [&>ul>a]:text-white-100 [&>ul>a]:text-base ">
            <div className="w-full max-w-[380px] hidden lg:block">
              <h2 className="w-[270px] text-[14px] leading-[175%] text-white-100">
                At our marketing company, we believe that marketing is more than
                just advertising.
              </h2>
            </div>
            <div className="flex items-end mb-4 ml-4"> {/*Flex container for icons */} 
              <FaDribbble className="text-white-100 text-2xl mr-4" /> {/* First icon */}
              <FaBehance className="text-white-100 text-2xl mr-4"/> {/* Second icon */}
              <FaInstagram className="text-white-100 text-2xl mr-4" /> {/* Third icon */}
              <FaLinkedin className="text-white-100 text-2xl "/> {/* Fourth icon */}
            </div> 

            
            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span>Company</span>
              {FOOTER_LINKS.company.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="capitalize hover:font-medium hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </ul>

            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span>Resources</span>
              {FOOTER_LINKS.resourse.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className={cn(
                    "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
                    {
                      uppercase: link.label === "resources",
                    }
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span>follow us</span>
              {FOOTER_LINKS.followus.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className={cn(
                    "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
                    {
                      uppercase: link.label === "faq",
                    }
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
