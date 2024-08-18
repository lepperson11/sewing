import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-950 to-slate-800 text-[#E2DAD6]">
      <Navbar />
      <ContactUs />
      <Footer />
    </main>
  );
}
