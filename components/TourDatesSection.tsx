'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TourDatesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;
  const citiesPerPage = 3;

  const tourDates = [
    // Page 1
    {
      id: 1,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Limited",
      price: "TBD",
      ticketUrl: "#",
      page: 0
    },
    {
      id: 2,
      date: "APRIL 2026",
      city: "Toronto ON",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 0
    },
    {
      id: 3,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 0
    },
    // Page 2
    {
      id: 4,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 1
    },
    {
      id: 5,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 1
    },
    {
      id: 6,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 1
    },
    // Page 3
    {
      id: 7,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 2
    },
    {
      id: 8,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 2
    },
    {
      id: 9,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 2
    },
    // Page 4
    {
      id: 10,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 3
    },
    {
      id: 11,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 3
    },
    {
      id: 12,
      date: "TBD",
      city: "TBD",
      venue: "TBD",
      status: "Coming Soon",
      price: "TBD",
      ticketUrl: "#",
      page: 3
    }
  ];

  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setSelectedDate(null);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setSelectedDate(null);
  };

  const getCurrentPageDates = () => {
    return tourDates.filter((date) => date.page === currentPage);
  };

  /**
   * Returns a Tailwind colour class string based on the status.
   * Falls back to a neutral grey if the status is unknown.
   */
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'On Sale':
        return 'bg-green-500 text-black';
      case 'Early Bird':
        return 'bg-yellow-500 text-black';
      case 'VIP Available':
        return 'bg-purple-500 text-white';
      case 'Limited':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section
      id="tour"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      style={{
        '--hexagon-clip': 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
      } as React.CSSProperties}
    >
      <style jsx global>{`
        .hexagon-clip {
          clip-path: var(--hexagon-clip);
        }

        .tour-card-glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .tour-card-glass:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .hex-starfield-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .hex-star-animate {
          position: absolute;
          opacity: 0.3;
          animation: hexagonTravel linear infinite;
        }

        @keyframes hexagonTravel {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(110vw) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="hex-starfield-bg">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="hex-star-animate hexagon-clip"
            style={{
              top: `${5 + i * 4.5}%`,
              left: '-5%',
              width: `${6 + (i % 5) * 2}px`,
              height: `${6 + (i % 5) * 2}px`,
              background: `linear-gradient(135deg, ${
                [
                  'rgba(255,255,0,0.4), rgba(255,215,0,0.4)',
                  'rgba(128,0,128,0.4), rgba(255,20,147,0.4)',
                  'rgba(0,0,255,0.4), rgba(0,255,255,0.4)',
                  'rgba(255,165,0,0.4), rgba(255,0,0,0.4)',
                  'rgba(0,128,0,0.4), rgba(0,255,127,0.4)'
                ][i % 5]
              })`,
              animationDuration: `${5 + (i % 5)}s`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 font-['Orbitron'] mb-4">
            Tour Dates
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto" suppressHydrationWarning={true}>
            Experience the intersection of Hip Hop culture and Web3 technology live. Join us as we bring
            blockchain education to communities through the power of music.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-yellow-500 text-2xl"></i>
          </button>

          <div className="overflow-hidden mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-3 gap-6">
                  {tourDates
                    .filter((date) => date.page === pageIndex)
                    .map((show) => (
                      <div
                        key={show.id}
                        className={`
                          tour-card-glass rounded-2xl p-6 cursor-pointer 
                          ${selectedDate === show.id ? 'transform scale-105' : ''}
                        `}
                        onClick={() => setSelectedDate(selectedDate === show.id ? null : show.id)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="hexagon-clip w-12 h-12 bg-yellow-500 flex items-center justify-center">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-calendar-line text-black text-lg"></i>
                            </div>
                          </div>
                          <span
                            className={`
                              px-3 py-1 rounded-full text-xs font-bold 
                              ${getStatusColor(show.status)}
                            `}
                          >
                            {show.status}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{show.city}</h3>
                            <p className="text-yellow-500 font-medium">{show.date}</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center text-gray-300">
                              <div className="w-5 h-5 flex items-center justify-center mr-3">
                                <i className="ri-map-pin-line text-yellow-500"></i>
                              </div>
                              <span className="text-sm">{show.venue}</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <div className="w-5 h-5 flex items-center justify-center mr-3">
                                <i className="ri-ticket-line text-yellow-500"></i>
                              </div>
                              <span className="text-sm">{show.price}</span>
                            </div>
                          </div>

                          {selectedDate === show.id && (
                            <div className="mt-4 pt-4 border-t border-gray-700">
                              <div className="space-y-3">
                                <div className="text-sm text-gray-300">
                                  <p className="mb-2">🎤 Featured performances by underground hip hop artists</p>
                                  <p className="mb-2">🔗 Interactive Web3 and PulseChain education sessions</p>
                                  <p className="mb-2">🎁 Exclusive NFT drops for attendees</p>
                                  <p>📱 Live blockchain demonstrations</p>
                                </div>
                                <button
                                  className="w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg whitespace-nowrap hover:bg-yellow-400 transition-all cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Optional: add navigation to ticketUrl
                                    if (show.ticketUrl && show.ticketUrl !== '#') {
                                      window.open(show.ticketUrl, '_blank');
                                    }
                                  }}
                                >
                                  Get Tickets
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-yellow-500 text-2xl"></i>
          </button>
        </div>

        {/* Mobile View - Single Column Stack */}
        <div className="md:hidden">
          <div className="space-y-6">
            {getCurrentPageDates().map((show) => (
              <div
                key={`mobile-${show.id}`}
                className={`
                  tour-card-glass rounded-2xl p-6 cursor-pointer 
                  ${selectedDate === show.id ? 'transform scale-105' : ''}
                `}
                onClick={() => setSelectedDate(selectedDate === show.id ? null : show.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="hexagon-clip w-10 h-10 bg-yellow-500 flex items-center justify-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-calendar-line text-black text-sm"></i>
                    </div>
                  </div>
                  <span
                    className={`
                      px-2 py-1 rounded-full text-xs font-bold 
                      ${getStatusColor(show.status)}
                    `}
                  >
                    {show.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{show.city}</h3>
                    <p className="text-yellow-500 font-medium">{show.date}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <div className="w-5 h-5 flex items-center justify-center mr-3">
                        <i className="ri-map-pin-line text-yellow-500"></i>
                      </div>
                      <span className="text-sm">{show.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-5 h-5 flex items-center justify-center mr-3">
                        <i className="ri-ticket-line text-yellow-500"></i>
                      </div>
                      <span className="text-sm">{show.price}</span>
                    </div>
                  </div>

                  {selectedDate === show.id && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="space-y-3">
                        <div className="text-sm text-gray-300">
                          <p className="mb-2">🎤 Featured performances by underground hip hop artists</p>
                          <p className="mb-2">🔗 Interactive Web3 and PulseChain education sessions</p>
                          <p className="mb-2">🎁 Exclusive NFT drops for attendees</p>
                          <p>📱 Live blockchain demonstrations</p>
                        </div>
                        <button
                          className="w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg whitespace-nowrap hover:bg-yellow-400 transition-all cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (show.ticketUrl && show.ticketUrl !== '#') {
                              window.open(show.ticketUrl, '_blank');
                            }
                          }}
                        >
                          Get Tickets
                        </button>
                      </div>
                    </div>
                  )}
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
              onClick={() => {
                setCurrentPage(i);
                setSelectedDate(null);
              }}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                i === currentPage ? 'bg-yellow-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-800/50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-500 mb-4">Want to Host a Show?</h3>
            <div className="text-gray-300 mb-6 text-sm md:text-base">
              <p>We're looking for venues and communities.</p>
              <p>Be part of the Web3 x Hip Hop movement.</p>
              <p>
                Bring <em className="text-yellow-500 font-semibold">HODL the Mic</em> to your city!
              </p>
              <p className="mt-3">
                <Link href="/purchase-info" className="text-yellow-500 hover:text-yellow-400 underline cursor-pointer">
                  View Purchase Info
                </Link>
              </p>
            </div>
            <a
              href="/#contact"
              className="px-6 md:px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg whitespace-nowrap hover:bg-yellow-500 hover:text-black transition-all cursor-pointer text-sm md:text-base"
            >
              Submit Venue Request
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
