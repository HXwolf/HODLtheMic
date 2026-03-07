'use client';

import Link from 'next/link';

export default function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        let headerHeight = 140;
        if (targetId === 'about') {
          headerHeight = 80;
        } else if (targetId === 'artists') {
          headerHeight = 100;
        }
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
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-black">🎤</span>
                </div>
              </div>
              <span className="text-xl font-bold text-yellow-500 font-['Orbitron'] relative">
                <em>HODL the Mic</em>
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-70"
                  style={{
                    animation: 'glowMove 3s ease-in-out infinite',
                    filter: 'drop-shadow(0 0 8px rgb(217 70 239))'
                  }}
                ></span>
              </span>
            </div>
            <p className="text-gray-400 text-sm" suppressHydrationWarning={true}>
              Bridging Hip Hop culture with Web3 technology for a more connected and empowered music community.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Project</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/#about" onClick={(e) => handleAnchorClick(e, '/#about')} className="hover:text-yellow-500 transition-colors cursor-pointer">About</a></li>
              <li><a href="/#artists" onClick={(e) => handleAnchorClick(e, '/#artists')} className="hover:text-yellow-500 transition-colors cursor-pointer">Artists</a></li>
              <li><a href="/#tour" onClick={(e) => handleAnchorClick(e, '/#tour')} className="hover:text-yellow-500 transition-colors cursor-pointer">Tour Dates</a></li>
              <li><a href="/#nft" onClick={(e) => handleAnchorClick(e, '/#nft')} className="hover:text-yellow-500 transition-colors cursor-pointer">Digital Collectibles</a></li>
              <li><Link href="/litepaper#roadmap" className="hover:text-yellow-500 transition-colors cursor-pointer">Roadmap</Link></li>
              <li><a href="/#sponsors" onClick={(e) => handleAnchorClick(e, '/#sponsors')} className="hover:text-yellow-500 transition-colors cursor-pointer">Sponsors</a></li>
              <li><Link href="/litepaper" className="hover:text-yellow-500 transition-colors cursor-pointer">Litepaper</Link></li>
              <li><Link href="/purchase-info" className="hover:text-yellow-500 transition-colors cursor-pointer">Purchase Info</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a 
                href="https://x.com/HODLtheMic_TOUR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-twitter-x-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/hodlthemic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-instagram-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
              <a 
                href="https://www.youtube.com/@HODLtheMIC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-youtube-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
              <a 
                href="https://www.tiktok.com/@hodlthemic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-tiktok-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2026 <em className="text-yellow-500">HODL the Mic</em>. All rights reserved. FreshNeverStale Productions</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/legal" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/legal" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors cursor-pointer">Terms of Service</Link>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">Hip-Hop Music - Hip Hop Culture - HipHop Spirit</p>
          <div className="mt-4">
            <a 
              href="#top" 
              className="inline-block cursor-pointer hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/21a01fe2db88f9fb9ca9e19b84048b55.png" 
                alt="HODL the Mic Logo" 
                className="h-16 mx-auto"
              />
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes glowMove {
          0%, 100% {
            transform: translateX(-100%);
            opacity: 0.7;
          }
          50% {
            transform: translateX(100%);
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
}
