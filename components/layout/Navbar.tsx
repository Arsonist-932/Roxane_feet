import Link from "next/link";
import NavbarMobile from "./NavMobile";
import UserDropdownMenu from "./UserDropdownMenu";
import { Footprints } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

const Navbar = () => {
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/photos", label: "Mes photos" },
    { href: "/videos", label: "Mes vidéos" },
    { href: "/podcasts", label: "Mes Podcasts" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed z-10 flex h-14 w-full items-center border border-transparent border-b-foreground/80 bg-white dark:bg-black">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-3">
          <NavbarMobile navlinks={navLinks} />

          <div className="flex items-center gap-1 font-semibold">
            <div className="flex items-center justify-center gap-8">
              <Link href={"/"} className="flex gap-2">
                Roxane <Footprints />
              </Link>

              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground max-md:hidden"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <UserDropdownMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
