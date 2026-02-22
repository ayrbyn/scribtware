import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Scribtware</h1>

        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <Button className="hidden md:block">Mulai Proyek</Button>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="bg-white p-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="block py-2">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}