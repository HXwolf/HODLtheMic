'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [selectedRole, setSelectedRole] = useState('Developer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('role', selectedRole);
      formDataToSubmit.append('message', formData.message);
      
      const response = await fetch('https://readdy.ai/api/form/d3epfq1evi82osegr1ag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setSelectedRole('Developer');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
        .hex-grid-overlay {
          position: absolute;
          inset: -50%;
          background-image:
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M50 0L93.3 25V75L50 100L6.7 75V25L50 0z'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgba(255,255,255,0.02)' d='M30 0L56 15V45L30 60L4 45V15L30 0z'/%3E%3C/svg%3E");
          background-size: 100% 100%, 120px 120px, 80px 80px;
          background-position: center, 0 0, 40px 40px;
          animation: hexMove 30s linear infinite;
          transform: rotate(30deg);
        }
        @keyframes hexMove {
          0% {
            background-position: center, 0 0, 40px 40px;
          }
          100% {
            background-position: center, 120px 120px, 160px 160px;
          }
        }
        .floating-hex {
          position: absolute;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }
        .floating-hex:nth-child(1) {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
          width: 60px;
          height: 60px;
        }
        .floating-hex:nth-child(2) {
          top: 20%;
          right: 10%;
          animation-delay: 1s;
          width: 40px;
          height: 40px;
        }
        .floating-hex:nth-child(3) {
          top: 60%;
          left: 8%;
          animation-delay: 2s;
          width: 50px;
          height: 50px;
        }
        .floating-hex:nth-child(4) {
          bottom: 20%;
          right: 15%;
          animation-delay: 3s;
          width: 45px;
          height: 45px;
        }
        .floating-hex:nth-child(5) {
          top: 40%;
          left: 15%;
          animation-delay: 4s;
          width: 35px;
          height: 35px;
        }
        .floating-hex:nth-child(6) {
          bottom: 40%;
          right: 8%;
          animation-delay: 5s;
          width: 55px;
          height: 55px;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) rotate(270deg);
          }
        }
      `}</style>
      
      <section id="contact" className="py-20 gradient-bg-hex relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hex-grid-overlay"></div>
          
          <div className="floating-hex hexagon bg-gradient-to-br from-pink-500 to-orange-500"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-purple-500 to-pink-500"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-orange-500 to-red-500"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-pink-600 to-orange-400"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-purple-600 to-pink-400"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-orange-600 to-pink-500"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <img 
                src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/47093c77aa7cbd5e4cc3439a9e7a8075.png" 
                alt="HODL the Mic Logo" 
                className="h-24 mx-auto mb-8"
              />
              <h2 className="text-4xl font-bold text-white font-['Orbitron'] mb-4">Join the Revolution</h2>
              <p className="text-xl text-orange-100">Connect with us to collaborate, contribute, or just vibe with the community</p>
            </div>
            
            <div className="text-center mt-20">
              <h1 
                className="text-6xl md:text-8xl font-black font-['Orbitron'] mb-4 relative animate-glow"
                style={{
                  background: 'linear-gradient(135deg, #FF00FF 0%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                HODL THE MIC
              </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get Involved</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="hexagon w-12 h-12 bg-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-code-line text-yellow-500"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Developers</h4>
                        <p className="text-orange-100 text-sm">Build Web3 tools for the music industry</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="hexagon w-12 h-12 bg-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-mic-line text-yellow-500"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Artists</h4>
                        <p className="text-orange-100 text-sm">Join our tour and documentary project</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="hexagon w-12 h-12 bg-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-heart-line text-yellow-500"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Fans</h4>
                        <p className="text-orange-100 text-sm">Support the movement and learn Web3</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="hexagon w-12 h-12 bg-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-funds-line text-yellow-500"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Funding</h4>
                        <p className="text-orange-100 text-sm">Contribute to the vision</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="hexagon w-12 h-12 bg-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-map-pin-user-line text-yellow-500"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Promoter</h4>
                        <p className="text-orange-100 text-sm">Bring our show to your city</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <form className="space-y-6" onSubmit={handleSubmit} data-readdy-form id="contact">
                  <div>
                    <label className="block text-white font-medium mb-2">I'm interested as a:</label>
                    <div className="flex flex-wrap gap-3">
                      {['Developer', 'Artist', 'Fan', 'Contributor', 'Promoter'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => handleRoleSelect(role)}
                          className={`px-4 py-2 border rounded-button whitespace-nowrap transition-all cursor-pointer ${
                            selectedRole === role
                              ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500'
                              : 'bg-white/10 text-white border-white/20 hover:bg-yellow-500 hover:text-black hover:border-yellow-500'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-yellow-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-yellow-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your interest in HODL the Mic..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-yellow-500 focus:outline-none resize-none"
                      required
                    />
                    <div className="text-right text-sm text-gray-400 mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="text-green-400 text-sm">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="text-red-400 text-sm">
                      Failed to send message. Please try again.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className="w-full px-8 py-4 bg-yellow-500 text-black font-bold rounded-button whitespace-nowrap hover:bg-yellow-400 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
