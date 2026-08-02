"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavIcon from "../UI/NavIcon";
import Clock from "../Animation/Clock";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
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

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const scrollToBottom = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    };

    if (pathname === "/") {
      // Already on main page, scroll immediately
      scrollToBottom();
    } else {
      // Navigate to main page, then scroll
      router.push("/");
      // Wait for page to load before scrolling
      setTimeout(scrollToBottom, 500);
    }
  };

  return (
    <header
      className={`${
        isFixed ? "fixed top-0 " : "absolute -bottom-13 "
      } left-0 z-999 w-lvw text-background bg-foreground transition-all duration-300`}
    >
      <nav
        aria-label="Global"
        className="relative max-w-8xl mx-auto flex w-full items-center overflow-hidden justify-between px-2 h-13 sm:px-8 xl:px-16"
      >
        {/* Name */}
        <div className="flex flex-1 items-center">
          <Link href="/">
            <h2 className={` home-title whitespace-nowrap pl-2 text-xl tracking-wide mt-1.5 lg:text-xl text-background/90 hover:text-background transition-all duration-500`}>
              lewis scrimgeour
            </h2>
          </Link>
        </div>
        {/* Clock */}
        <div className="flex-1 flex justify-start md:justify-center items-center">
          <div className={`hidden ${isFixed ? 'opacity-100' : 'opacity-0'} `}>
            <Clock />
          </div>
        </div>
        {/* Desktop links / Mobile menu */}
        <div className="flex-1 flex justify-end items-center sm:mr-2">
          <div className="hidden md:flex  home-title text-background/90 tracking-wide">
            <div className="text-lg gap-x-2 xl:gap-x-4 items-center mt-1.5 flex">
              <Link
                href="/projects"
                className="hover:text-background rounded-xs px-2 transition-all duration-500"
              >
                projects
              </Link>
              <Link
                href="#contact"
                onClick={handleContactClick}
                className="hover:text-background rounded-xs px-2 xl:px-2 transition-all duration-500"
              >
                contact
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center gap-x-4 xl:pr-10 mt-0.5">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 -mr-5 lg:mr-0 z-999 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <NavIcon
                open={mobileMenuOpen}
                color="background"
                hoverColor="background"
              />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden bg-foreground w-full overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-60 py-2" : "max-h-0 py-0"
        }`}
      >
        {mobileMenuOpen && (
          <div className="flex flex-col gap-y-2 pl-5 text-lg tracking-wide ">
            <Link
              href="/projects"
              className="text-background/90 hover:text-background pop-up text-left active:translate-y-px transition-all duration-250 lowercase home-title"
            >
              PROJECTS
            </Link>
           
            <Link
              href="#contact"
              onClick={handleContactClick}
              className="text-background/90 hover:text-background pop-up-3 text-left active:translate-y-px transition-all duration-250 lowercase home-title"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
