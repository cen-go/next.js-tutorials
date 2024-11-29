import Link from "next/link";
import Image from "next/image";

import classes from "./MainHeader.module.css";
import logoImage from "@/assets/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImage} alt="a table full of meals" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies Community</NavLink>            
          </ul>
        </nav>
      </header>
    </>
  );
}
