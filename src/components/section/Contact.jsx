import emailjs from 'emailjs-com';
import { useState } from 'react';



export const Contact = () => {
    const [formData, setFormData] = useState({ 
        name:"",
        email:"",
        message:"",


    })



    const SERVICE_ID = "service_portfolio";
    const TEMPLATE_ID = "template_portfolio";
    const PUBLIC_KEY = "8iNrwzdWgWSvc5RH_";

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs
        .sendForm( SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY )
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({name:"", email:"", message:""});
        }).catch(()=> alert("Oops something went wrong! Please try again"));

    };


    return (
        <section 
        id="Contact"
        className="min-h-screens flex items-center justify-center py-40"
        >
            <div className="text-center z-4 px-50" >
                <h2 className="text-5xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500/5 to-cyan-400 bg-clip-text text-transparent leading-right"> Get in touch</h2>

                <form className="space-y-1" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        className="w-full bg-white/10 border border-white/2 rounded px-2  py-3 text-white transition focus:outline-none focus:border-blue-500/5 focus:bg-blue-500/20"
                        placeholder="Name..." 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        
                        />
                            
                    </div>
                    <div className="relative">
                        <input type="text" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        className="w-full bg-white/10 border border-white/2 rounded px-2  py-4 text-white transition focus:outline-none focus:border-blue-500/5 focus:bg-blue-500/20"
                        placeholder="Exemple@email.com..." 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        
                        />
                            
                    </div>
                    
                    <div className="relative">
                        <textarea
                        
                        id="message" 
                        name="message" 
                        required
                        rows={5}
                        value={formData.message}
                        className="w-full bg-white/5 border border-white/10 rounded px-2  py-8 text-white transition focus:outline-none focus:border-blue-500/2 focus:bg-blue-500/10"
                        placeholder="Message..." 
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        
                        />
                            
                    </div>
                    <button type="submit" className="bg-blue-500/10 text-white py-3 px-6 rouned font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-0_0_15px-rgba(59, 130, 246, 0.2) " > <span className="text-blue-500/80">Send message</span> </button>
                    
               </form>

              
            </div>
            

            

            



        </section>





    )
}
