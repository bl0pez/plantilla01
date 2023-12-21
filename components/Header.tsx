"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll position
      setActive(window.scrollY > 100);
    };
    // add event listener to window
    window.addEventListener("scroll", handleScroll);

    // remove event listener from window
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black-heavy py-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo,nav,btn */}
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" width={75} height={75} alt="logo" />
          </Link>
          {/* nav */}
          <Nav
            linkStyles="capitalize"
            containerStyles="hidden xl:flex gap-x-12 text-white"
          />
          {/* button */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              Reservar mesa
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyle="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
