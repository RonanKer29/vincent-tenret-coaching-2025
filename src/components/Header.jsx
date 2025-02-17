import MaxWidthWrapper from "./MaxWidthWrapper";
import logo from "../assets/logoVT.png";
import { Link } from "react-router-dom";
import MobileNavSheet from "./MobileNavSheet";
import { useState, useEffect } from "react";

// Définition des liens de navigation
const NAV_LINKS = [
  { name: "ACCUEIL", href: "/" },
  { name: "QUI SUIS-JE", href: "/about" },
  { name: "PRESTATIONS", href: "/prices" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACTER VINCENT", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour changer le header au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <MaxWidthWrapper>
        <header className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Vincent Tenret Logo"
              className="w-16 h-16 transition-transform duration-300"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden space-x-6 md:flex">
            {NAV_LINKS.map(({ name, href }) => (
              <HeaderLink key={name} name={name} href={href} />
            ))}
          </nav>

          {/* Menu Burger Mobile */}
          <div className="md:hidden">
            <MobileNavSheet navLinks={NAV_LINKS} />
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  );
};

// Composant réutilisable pour les liens
const HeaderLink = ({ name, href }) => (
  <Link
    to={href}
    className="font-semibold tracking-wide uppercase transition duration-300 text-blue-12 hover:text-blue-9 hover:underline underline-offset-4"
  >
    {name}
  </Link>
);

export default Header;
