export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900 urban-texture relative overflow-hidden">
      <style jsx>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
        .hexagon-border {
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 mt-8">
            <h2 className="text-4xl font-bold text-yellow-500 font-['Orbitron']">About the Movement</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              <em className="text-yellow-500 font-semibold">HODL the Mic</em> is a groundbreaking documentary and tour project that bridges the gap between Hip Hop culture and Web3 technology. We're bringing together legendary artists, blockchain innovators, and the Web3 ecosystem to create something unprecedented.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to educate, inspire, and unite communities through the universal language of music while introducing the transformative potential of blockchain technology. From the streets to the blockchain, we're documenting this cultural revolution.
            </p>
            
            <div className="mt-12 space-y-6">
              <h3 className="text-3xl font-bold text-yellow-500 font-['Orbitron']">About the Producer</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                FreshNeverStale Productions is an entertainment platform rooted in Underground Hip Hop Culture, music and community.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From raw beats and rhymes into a full creative production house for music, film, art, events, and collaborations. Serving as both a label and production home base for all FNS Hip Hop creations for almost 30 years.
              </p>
              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Produced by</span>
                  <a 
                    href="https://freshneverstale.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    FreshNeverStale
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="hexagon-border hexagon aspect-square bg-gradient-to-r from-yellow-400 to-yellow-600 p-1">
              <div 
                className="hexagon w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://readdy.ai/api/search-image?query=Vibrant%20graffiti-style%20artwork%20featuring%20a%20energetic%20hip-hop%20crowd%20with%20raised%20hands%20and%20microphones%2C%20green%20cryptocurrency%20chart%20candles%20rising%20in%20the%20background%2C%20hexagon-shaped%20coins%20floating%20through%20the%20scene%2C%20urban%20street%20art%20aesthetic%20with%20neon%20green%20and%20gold%20accents%2C%20high%20energy%20concert%20atmosphere%2C%20blockchain%20symbols%20integrated%20into%20graffiti%20design%2C%20modern%20digital%20art%20style&width=600&height=600&seq=hodl-about-graffiti-1&orientation=squarish)'
                }}
              ></div>
            </div>
            <div className="absolute -bottom-4 -right-4 hexagon w-24 h-24 bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="ri-film-line text-yellow-500 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  <div class="substack-post-embed"><p lang="en">HODLtheMic - Issue #5 by HODLtheMic</p><p>Hip-Hop. Web3. Creator tools. BlockChainMicCheck</p><a data-post-link href="https://hodlthemic.substack.com/p/hodlthemic-issue-5">Read on Substack</a></div><script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>
  
}
