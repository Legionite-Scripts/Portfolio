import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Reveal } from './Reveal';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from './Icons';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug log - Remove this after confirming it works
    console.log('Environment Check:', {
      serviceId,
      templateId,
      publicKey,
      allEnvVars: import.meta.env
    });

    // Check if environment variables are loaded
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing environment variables:', { serviceId, templateId, publicKey });
      setSubmitStatus('config_error');
      setIsSubmitting(false);
      return;
    }

    // Create the object that matches your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Samuel",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-surface rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Contact Info */}
              <div className="p-8 md:p-12 bg-primary text-bg flex flex-col justify-between">
                <div>
                  <h2 className="font-marker text-4xl mb-4">Let's <br/>Connect</h2>
                  <p className="font-medium opacity-90 mb-8">
                    Have a project in mind or just want to say hi? I'm currently open to new opportunities and collaborations.
                  </p>
                  
                  {/* Contact Details */}
                  <div className="space-y-4 mb-8">
                    <a 
                      href="mailto:samuelonwuka88@gmail.com" 
                      className="flex items-center gap-3 font-bold hover:opacity-75 transition-opacity group"
                    >
                      <MailIcon className="group-hover:scale-110 transition-transform" />
                      <span>samuelonwuka88@gmail.com</span>
                    </a>
                    
                    <a 
                      href="tel:+2349043683675" 
                      className="flex items-center gap-3 font-bold hover:opacity-75 transition-opacity group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>+234 904 368 3675</span>
                    </a>
                    
                    <div className="flex items-center gap-3 font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>Lagos, Nigeria 🇳🇬</span>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <p className="text-sm opacity-75 mb-3">Connect with me:</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/legionite-scripts" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-bg/10 rounded-full hover:bg-bg hover:text-primary transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                    <a 
                      href="https://twitter.com/TheLegionite" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-bg/10 rounded-full hover:bg-bg hover:text-primary transition-all hover:scale-110"
                      aria-label="Twitter"
                    >
                      <TwitterIcon />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/samuel-onwuka-825205263/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-bg/10 rounded-full hover:bg-bg hover:text-primary transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon />
                    </a>
                    <a 
                      href="https://wa.me/2349043683675" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-bg/10 rounded-full hover:bg-bg hover:text-primary transition-all hover:scale-110"
                      aria-label="WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Contact Form */}
              <div className="p-8 md:p-12 bg-bg">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-bold text-muted mb-2">Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Your Name" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-muted mb-2">Email *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors" 
                      placeholder="your.email@example.com" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-muted mb-2">Message *</label>
                    <textarea 
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors resize-none" 
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span className="text-sm font-semibold">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <span className="text-sm font-semibold">Oops! Something went wrong. Please try again.</span>
                    </div>
                  )}

                  {submitStatus === 'config_error' && (
                    <div className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 px-4 py-3 rounded flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                      <span className="text-sm font-semibold">Configuration Error: Environment variables not loaded. Check your .env file and restart the dev server.</span>
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-bg font-bold py-3 rounded hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <MailIcon />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted text-center mt-4">
                    Or email me directly at{' '}
                    <a href="mailto:samuelonwuka88@gmail.com" className="text-primary hover:underline">
                      samuelonwuka88@gmail.com
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};