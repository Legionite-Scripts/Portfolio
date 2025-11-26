import { useState } from 'react';
import { Reveal } from './Reveal';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from './Icons';
import { callGemini } from '../utils/gemini';

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [isPolishing, setIsPolishing] = useState(false);

  const handlePolish = async () => {
    if (!message.trim()) return;
    setIsPolishing(true);
    
    const prompt = `Rewrite the following message sent to a developer's contact form to be more professional, polite, and concise, while maintaining the original intent. Only return the rewritten text, nothing else. Message: "${message}"`;
    
    try {
      const polished = await callGemini(prompt);
      setMessage(polished);
    } catch (e) {
      console.error("Failed to polish");
    }
    setIsPolishing(false);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-surface rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-primary text-bg flex flex-col justify-between">
                <div>
                  <h2 className="font-marker text-4xl mb-4">Let's <br/>Connect</h2>
                  <p className="font-medium opacity-90 mb-8">
                    Have a project in mind or just want to say hi? I'm currently open to new opportunities.
                  </p>
                </div>
                <div className="space-y-4">
                  <a href="mailto:contact@legionite.dev" className="flex items-center gap-3 font-bold hover:opacity-75 transition-opacity">
                    <MailIcon /> contact@legionite.dev
                  </a>
                  <div className="flex gap-4 pt-4">
                    <a href="#" className="p-2 bg-bg/10 rounded-full hover:bg-bg hover:text-primary transition-all">
                      <GithubIcon />
                    </a>
                    <a href="#" className="p-2 bg-bg/10 rounded-full hover:bg-bg hover:text-primary transition-all">
                      <TwitterIcon />
                    </a>
                    <a href="#" className="p-2 bg-bg/10 rounded-full hover:bg-bg hover:text-primary transition-all">
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 bg-bg">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-bold text-muted mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-muted mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-surface border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-bold text-muted">Message</label>
                      <button 
                        type="button"
                        onClick={handlePolish}
                        disabled={isPolishing || !message}
                        className="text-xs flex items-center gap-1 text-primary hover:text-white transition-colors disabled:opacity-50"
                      >
                        {isPolishing ? "Polishing..." : "✨ Polish with AI"}
                      </button>
                    </div>
                    <textarea 
                      rows="4" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-surface border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Tell me about your project... (Try typing something rough and hitting 'Polish with AI'!)"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary text-bg font-bold py-3 rounded hover:bg-white transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};