import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutWelcome from "../components/AboutWelcome";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-950 to-slate-800 text-[#E2DAD6]">
      <Navbar />
      <AboutWelcome />
      <Footer />
    </main>
  );
}
