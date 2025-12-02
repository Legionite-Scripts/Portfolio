import { useEffect } from 'react'; // <-- 1. Import useEffect
import { NavBar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {

  // 2. Add the useEffect hook to run once on component mount
  useEffect(() => {
    // Force the window to scroll to the top (0, 0)
    window.scrollTo(0, 0);

    // Optional: Explicitly tell the browser not to restore scroll position 
    // when the user hits refresh.
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []); // The empty dependency array [] ensures this runs only once after the initial render

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;