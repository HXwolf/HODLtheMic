'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      
      // If not on homepage, navigate to homepage first
      if (pathname !== '/') {
        router.push(`/${href}`);
        return;
      }
      
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
    setIsMenuOpen(false);
  };

  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 flex items-center justify-center"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                  <span className="text-black text-sm md:text-lg">🎤</span>
                </div>
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-yellow-500 font-['Orbitron']"><em>HODL the Mic</em></h1>
                <p className="text-xs text-gray-300 hidden md:block">Hip Hop for Web3 and Blockchain Understanding</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <span className="text-white">Loading...</span>
            </div>

            <button className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
              <i className="ri-menu-line text-white text-xl"></i>
            </button>
          </div>
        </nav>
        
        <div className="bg-black/50 py-2 border-t border-gray-800">
          <div className="container mx-auto px-4 flex justify-center">
            <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/b2e27959907f0c4bacf59f74448cc9d8.png" 
                alt="HODL the Mic Logo" 
                className="h-12 md:h-16"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <style jsx>{`
        .animated-underline {
          position: relative;
        }
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #c026d3 50%, transparent 100%);
          animation: glowMove 3s ease-in-out infinite;
        }
        @keyframes glowMove {
          0%, 100% {
            transform: translateX(-100%);
            opacity: 0.7;
          }
          50% {
            transform: translateX(100%);
            opacity: 1;
            box-shadow: 0 0 10px #c026d3, 0 0 20px #c026d3;
          }
        }
      `}</style>
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 flex items-center justify-center"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                  <span className="text-black text-sm md:text-lg">🎤</span>
                </div>
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-yellow-500 font-['Orbitron'] animated-underline" suppressHydrationWarning={true}><em>HODL the Mic</em></h1>
                <p className="text-xs text-gray-300 hidden md:block" suppressHydrationWarning={true}>Hip Hop for Web3 and Blockchain Understanding</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/#about" onClick={(e) => handleAnchorClick(e, '/#about')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">About</a>
              <a href="/#artists" onClick={(e) => handleAnchorClick(e, '/#artists')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Artists</a>
              <a href="/#tour" onClick={(e) => handleAnchorClick(e, '/#tour')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Tour</a>
              <a href="/#web3" onClick={(e) => handleAnchorClick(e, '/#web3')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Web3</a>
              <a href="/#contact" onClick={(e) => handleAnchorClick(e, '/#contact')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Contact</a>
            </div>

            <button 
              className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-white text-xl"></i>
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="lg-hidden mt-4 pb-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4 mt-4">
                <a href="/#about" onClick={(e) => handleAnchorClick(e, '/#about')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">About</a>
                <a href="/#artists" onClick={(e) => handleAnchorClick(e, '/#artists')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Artists</a>
                <a href="/#tour" onClick={(e) => handleAnchorClick(e, '/#tour')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Tour</a>
                <a href="/#web3" onClick={(e) => handleAnchorClick(e, '/#web3')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Web3</a>
                <a href="/#contact" onClick={(e) => handleAnchorClick(e, '/#contact')} className="text-white hover:text-yellow-500 transition-colors cursor-pointer">Contact</a>
              </div>
            </div>
          )}
        </nav>
        
        <div className="bg-black/50 py-2 border-t border-gray-800">
          <div className="container mx-auto px-4 flex justify-center">
            <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/b2e27959907f0c4bacf59f74448cc9d8.png" 
                alt="HODL the Mic Logo" 
                className="h-12 md:h-16"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}