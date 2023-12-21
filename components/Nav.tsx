import { links } from "@/utils/link";
import { Link } from "react-scroll";

interface Props {
  containerStyles: string;
  linkStyles: string;
}

const Nav = ({ containerStyles, linkStyles }: Props) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          className={`${linkStyles}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
