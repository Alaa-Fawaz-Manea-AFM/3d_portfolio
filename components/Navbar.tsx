import { logo } from "@/public/assets";
import { NavLink, ToggleNav } from ".";
import Image from "next/image";

const Navbar = () => (
  <nav className="sm:px-16 px-6 bg-primary flex fixed top-0 z-20 justify-between items-center gap-2 w-full max-w-screen-max h-20">
    <a href="#" className="flex justify-between gap-2 items-center">
      <Image
        src={logo}
        alt="logo"
        width={36}
        height={36}
        className="object-contain"
      />
      <h1>ALaa Fawaz</h1>
    </a>
    <div className="sm:flex hidden">
      <NavLink />
    </div>

    <ToggleNav />
  </nav>
);

export default Navbar;
