"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { assets } from "@/public/data";

type NavLink = {
  name: string;
  href: string;
};

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/collection" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <nav
      className={`${!isHomePage && "bg-white"} bg-white max-padd-container sticky top-0 left-0 right-0 w-full flex items-center justify-between py-4 transition-all border-b border-gray-200 z-50`}
    >
      {/* Logo */}
      <Link href={"/"} className="flex gap-1">
        <Image src={assets.logo} alt="LogoIcon" width={35} height={35} />
        <h3 className="text-2xl hidden sm:block">
          Nex<span className="text-destructive font-bold">ora</span>
        </h3>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <div className="hidden sm:flex gap-4 md:gap-12 mr-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`relative pb-1 font-medium hover:text-destructive ${pathname === link.href && "border-b border-destructive text-destructive"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-8">
        {/* Menu */}
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <Image src={assets.menu} alt="MenuIcon" width={25} height={25} />
        </button>
        {/* Search */}
        <Search
          width={25}
          height={25}
          className="cursor-pointer hover:text-destructive"
        />
        {/* Cart */}
        <Link href="/cart" className="relative cursor-pointer">
          <ShoppingCart
            width={25}
            height={25}
            className="hover:text-destructive"
          />
          <button className="absolute -top-2 -right-2 text-xs text-white bg-destructive w-4.5 h-4.5 rounded-full">
            0
          </button>
        </Link>
        {/* User/Auth */}
        <button className="btn-destructive flexCenter gap-1 px-4">
          <Image
            src={assets.user}
            alt="UserIcon"
            width={19}
            height={19}
            className="invert-100"
          />
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out absolute top-18 left-0 w-full bg-white shadow-md py-0 flex-col items-start text-sm md:hidden`}
      >
        <div className="flex flex-col w-full">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`relative font-medium px-5 py-2.5 ${pathname === link.href && "border-b border-destructive text-white bg-destructive/90 w-full"}`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
