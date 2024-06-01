import CTA from "../components/Landing/CTA";
import FAQ from "../components/Landing/FAQ/FAQsection";
import Hero from "../components/Landing/hero";
import NavbarLanding from "../components/Landing/navbar";

export default function Home() {
  return (
    <main className="">
      <NavbarLanding />
      <Hero />
      <FAQ />
      <CTA />
    </main>
  );
}
