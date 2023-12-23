"use client";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.svg" width={90} height={36} alt="logo" />
            </Link>
          </div>
          {/* grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            <div>
              <h4 className="font-semibold mb-5">Item 1</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href={`/`}>Lorem ipsum dolor sit.</Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, similique!
                  </Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Item 2</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href={`/`}>Lorem ipsum dolor sit.</Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, similique!
                  </Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">item 3</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href={`/`}>Lorem ipsum dolor sit.</Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, similique!
                  </Link>
                </li>
                <li>
                  <Link href={`/`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4 border-t border-white/10">
          <p className="text-white/60 text-center text-sm">
            Copyrigth &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
