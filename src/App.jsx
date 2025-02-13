import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
