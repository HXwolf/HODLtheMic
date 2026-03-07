export default function HeroSection() {
  // Handle smooth scrolling with proper offset
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 140;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <style jsx>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
        .hex-grid {
          background-size: 120px 120px;
          background-image: 
            repeating-linear-gradient(60deg, rgba(79, 70, 229, 0.15) 0px, transparent 2px),
            repeating-linear-gradient(-60deg, rgba(236, 72, 153, 0.15) 0px, transparent 2px);
          animation: hexGridMove 20s linear infinite;
        }
        @keyframes hexGridMove {
          0% { background-position: 0 0; }
          100% { background-position: 120px 120px; }
        }
      `}</style>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80">
          <div className="absolute inset-0 overflow-hidden">
            <div className="hex-grid absolute inset-0"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8 floating-animation">
            <h1 
              className="text-6xl md:text-8xl font-black font-['Orbitron'] mb-4 relative animate-glow"
              style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              HODL THE MIC
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 typing-animation" suppressHydrationWarning={true}>
              Where HIP HOP Meets BLOCKCHAIN Revolution
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-button whitespace-nowrap hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
              Join Community
            </a>
            <a href="#tour" onClick={(e) => handleAnchorClick(e, '#tour')} className="px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-button whitespace-nowrap hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
              Follow Tour
            </a>
            <a href="/litepaper" className="px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-button whitespace-nowrap hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
              Read Litepaper
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://x.com/HODLtheMic_TOUR" 
              target="_blank" 
              className="hexagon w-12 h-12 bg-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/40 transition-all cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-twitter-x-line text-yellow-500"></i>
              </div>
            </a>
            <a 
              href="https://www.instagram.com/hodlthemic/" 
              target="_blank" 
              className="hexagon w-12 h-12 bg-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/40 transition-all cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-instagram-line text-yellow-500"></i>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/@HODLtheMIC" 
              target="_blank" 
              className="hexagon w-12 h-12 bg-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/40 transition-all cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-youtube-line text-yellow-500"></i>
              </div>
            </a>
            <a 
              href="https://www.tiktok.com/@hodlthemic" 
              target="_blank" 
              className="hexagon w-12 h-12 bg-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/40 transition-all cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-tiktok-line text-yellow-500"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
