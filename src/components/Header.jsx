import MaxWidthWrapper from "./MaxWidthWrapper";
import logo from "../assets/logoVT2025-2.png";
import { Link } from "react-router-dom";

// Définition des liens de navigation
const NAV_LINKS = [
  { name: "ACCUEIL", href: "/" },
  { name: "QUI SUIS-JE", href: "/about" },
  { name: "PRESTATIONS", href: "/prices" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACTER VINCENT", href: "/contact" },
];

const Header = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-background header-border">
      <MaxWidthWrapper>
        <header className="flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-blue-12">
            <img src={logo} alt="Vincent Tenret Logo" className="w-12 h-12" />
          </a>

          <nav className="hidden space-x-6 md:flex">
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
  <Link
    to={href}
    className="font-bold uppercase transition text-blue-12 hover:text-blue-9"
  >
    {name}
  </Link>
);

export default Header;
