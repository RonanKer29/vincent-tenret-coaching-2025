import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../components/ui/sheet";
import { Menu } from "lucide-react"; // Icône burger

const MobileNavSheet = ({ navLinks }) => {
  return (
    <Sheet>
      {/* Icône burger pour ouvrir le menu */}
      <SheetTrigger className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <Menu className="w-8 h-8 text-blue-12" />
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader></SheetHeader>

        <nav className="mt-4 space-y-4">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="block text-lg font-semibold text-blue-12 hover:text-blue-9"
            >
              {name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
