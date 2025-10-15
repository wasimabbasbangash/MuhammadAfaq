import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Areas from "@/components/Areas";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Areas />
        <Process />
        <Testimonials />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
