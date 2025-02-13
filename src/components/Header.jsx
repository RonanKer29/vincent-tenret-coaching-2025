import MaxWidthWrapper from "./MaxWidthWrapper";
import logo from "../assets/logoVT2025-2.png";
import { Link } from "react-router-dom";

// 📌 Définition des liens de navigation
const NAV_LINKS = [
  { name: "ACCUEIL", href: "/" },
  { name: "QUI SUIS-JE", href: "/about" },
  { name: "PRESTATIONS", href: "#prestations" },
  { name: "ACTUALITéS", href: "#actualites" },
  { name: "CONTACTER VINCENT", href: "#contacter-vincent" },
];

const Header = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-white shadow-md">
      <MaxWidthWrapper>
        <header className="flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-brand">
            <img src={logo} alt="Vincent Tenret Logo" className="w-12 h-12" />
          </a>

          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map(({ name, href }) => (
              <HeaderLink key={name} name={name} href={href} />
            ))}
          </nav>
        </header>
      </MaxWidthWrapper>
    </div>
  );
};

//* Composant réutilisable pour les liens
const HeaderLink = ({ name, href }) => (
  <Link to={href} className="text-gray-700 font-bold uppercase">
    {name}
  </Link>
);

export default Header;
