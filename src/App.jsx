import { useState } from 'react';
import './App.css'
import "./index.css";
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Projects } from './components/section/Projects';
import { Contact } from './components/section/Contact';
//import { NumPages } from './components/section/NumPages'
//import { image} from './src/image'
import VeilleTechnologique from './components/section/VeilleTechnologique';





function App() {
  const [isLoaded,setIsLoaded]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  const [afficherVeille, setAfficherVeille] = useState(false);
  const handleToggleVeille = () => {
    setAfficherVeille(!afficherVeille);
  };
  
  

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}


      <div 
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
      
        
     
    >
      
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />  
      <Contact />
     

    
    </div>

    <div className="text-center z-4 px-50">
      <button
        onClick={handleToggleVeille}
        className="text-5xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500/5 to-cyan-400 bg-clip-text text-transparent leading-right"
      >
        {afficherVeille ? "Masquer la veille" : "Afficher la veille technologique"}
      </button>

      {afficherVeille && (
        <div className="mt-8">
      <VeilleTechnologique />
        </div>
      )}
    </div>

    </>
  );
}

export default App;
