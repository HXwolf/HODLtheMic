
'use client';

import { useState } from 'react';

export default function ArtistsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Create 4 pages with 3 artists each
  const totalPages = 4;
  const artistsPerPage = 3;
  const totalArtists = totalPages * artistsPerPage;
  
  const artists = Array.from({ length: totalArtists }, (_, i) => ({
    id: i + 1,
    page: Math.floor(i / artistsPerPage),
  }));

  const getCurrentPageArtists = () => {
    const startIndex = currentPage * artistsPerPage;
    return artists.slice(startIndex, startIndex + artistsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="artists" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 font-['Orbitron'] mb-4">Featured Artists</h2>
          <div className="text-lg md:text-xl text-gray-400 space-y-2 max-w-4xl mx-auto">
            <p>Trailblazing voices at the intersection of music and technology.</p>
            <p>This Tour & Documentary takes underground hip-hop artists on a journey through DeFi and Web3.</p>
            <p>Sharing their experiences with fans along the way.</p>
            <p>Select dates will showcase industry veterans, building up to a legendary major headliner event.</p>
          </div>
        </div>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-center">
            <button 
              onClick={prevPage}
              className="absolute left-0 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-yellow-500 text-2xl"></i>
            </button>
            
            <div className="overflow-hidden w-full max-w-5xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }, (_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 flex justify-center gap-8">
                    {artists
                      .slice(pageIndex * artistsPerPage, (pageIndex + 1) * artistsPerPage)
                      .map((artist) => (
                        <div key={`artist-${artist.id}`} className="group relative">
                          <div className="aspect-square w-64 bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 mb-6" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center relative" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                  <i className="ri-question-line text-yellow-500 text-3xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-yellow-500 mb-3">????????</h3>
                                <p className="text-sm text-gray-300 mb-4">??????</p>
                                <div className="flex justify-center space-x-3">
                                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                    <i className="ri-twitter-x-line text-yellow-500 text-sm"></i>
                                  </div>
                                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                    <i className="ri-instagram-line text-yellow-500 text-sm"></i>
                                  </div>
                                </div>
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

          {/* Mobile View - Single Column Stack */}
          <div className="md:hidden">
            <div className="space-y-8">
              {getCurrentPageArtists().map((artist) => (
                <div key={`mobile-artist-${artist.id}`} className="flex justify-center">
                  <div className="aspect-square w-48 bg-gradient-to-br from-yellow-400 to-yellow-600 p-1" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center relative" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                          <i className="ri-question-line text-yellow-500 text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-bold text-yellow-500 mb-2">????????</h3>
                        <p className="text-sm text-gray-300 mb-3">??????</p>
                        <div className="flex justify-center space-x-3">
                          <div className="w-7 h-7 bg-yellow-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-twitter-x-line text-yellow-500 text-sm"></i>
                          </div>
                          <div className="w-7 h-7 bg-yellow-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-instagram-line text-yellow-500 text-sm"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button 
                onClick={prevPage}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-yellow-500 text-xl"></i>
              </button>
              
              <span className="text-yellow-500 font-semibold">
                {currentPage + 1} / {totalPages}
              </span>
              
              <button 
                onClick={nextPage}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-yellow-500 text-xl"></i>
              </button>
            </div>
          </div>
          
          {/* Desktop Pagination */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
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
      </div>
    </section>
  );
}
