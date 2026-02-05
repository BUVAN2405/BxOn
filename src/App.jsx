import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Process from './components/sections/Process';
import FeaturedProjects from './components/sections/FeaturedProjects';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-brand-500 selection:text-white">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <FeaturedProjects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
