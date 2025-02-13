import "../index.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <Testimonials />
    </>
  );
}

export default Home;
