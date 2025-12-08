"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "../UI/Button";
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
        isFixed ? "fixed top-0 " : "absolute -bottom-[79px] "
      } left-0 z-200 w-lvw  text-background transition-all duration-300`}
    >
      <nav
        aria-label="Global"
        className="relative bg-foreground/90 mx-auto flex w-full items-center overflow-hidden justify-end px-2 h-13 sm:px-8 max"
      >
        <div
          className={`flex text-accent w-full items-center justify-center relative`}
        >
          <div className="hidden sm:flex font-josefin-sans text-base/6 lg:text-lg/6 gap-x-7 items-center ">
            <Link
              href="/"
              className="hover:brightness-150 rounded-xs  px-2 transistion-all duration-500"
            >
              ONE
            </Link>
            <Link
              href="/rooms"
              className="hover:brightness-150 rounded-xs  px-2 transistion-all duration-500"
            >
              TWO
            </Link>
            <Link
              href="/book"
              className="hover:brightness-150 rounded-xs  px-2 transistion-all duration-500"
            >
              THREE
            </Link>
          </div>
          <div className="sm:hidden flex items-center absolute right-3 sm:right-0 gap-x-4 xl:pr-10 mt-0.5">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-999 cursor-pointer "
            >
              <span className="sr-only">Open main menu</span>
              <NavIcon
                open={mobileMenuOpen}
                color="accent"
                hoverColor="secondary"
              />
            </button>
          </div>
        </div>

        {/* Mobile Header pop out*/}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="sm:hidden"
        >
          <DialogPanel
            className="absolute right-0 top-full mt-[79] w-48 z-500 rounded-xs bg-foreground/95 shadow-lg"
          >
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="absolute right-5 -top-10 w-12 rounded-md p-4 z-999 cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
            </button>
            <div className="py-2">
                
              <Button onClick={() => setMobileMenuOpen(false)}>
                <Link href="/" className="block px-4 py-2">
                  ONE
                </Link>
              </Button>
              <Button onClick={() => setMobileMenuOpen(false)}>
                <Link href="/" className="block px-4 py-2">
                  TWO
                </Link>
              </Button>
              <Button onClick={() => setMobileMenuOpen(false)}>
                <Link href="/" className="block px-4 py-2">
                  THREE
                </Link>
              </Button>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
