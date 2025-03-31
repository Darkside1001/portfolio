import { useEffect } from "react";
import cvisaac from "../assets/cvisaac.jpg";


export const Navbar = ({ menuOpen, setMenuOpen,}) => {
    useEffect (() => {
        document.body.style.overflow = menuOpen ? 'hidden' : "";
        }, [menuOpen]);
       
    return (     
        
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)]backdrop-blur-lg border-b border-white/5 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href={cvisaac}  target="_blank" rel="noopener noreferrer">
                
                   {""}
                    Isaac<span className="text-blue-500/45 ">.CV
                    
                    
                    
                    
                    </span>{""}
                    
                </a>

                <div 
                className=" w-7 h-5 relative cursor-pointer z-40 md:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
                > 
                  &#9776; 

                </div>

                <div  className="hidden md:flex items-center space-x-8">
                    <a 
                    href="#Home"
                    className="text-gray-100 hove :tex-white tansition-colors "
                    >
                       <span className="text-blue-500/70">home</span>{""} 
                        
                    </a>
                    <a 
                    href="#About"
                    className="text-gray-300 hove :tex-white tansition-colors "
                    >
                       <span className="text-blue-500/70">about</span>{""} {""} 
                        
                    </a>
                    <a 
                    href="#Projects"
                    className="text-gray-300 hove :tex-white tansition-colors "
                    >
                        <span className="text-blue-500/70">projects</span>{""} {""} 
                        
                    </a>
                    <a 
                    href="#Contact"
                    className="text-gray-300 hove :tex-white tansition-colors "
                    >
                        <span className="text-blue-500/70">contact</span>{""} {""} 
                        
                    </a>
                    <a 
                    href={cvisaac}
                    className="text-gray-300 hove :tex-white tansition-colors "
                    >
                        <span className="text-blue-500/70">veille</span>{""} {""} 
                        
                    </a>
                  


                </div>

            </div>

        </div>
    </nav>
    );
};
