import { RiHomeFill } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

export interface ItemNav {
  path: string;
  name: string;
  offset: number;
}

export const links: ItemNav[] = [
  {
    path: "home",
    name: "Inicio",
    offset: -50,
  },
  {
    path: "menu",
    name: "Menu",
    offset: -50,
  },
  {
    path: "about",
    name: "Nosotros",
    offset: -150,
  },
  {
    path: "contact",
    name: "Contacto",
    offset: 0,
  },
];

export interface ItemNavMobile extends ItemNav {
  icon: React.ReactNode;
}

export const linksMobile: ItemNavMobile[] = [
  {
    icon: <RiHomeFill />,
    name: "Inicio",
    path: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    name: "Menu",
    path: "menu",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    name: "Nosotros",
    path: "about",
    offset: -50,
  },
  {
    icon: <RiHomeFill />,
    name: "Contacto",
    path: "contact",
    offset: 0,
  },
];
