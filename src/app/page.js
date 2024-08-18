import Navbar from "./components/Navbar";
import TopDeals from "./components/topDeals";
import Brands from "./components/brands";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-950 to-slate-800 text-[#E2DAD6]">
      <Navbar />
      <TopDeals />
      <Brands />
      <Footer />
    </main>
  );
}
