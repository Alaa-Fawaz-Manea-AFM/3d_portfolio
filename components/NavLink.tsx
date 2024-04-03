import { navLinks } from "@/constant";

const NavLink = () => (
  <ul className="flex flex-col sm:flex-row items-center gap-10 text-secondary">
    {navLinks.map((link) => (
      <li
        key={link.id}
        className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
      >
        <a href={link.id}>{link.title}</a>
      </li>
    ))}
  </ul>
);

export default NavLink;
