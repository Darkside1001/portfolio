import fishesynthese from "/src/assets/fishesynthese.jpg";



export const Projects = () => {
    return (
        <section
        id="Projects"
        className="min-h- screen flex flex-col items-center justify-center py-40"
         >
             
            <div className="text-center z-4 px-50">
                <h2 className="text-5xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500/10 to-cyan-400 bg-clip-text text-transparent leading-right">Featured projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/5 hover:-transalte-y-1 hover:boder-bllue-500/30 hover:shadow-[à-0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        <h3 className="text-xl font-bold mb-2"> Quiz Platform</h3>
                        <p className="text-grya-400 mb-4">
                            write a somthings about quizz platform
                        </p>
                        <div>
                            {["React","Node.js","AWS","Docker"].map((tech,key) => (
                               <span 
                               key={key}
                               className="bg-blue-500/10 text-blue-500 py-1
                                          px-3 rounded-full text-sm 
                                          hover:bg-blue-500/20
                                          hover:shadow-[à-0_2px_8px_rgba(59,130,246,0.2)] transition-all
                               ">
                                   {tech}
                               </span>
                            ))}
                        </div>
                        <div className="text justify-between items-center">
                            <a href="#cvisaac.jpg" 
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                {" "}
                                View Project  🔜{" "}
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl border border-white/5 hover:-transalte-y-1 hover:boder-bllue-500/30 hover:shadow-[à-0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        <h3 className="text-xl font-bold mb-2">DOcs</h3>
                        <p className="text-grya-400 mb-4">
                            Documentations et code.
                        </p>
                        <div>
                            {["React","Node.js","Html","Css",""].map((tech,key) => (
                               <span 
                               key={key}
                               className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/10 hover:shadow-[à-0_2px_8px_rgba(59,130,246,0.2)] transition-all
                               ">
                                   {tech}
                               </span>
                            ))}
                        </div>
                        <div className="text justify-between items-center">
                            <a href="#" 
                            className="text-blue-400 hover:text-blue-300 transition-colors my-6"
                            >
                                {" "}
                                View Project  🔜{" "}
                            </a>
                        </div>
                    </div>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl border border-white/5 hover:-transalte-y-1 hover:boder-bllue-500/30 hover:shadow-[à-0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        <h3 className="text-xl font-bold mb-2"> Bibliotheque</h3>
                        <p className="text-grya-400 mb-4">
                            write a somthings about quizz platform
                        </p>
                        <div>
                            {["html", "js", "css",].map((tech,key) => (
                               <span 
                               key={key}
                               className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/10 hover:shadow-[à-0_2px_8px_rgba(59,130,246,0.2)] transition-all
                               ">
                                   {tech}
                               </span>
                            ))}
                        </div>
                        <div className="text justify-between items-center">
                            <a href="#" 
                            className="text-blue-400 hover:text-blue-300 transition-colors my-6"
                            >
                                {" "}
                                View Project 🔜{" "}
                            </a>
                        </div>
                    </div>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl border border-white/5 hover:-transalte-y-1 hover:boder-bllue-500/30 hover:shadow-[à-0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        <h3 className="text-xl font-bold mb-2"> E/5</h3>
                        <p className="text-grya-400 mb-4">
                            write a somthings about quizz platform
                        </p>
                        <div>
                            {["React","Node.js","AWS","Docker"].map((tech,key) => (
                               <span 
                               key={key}
                               className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/10 hover:shadow-[à-0_2px_8px_rgba(59,130,246,0.2)] transition-all
                               ">
                                   {tech}
                               </span>
                            ))}
                        </div>
                        <div className="text justify-between items-center">
                            <a href={fishesynthese} 
                            className="text-blue-400 hover:text-blue-300 transition-colors my-6"
                            >
                                {" "}
                                View Project  🔜{" "}
                            </a>
                        </div>
                    </div>
                    
                    

                    
                     </div> 
                </div>
                




            </div>
             </section>
            
    );
};
