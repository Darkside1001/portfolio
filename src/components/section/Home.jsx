

export const Home = () => {
    return (
        <section 
        
        id="Home"
        className="min-h-screen flex items-center relative" 
        >
              
            <div className="text-center z-6 px-100">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500/10 to-cyan-400 bg-clip-text text-transparent leading-right" >
                    Hello, I'm Isaac
                </h1> 
                <p className="text-2xl md:text-3xl text-gray-600 mb-10" >
                Etudiant en SLAM , passionné par le développement et toujours en quête de nouveaux défis techniques.
               </p>
               <div className="flex justify-center space -x-4">
                <a href="#Projects"
                className="bg-blue-500/10 text-white py-3 px-6 rouned font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-0_0_15px-rgba(59, 130, 246, 0.2)"
                
                >
                     view projects
                </a>
                <a href="#Contact"
                className=" border-blue-500/50 text-blue-500/ py-4 px-6 rounded font-medium transition-all duration-300
                 hover:-translate-y-0.5 hover:shadow-[0_0_19px-rgba(59, 130, 246, 0.9)]hover:-bg-blue-500/10"
                
                >
                      contact Me
                </a>

               </div>
            </div>
         
            </section>
            );
        }
