
'use client';

export default function NFTSection() {
  return (
    <>
      <style jsx>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
        
        .glitch {
          position: relative;
          animation: glitch-1 2s infinite;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-2 3s infinite;
          color: #FFD700;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-3 4s infinite;
          color: #FF00FF;
          z-index: -2;
        }
        
        @keyframes glitch-1 {
          0%, 90%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
        
        @keyframes glitch-2 {
          0%, 90%, 100% {
            transform: translate(0);
          }
          10% {
            transform: translate(-1px, 1px);
          }
          30% {
            transform: translate(1px, -1px);
          }
          50% {
            transform: translate(-1px, -1px);
          }
          70% {
            transform: translate(1px, 1px);
          }
        }
        
        @keyframes glitch-3 {
          0%, 90%, 100% {
            transform: translate(0);
          }
          15% {
            transform: translate(1px, -1px);
          }
          35% {
            transform: translate(-1px, 1px);
          }
          55% {
            transform: translate(1px, 1px);
          }
          75% {
            transform: translate(-1px, -1px);
          }
        }
        
        .floating-hex {
          position: absolute;
          animation: floatFade 8s ease-in-out infinite;
        }
        
        .floating-hex:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
          width: 80px;
          height: 80px;
        }
        
        .floating-hex:nth-child(2) {
          top: 20%;
          right: 15%;
          animation-delay: 2s;
          width: 60px;
          height: 60px;
        }
        
        .floating-hex:nth-child(3) {
          top: 50%;
          left: 5%;
          animation-delay: 4s;
          width: 70px;
          height: 70px;
        }
        
        .floating-hex:nth-child(4) {
          bottom: 25%;
          right: 8%;
          animation-delay: 6s;
          width: 90px;
          height: 90px;
        }
        
        .floating-hex:nth-child(5) {
          top: 35%;
          right: 40%;
          animation-delay: 1s;
          width: 50px;
          height: 50px;
        }
        
        .floating-hex:nth-child(6) {
          bottom: 40%;
          left: 20%;
          animation-delay: 3s;
          width: 65px;
          height: 65px;
        }
        
        .floating-hex:nth-child(7) {
          top: 60%;
          right: 25%;
          animation-delay: 5s;
          width: 75px;
          height: 75px;
        }
        
        .floating-hex:nth-child(8) {
          bottom: 15%;
          left: 35%;
          animation-delay: 7s;
          width: 55px;
          height: 55px;
        }
        
        @keyframes floatFade {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-45px) rotate(270deg);
            opacity: 0.5;
          }
        }
        
        .digital-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        .digital-grid-purple {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMovePurple 25s linear infinite;
          transform: translateX(-25px);
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes gridMovePurple {
          0% {
            transform: translate(-25px, 0);
          }
          100% {
            transform: translate(25px, 50px);
          }
        }
      `}</style>
      
      <section id="nft" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="digital-grid"></div>
          <div className="digital-grid-purple"></div>
          
          <div className="floating-hex hexagon bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-60"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-purple-500 to-purple-700 opacity-60"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-yellow-500 to-orange-500 opacity-60"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-purple-600 to-pink-500 opacity-60"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-60"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-purple-400 to-purple-600 opacity-60"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-yellow-600 to-orange-400 opacity-60"></div>
          <div className="floating-hex hexagon bg-gradient-to-br from-purple-500 to-pink-600 opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 
              className="text-5xl font-bold text-yellow-500 font-['Orbitron'] mb-6 glitch"
              data-text="Digital Collectibles"
            >
              Digital Collectibles
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed" suppressHydrationWarning={true}>
              Own a piece of Hip Hop history as we bridge music and blockchain technology.
              <br />
              Our exclusive collection will feature rare artwork, behind-the-scenes content, and exclusive access to future events and releases.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-yellow-500/20">
              <div className="text-center space-y-6">
                <div className="hexagon w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <i className="ri-image-line text-black text-4xl"></i>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white font-['Orbitron']">Coming Soon</h3>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Exclusive artwork, behind-the-scenes moments, and digital collectibles
                  <br />
                  in promotion of, and from, the documentary and tour.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center space-y-3">
                    <div className="hexagon w-16 h-16 bg-yellow-500/20 mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-palette-line text-yellow-500 text-xl"></i>
                      </div>
                    </div>
                    <h4 className="font-semibold text-white">Exclusive Art</h4>
                    <p className="text-sm text-gray-400">Limited edition digital artwork</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="hexagon w-16 h-16 bg-purple-500/20 mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-film-line text-purple-400 text-xl"></i>
                      </div>
                    </div>
                    <h4 className="font-semibold text-white">Behind Scenes</h4>
                    <p className="text-sm text-gray-400">Exclusive documentary moments</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="hexagon w-16 h-16 bg-yellow-500/20 mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-trophy-line text-yellow-500 text-xl"></i>
                      </div>
                    </div>
                    <h4 className="font-semibold text-white">Collectibles</h4>
                    <p className="text-sm text-gray-400">Rare digital memorabilia</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/#contact"
                    className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-button whitespace-nowrap hover:bg-yellow-400 transition-all cursor-pointer"
                  >
                    Get Notified
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
