import About from "@/components/About";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialDemo";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="min-h-screen  text-neutral-300">
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <AnimatedTestimonialsDemo/>
      <Contact/>  
    </main>
  );
}
