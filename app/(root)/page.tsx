import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contacts/>  
    </>
  );
}
