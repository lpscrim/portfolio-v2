"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavIcon from "../UI/NavIcon";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

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
        isFixed ? "fixed top-0 " : "absolute -bottom-[52px] "
      } left-0 z-200 w-lvw text-background transition-all duration-300`}
    >
      <nav
        aria-label="Global"
        className="relative bg-foreground mx-auto flex w-full items-center overflow-hidden justify-between px-2 h-13 sm:px-8 max"
      >
        {/* Desktop links */}
        <div className="hidden md:flex flex-1 items-center">
          <div className="font-josefin-sans text-base/6 lg:text-lg/6 gap-x-7 items-center flex">
            <Link
              href="/"
              className="hover:brightness-150 rounded-xs px-2 transistion-all duration-500"
            >
              ONE
            </Link>
            <Link
              href="/rooms"
              className="hover:brightness-150 rounded-xs px-2 transistion-all duration-500"
            >
              TWO
            </Link>
            <Link
              href="/book"
              className="hover:brightness-150 rounded-xs px-2 transistion-all duration-500"
            >
              THREE
            </Link>
          </div>
        </div>
        {/* Logo */}
        <div className="flex-1 flex justify-start md:justify-center items-center">
          <h2 className="home-title text-xl mt-1.5 lg:text-xl text-sceondary pl-3 md:pl-0">
            lewis scrimgeour
          </h2>
        </div>
        {/* Mobile menu button */}
        <div className="flex-1 flex justify-end items-center">
          <div className="md:hidden flex items-center gap-x-4 xl:pr-10 mt-0.5">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-999 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <NavIcon open={mobileMenuOpen} color="accent" hoverColor="secondary" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden bg-foreground w-full overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        {mobileMenuOpen && (
          <div className="flex flex-col gap-y-2 pl-5">
            <Link
              href="/"
              className="text-background/75 hover:text-background pop-up text-left active:translate-y-px transition-all duration-250"
              style={{ animationDelay: "0ms" }}
            >
              ONE
            </Link>
            <Link
              href="/rooms"
              className="text-background/75 hover:text-background pop-up text-left active:translate-y-px transition-all duration-250"
              style={{ animationDelay: "75ms" }}
            >
              TWO
            </Link>
            <Link
              href="/book"
              className="text-background/75 hover:text-background pop-up text-left active:translate-y-px transition-all duration-250"
              style={{ animationDelay: "150ms" }}
            >
              THREE
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
