"use client";

import { linksMobile } from "@/utils/link";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "./ui/button";

interface Props {
  containerStyles: string;
  linkStyles: string;
  iconStyle: string;
}

const NavMobile = ({ containerStyles, linkStyles, iconStyle }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={`${containerStyles}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          {/* nav close button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-sm cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-green flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" width={90} height={90} alt="logo" />
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {linksMobile.map((link) => (
              <ScrollLink
                key={link.path}
                to={link.path}
                offset={link.offset}
                smooth={false}
                className="flex items-center gap-x-3"
              >
                <div className={`${iconStyle}`}>{link.icon}</div>
                <div className={`${linkStyles}`}>{link.name}</div>
              </ScrollLink>
            ))}
          </div>
          {/* btn */}
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button variant="orange">Reservar mesa</Button>
          </ScrollLink>
        </div>
      </aside>
    </nav>
  );
};

export default NavMobile;
