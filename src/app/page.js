import Image from "next/image";
import Navbar from "./components/Navbar";
import TopDeals from "./components/topDeals";
import Brands from "./components/brands";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-slate-950 to-slate-800">
      <Navbar />
      <TopDeals />
      <Brands />
    </main>
  );
}
