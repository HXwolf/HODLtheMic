'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SponsorsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageRow2, setCurrentPageRow2] = useState(0);
  const [currentPageRow3, setCurrentPageRow3] = useState(0);

  const sponsorsPerPage = 6;
  const totalPages = 4;
  const sponsors = Array.from({ length: totalPages * sponsorsPerPage }, (_, i) => ({
    id: i + 1,
    page: Math.floor(i / sponsorsPerPage),
  }));

  const sponsorsPerPageRow1 = 3;
  const totalPagesRow1 = 4;
  const sponsorsRow1 = Array.from({ length: totalPagesRow1 * sponsorsPerPageRow1 }, (_, i) => ({
    id: i + 1,
    page: Math.floor(i / sponsorsPerPageRow1),
  }));

  const sponsorsPerPageRow2 = 4;
  const totalPagesRow2 = 4;
  const sponsorsRow2 = Array.from({ length: totalPagesRow2 * sponsorsPerPageRow2 }, (_, i) => ({
    id: i + 1,
    page: Math.floor(i / sponsorsPerPageRow2),
  }));

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextPageRow1 = () => {
    setCurrentPageRow1((prev) => (prev + 1) % totalPagesRow1);
  };

  const prevPageRow1 = () => {
    setCurrentPageRow1((prev) => (prev - 1 + totalPagesRow1) % totalPagesRow1);
  };

  const nextPageRow2 = () => {
    setCurrentPageRow2((prev) => (prev + 1) % totalPagesRow2);
  };

  const prevPageRow2 = () => {
    setCurrentPageRow2((prev) => (prev - 1 + totalPagesRow2) % totalPagesRow2);
  };

  const [currentPageRow1, setCurrentPageRow1] = useState(0);

  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 font-['Orbitron'] mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-400">
            Partnering with forward-thinking brands that support the fusion of music and Web3 technology
          </p>
        </div>
        
        {/* First Row - 3 Extra Large Hexagons */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevPageRow1}
              className="absolute left-0 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-yellow-500 text-2xl"></i>
            </button>
            
            <div className="overflow-hidden w-full max-w-6xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPageRow1 * 100}%)` }}
              >
                {Array.from({ length: totalPagesRow1 }, (_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-3 gap-12 justify-center">
                    {sponsorsRow1
                      .slice(pageIndex * sponsorsPerPageRow1, (pageIndex + 1) * sponsorsPerPageRow1)
                      .map((sponsor) => (
                        <div key={`sponsor-row1-${sponsor.id}`} className="group relative flex justify-center">
                          <div className="aspect-square w-48 bg-gradient-to-br from-yellow-400 to-yellow-600 p-1" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                            <div className="w-full h-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center relative cursor-pointer" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                              <div className="text-center">
                                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <i className="ri-building-line text-yellow-500 text-2xl"></i>
                                </div>
                                <p className="text-base text-gray-400">Coming Soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextPageRow1}
              className="absolute right-0 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-yellow-500 text-2xl"></i>
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPagesRow1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPageRow1(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === currentPageRow1 ? 'bg-yellow-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Second Row - 4 Large Hexagons */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevPageRow2}
              className="absolute left-0 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-yellow-500 text-2xl"></i>
            </button>
            
            <div className="overflow-hidden w-full max-w-6xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPageRow2 * 100}%)` }}
              >
                {Array.from({ length: totalPagesRow2 }, (_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-4 gap-8 justify-center">
                    {sponsorsRow2
                      .slice(pageIndex * sponsorsPerPageRow2, (pageIndex + 1) * sponsorsPerPageRow2)
                      .map((sponsor) => (
                        <div key={`sponsor-row2-${sponsor.id}`} className="group relative flex justify-center">
                          <div className="aspect-square w-40 bg-gradient-to-br from-yellow-400 to-yellow-600 p-1" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                            <div className="w-full h-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center relative cursor-pointer" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                              <div className="text-center">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <i className="ri-building-line text-yellow-500 text-xl"></i>
                                </div>
                                <p className="text-sm text-gray-400">Coming Soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextPageRow2}
              className="absolute right-0 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-yellow-500 text-2xl"></i>
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPagesRow2 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPageRow2(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === currentPageRow2 ? 'bg-yellow-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Third Row - Smaller Hexagons */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevPage}
              className="absolute left-0 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-yellow-500 text-2xl"></i>
            </button>
            
            <div className="overflow-hidden w-full max-w-6xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }, (_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-6 gap-6 justify-center">
                    {sponsors
                      .slice(pageIndex * sponsorsPerPage, (pageIndex + 1) * sponsorsPerPage)
                      .map((sponsor) => (
                        <div key={`sponsor-${sponsor.id}`} className="group relative flex justify-center">
                          <div className="aspect-square w-32 bg-gradient-to-br from-yellow-400 to-yellow-600 p-1" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                            <div className="w-full h-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center relative cursor-pointer" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                              <div className="text-center">
                                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <i className="ri-building-line text-yellow-500 text-lg"></i>
                                </div>
                                <p className="text-xs text-gray-400">Coming Soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextPage}
              className="absolute right-0 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-yellow-500 text-2xl"></i>
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === currentPage ? 'bg-yellow-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center space-y-6">
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're seeking sponsors who share our vision of bridging hip hop culture with Web3 technology. Your support helps us bring this revolutionary experience to communities across North America.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-6 inline-block">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/litepaper#sponsorship-tiers"
                  className="bg-gray-800 text-yellow-500 px-8 py-3 font-semibold hover:bg-gray-700 transition-all cursor-pointer whitespace-nowrap border border-yellow-500/30"
                  style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
                >
                  View Sponsorship Tiers
                </Link>
                
                <a 
                  href="#contact"
                  className="bg-yellow-500 text-black px-8 py-3 font-semibold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap"
                  style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
