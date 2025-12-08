"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/1" || pathname === "/2") {
        setIsFixed(true);
        return;
      }
      const about = document.getElementById("about");
      if (about) {
        const aboutTop = about.getBoundingClientRect().top;
        setIsFixed(aboutTop <= 0);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`${
        isFixed ? "fixed top-0 " : "absolute -bottom-[90px] "
      } left-0 z-200 w-lvw  text-background transition-all duration-300`}
    >
      <nav
        aria-label="Global"
        className="bg-foreground/90 mx-auto flex w-full items-center overflow-hidden justify-end px-2 py-4 sm:px-8 max"
      >
        <div
          className={`flex text-accent w-full items-center justify-center relative`}
        >
          <div
            className={`${
              isFixed ? "opacity-100" : "opacity-0"
            } flex xl:pl-10 items-center absolute left-4 sm:left-0 gap-x-4 transition-all duration-500`}
          >
            <div className="hidden sm:block mt-1 font-light text-md lg:text-lg text-accent font-itc-eras text-center tracking-widest">
            </div>
          </div>
          <div className="font-josefin-sans  mt-1 text-base/6 lg:text-lg/6 gap-x-7 items-center flex ">
              <Link
                href="/"
                className="hover:brightness-150 rounded-xs pt-1 px-2 transistion-all duration-500"
              >
                ONE
              </Link>
              <Link
                href="/rooms"
                className="hover:brightness-150 rounded-xs pt-1 px-2 transistion-all duration-500"
              >
                TWO
              </Link>
              <Link
                href="/book"
                className="hover:brightness-150 rounded-xs pt-1 px-2 animated-border transistion-all duration-500"
              >
                THREE
              </Link>
          </div>
          <div className="flex items-center absolute right-3 sm:right-0 gap-x-4 xl:pr-10 mt-0.5">

          </div>
        </div>
      </nav>
    </header>
  );
}
