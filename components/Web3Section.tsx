export default function Web3Section() {
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
      `}</style>
      
      <section id="web3" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden" suppressHydrationWarning={true}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="hex-grid-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <img 
              src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/545e0d9e89ec31b6eb5ffd75138d01d4.png" 
              alt="PulseChain Logo" 
              className="h-16 mx-auto mb-6"
            />
            <h2 className="text-4xl font-bold text-white font-['Orbitron'] mb-4">Blockchain &amp; Web3 Education</h2>
            <p className="text-xl text-blue-100">Bridging music and blockchain for community empowerment</p>
            <p className="text-xl text-orange-100 mb-8" suppressHydrationWarning={true}>Be part of the Web3 x Hip Hop movement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="hexagon w-16 h-16 bg-yellow-500 mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-links-line text-black text-xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Blockchain Basics</h3>
              <p className="text-blue-100">
                Learn how blockchain technology works through hip-hop art and real-world examples making complex concepts accessible.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="hexagon w-16 h-16 bg-yellow-500 mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-pulse-line text-black text-xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">PulseChain Integration</h3>
              <p className="text-blue-100">
                Discover how PulseChain's fast, low-cost transactions are revolutionizing music distribution and fan engagement.
              </p>
              <div className="mt-4">
                <a 
                  href="https://pulsechain.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-blue-200 transition-colors cursor-pointer underline"
                >
                  PulseChain.com
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="hexagon w-16 h-16 bg-yellow-500 mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-community-line text-black text-xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Impact</h3>
              <p className="text-blue-100">
                See how Web3 technology empowers artists and fans to build stronger, more equitable music communities together.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-lg text-blue-100 leading-relaxed">
              <em className="text-yellow-500 font-semibold">HODL the Mic</em> is multichain-friendly. We support artists from every chain and build in various corners of the metaverse. We've chosen PulseChain as a core ecosystem to base from as it's DeFi system embodies many of the values we strive to showcase through culture and education.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
