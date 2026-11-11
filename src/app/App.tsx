import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Catalog } from "@/app/components/Catalog";
import { Gallery } from "@/app/components/Gallery";
import { HowToBook } from "@/app/components/HowToBook";
import { Booking } from "@/app/components/Booking";
import { Footer } from "@/app/components/Footer";
import { ContactProvider } from "@/app/components/ContactProvider";

export default function App() {
  return (
    <ContactProvider>
      <main className="min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-primary selection:text-white">
        <Header />
        <Hero />
        <About />
        <Catalog />
        {/*<Gallery />*/}
        <HowToBook />
        <Booking />
        <Footer />
      </main>
    </ContactProvider>
  );
}
