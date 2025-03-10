import { useState } from 'react';
import './App.css'
import "./index.css";
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
function App() {
  const [isLoaded,setIsLoaded]=useState(false);
  const [menuOpen,setMenu]=useState(false)
  

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}


      <div 
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
        
     
    >
      
      <Navbar menuOpen={menuOpen} setMenu={setMenu} />
      <MobileMenu menuOpen={menuOpen} setMenu={setMenu} />
      <Home />
      <About />
     
    </div>

    </>
  );
}

export default App;
