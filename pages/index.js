import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
