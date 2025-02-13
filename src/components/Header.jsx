import MaxWidthWrapper from "./MaxWidthWrapper";

// 📌 Définition des liens de navigation
const NAV_LINKS = [
  { name: "ACCUEIL", href: "#accueil" },
  { name: "QUI SUIS-JE", href: "#qui-suis-je" },
  { name: "PRESTATIONS", href: "#prestations" },
  { name: "ACTUALITéS", href: "#actualites" },
  { name: "CONTACTER VINCENT", href: "#contacter-vincent" },
];

const Header = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-white shadow-md">
      <MaxWidthWrapper>
        <header className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-brand">
            Logo
          </a>

          {/* Navigation Desktop */}
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
  <a href={href} className="text-gray-700 font-bold uppercase">
    {name}
  </a>
);

export default Header;
