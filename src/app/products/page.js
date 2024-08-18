import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-950 to-slate-800">
      <Navbar />
      <ProductSection />
      <Footer />
    </main>
  );
}
