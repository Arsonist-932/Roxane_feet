import { Facebook, Footprints, Instagram, Twitter } from "lucide-react";
import { ThemeSwitcher } from "../ui/theme-switcher";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative mx-auto flex w-full flex-col items-center justify-center gap-4 border-t py-6 text-center text-xs">
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/lhypnoz"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            <Facebook />
          </a>

          <a
            href={"https://www.instagram.com/roxane_frenchfeet?utm_source=qr"}
            rel="noreferrer"
            target="_blank"
          >
            <Instagram />
          </a>

          <a
            href={"https://www.linkedin.com/in/valeycia-fortune-36414426"}
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </div>

        <p className="flex items-center gap-1">
          &copy; {currentYear} Roxane <Footprints /> All rights reserved.
        </p>

        <div className="absolute right-5">
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  );
};

export default Footer;
