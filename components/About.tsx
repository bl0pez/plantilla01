"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0"
      id="about"
    >
      <motion.div
        className="xl:pl-[135px]"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="mb-9">Hablemos de nosotros</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum,
          recusandae exercitationem cupiditate voluptatibus quisquam in commodi
          iusto tempore amet laboriosam ad rem reiciendis omnis modi quo illo
          doloremque enim?
        </p>
        <p className="mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          nihil sapiente numquam eligendi assumenda voluptatum. Sapiente iste
          aspernatur commodi, eligendi ipsum magnam pariatur molestiae
          doloremque.
        </p>
        <Button>Ver más</Button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          className="hidden xl:flex"
          alt="about"
        />
      </motion.div>
    </section>
  );
};

export default About;
