"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavIcon from "../UI/NavIcon";
import Clock from "../Animation/Clock";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/" || pathname === "/projects/") {
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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });

        // Check if fully in view after a short delay, and scroll again if needed
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom > window.innerHeight) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 400); // adjust delay as needed
      }
    };

    // Wait for next paint to ensure layout is updated
    requestAnimationFrame(scrollToElement);
  };

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
        <div className="hidden md:flex flex-1 items-center lowercase home-title text-background tracking-wide">
          <div className="text-lg gap-x-2 xl:gap-x-4 items-center mt-1.5 flex">
            <Link
              href="/projects"
              className="hover:text-secondary rounded-xs px-2 transistion-all duration-500"
            >
              PROJECTS
            </Link>
            <Link
              href="/photo"
              className="hover:text-secondary rounded-xs px-2 transistion-all duration-500"
            >
              PHOTO
            </Link>
            <Link
              href="#contact"
              onClick={e => handleSmoothScroll(e, "contact")}
              className="hover:text-secondary rounded-xs px-2 transition-all duration-500"
            >
              CONTACT
            </Link>
          </div>
        </div>
        {/* Name */}
        <div className="flex-1 flex justify-start md:justify-center items-center">
          <Link href="/">
            <h2 className="home-title text-xl tracking-wide mt-1.5 lg:text-xl text-background pl-3 md:pl-0">
              lewis scrimgeour
            </h2>
          </Link>
        </div>
        {/* Mobile menu / logo */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex">
            <Clock />
          </div>
          <div className="md:hidden flex items-center gap-x-4 xl:pr-10 mt-0.5">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-999 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <NavIcon open={mobileMenuOpen} color="background" hoverColor="secondary" />
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
          <div className="flex flex-col gap-y-2 pl-5 text-lg tracking-wide">
            <Link
              href="/projects"
              className="text-background hover:text-secondary pop-up text-left active:translate-y-px transition-all duration-250 lowercase home-title"
              style={{ animationDelay: "0ms" }}
            >
              PROJECTS
            </Link>
            <Link
              href="/photo"
              className="text-background hover:text-secondary pop-up text-left active:translate-y-px transition-all duration-250 lowercase home-title"
              style={{ animationDelay: "75ms" }}
            >
              PHOTO
            </Link>
            <Link
              href="#contact"
              onClick={e => handleSmoothScroll(e, "contact")}
              className="text-background hover:text-secondary pop-up text-left active:translate-y-px transition-all duration-250 lowercase home-title"
              style={{ animationDelay: "150ms" }}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
