
export const Contact = () => {
    return (
        <section 
        id="Contact"
        className="min-h-screens flex items-center justify-center py-40"
        >
            <div className="text-center z-4 px-50" >
                <h2 className="text-5xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500/5 to-cyan-400 bg-clip-text text-transparent leading-right"> Get in touch</h2>

                <form className="space-y-1">
                    <div className="relative">
                        <input type="text" 
                        id="name" 
                        name="name" 
                        required className="w-full bg-white/10 border border-white/2 rounded px-2  py-3 text-white transition focus:outline-none focus:border-blue-500/5 focus:bg-blue-500/20"
                        placeholder="Name..." 
                        
                        />
                            
                    </div>
                    <div className="relative">
                        <input type="text" 
                        id="email" 
                        name="email" 
                        required className="w-full bg-white/10 border border-white/2 rounded px-2  py-4 text-white transition focus:outline-none focus:border-blue-500/5 focus:bg-blue-500/20"
                        placeholder="Exemple@email.com..." 
                        
                        />
                            
                    </div>
                    
                    <div className="relative">
                        <textarea
                        
                        id="message" 
                        name="message" 
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded px-2  py-8 text-white transition focus:outline-none focus:border-blue-500/2 focus:bg-blue-500/10"
                        placeholder="Message..." 
                        
                        />
                            
                    </div>
                    <button type="submit" className="bg-blue-500/10 text-white py-3 px-6 rouned font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-0_0_15px-rgba(59, 130, 246, 0.2) " > <span className="text-blue-500/80">Send message</span> </button>
                    
               </form>

              
            </div>
            

            

            



        </section>





    )
}
