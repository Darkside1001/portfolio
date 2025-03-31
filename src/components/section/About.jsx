

export const About = () => {
    const frontendSkills = [
        "React",
        "Vue",
        "TypeScript",
        "Tailwindcss",
        "Html",
    ];
    const backendSkills = [  "Node.js","Python","AWS","MongoDB","PHP", ];



    return (
        <section
         id="About"
         className="min-h-screens flex items-center justify-center py-40"
        >
    
            <div className="text-center z-6 px-50">
                <h2 className="text-5xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500/10 to-cyan-400 bg-clip-text text-transparent leading-right">
            {" "} 
             About  Me
                </h2>
                <div className="rounded-xl p-8 border-white/5 border hover:-translate-y-1 transition-all">
                    <p className="to-cyan-600 mb-0">
                    Encours de spécialisé dans la création d’applications web performantes et de solutions innovantes. Toujours en quête de nouvelles technologies pour concevoir des expériences optimisées afin de répondre aux besoins de mes clients.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blue-500/20
                                                     hover:shadow-[à-0_2px_8px_rgba(59,130,2246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                    ))}
                                    </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">backendSkills</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blue-500/20
                                                     hover:shadow-[à-0_2px_8px_rgba(59,130,2246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                    ))}
                                    </div>
                            </div>


                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/5 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Akalis college de Paris </strong>(2023-2024)
                            </li>
                            <li>
                                <strong>Estiam Paris</strong>(2024-2025)
                            </li>
                            <li>Structures de données, Développement web, Informatique en cloud et Cybersécurité.</li>
                            
                        </ul>

                         </div>
                         <div className="p-6 rounded-xl border-white/5 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                               <li> Apprentice develloper at Atelier image collée <strong>(2023-2024)</strong>  
                               </li>

                                <li> <strong> Apprentice devellopper at 42C </strong>(2024-2025)</li>

                                <li>Développement et maintenance de microservices pour des solutions basées sur le cloud. </li>

                            </div>
                        </div>

                         </div>
                    
                    
                    


                    </div>


                </div>
                
            
            

        </section>
         )
         }
     
