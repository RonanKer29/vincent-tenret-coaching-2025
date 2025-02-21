import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import useScrollToTop from "./hooks/useScrollToTop"; // Import du hook
import { Toaster } from "@/components/ui/toaster"; // ✅ Import du Toaster
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
      <Toaster />
    </div>
  );
};

export default App;
