'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PurchaseInfoPage() {
  const [showAllBreakdowns, setShowAllBreakdowns] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tiers = [
    {
      name: 'Test Net',
      subtitle: 'Micro-Tier Show',
      description: (
        <>
          <p className="mb-3">Our most accessible entry point show. Featuring 1 DJ, 3 opening acts and 1 mid-level headlining act.</p>
          <p className="mb-3">Perfect for intimate venues, community events, or testing the vibes with HODL the Mic.</p>
          <p>Includes a brief blockchain presentation to introduce audiences to Web3 concepts in an engaging, accessible format.</p>
        </>
      ),
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-500',
      accentColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      artists: 7,
      artistBreakdown: [
        { category: 'Opening Acts', items: [
          { name: 'DJ', fee: 200 },
          { name: 'Solo', fee: 200 },
          { name: 'Duo A', fee: 400, note: '(2x $200)' },
          { name: 'Duo B', fee: 400, note: '(2x $200)' }
        ]},
        { category: 'Supporting Acts', items: [
          { name: 'Support A', fee: 500 }
        ]}
      ],
      fees: {
        artistFees: 1700,
        transport: 600,
        production: 300,
        staff: 600,
        blockchainGuest: 200,
        contingency: 200
      },
      total: 3600
    },
    {
      name: 'Genesis Block',
      subtitle: 'Base Show',
      description: (
        <>
          <p className="mb-3">This is our Base production. Each show featuring 1 DJ, 3 opening acts, 2 mid-level act, and 1 headline act.</p>
          <p className="mb-3">Beyond the music, audiences get a live blockchain presentation that explains the tech behind the art.</p>
          <p>It's a concise, high-energy experience that gives a taste of HODL the Mic's fusion of hip hop and Web3 culture, perfect for smaller venues or initial tour stops.</p>
        </>
      ),
      color: 'from-purple-500 to-fuchsia-600',
      borderColor: 'border-purple-500',
      accentColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      artists: 9,
      artistBreakdown: [
        { category: 'Opening Acts', items: [
          { name: 'DJ', fee: 200 },
          { name: 'Solo', fee: 200 },
          { name: 'Duo A', fee: 400, note: '(2x $200)' },
          { name: 'Duo B', fee: 400, note: '(2x $200)' }
        ]},
        { category: 'Supporting Acts', items: [
          { name: 'Support A', fee: 500 },
          { name: 'Support B', fee: 500 }
        ]},
        { category: 'Feature Act', items: [
          { name: 'Feature A', fee: 2000 }
        ]}
      ],
      fees: {
        artistFees: 4200,
        transport: 800,
        production: 500,
        staff: 1000,
        blockchainGuest: 200,
        contingency: 500
      },
      total: 7200
    },
    {
      name: 'Validator Node',
      subtitle: 'Mid-Tier Show',
      description: (
        <>
          <p className="mb-3">Our Mid-Tier Show ramps up the vibe. Featuring 1 DJ, 2-3 opening acts, 2 mid-level acts, & 2 headline acts.</p>
          <p className="mb-3">A more immersive journey with a live NFT experience, minting digital collectibles in real time, with blockchain discussions integrated into the set.</p>
          <p>This tier is ideal for medium-sized venues and audiences who want a deeper dive into the intersection of music and decentralized tech.</p>
        </>
      ),
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500',
      accentColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      artists: 10,
      artistBreakdown: [
        { category: 'Opening Acts', items: [
          { name: 'DJ', fee: 200 },
          { name: 'Solo', fee: 200 },
          { name: 'Duo A', fee: 400, note: '(2x $200)' },
          { name: 'Duo B', fee: 400, note: '(2x $200)' }
        ]},
        { category: 'Supporting Acts', items: [
          { name: 'Support A', fee: 500 },
          { name: 'Support B', fee: 500 }
        ]},
        { category: 'Feature Act', items: [
          { name: 'Feature A', fee: 2000 },
          { name: 'Feature B', fee: 5000 }
        ]}
      ],
      fees: {
        artistFees: 9200,
        transport: 1000,
        production: 800,
        staff: 1000,
        blockchainGuest: 200,
        contingency: 1000
      },
      total: 13200
    },
    {
      name: 'Moon Shot',
      subtitle: 'Premium Show',
      description: (
        <>
          <p className="mb-3">The ultimate experience. Premium show includes 1 DJ, 2-3 opening acts, 2 mid-level acts, 2 headline acts, & adds 1 or 2 legendary premium headliners.</p>
          <p className="mb-3">This tier maximizes the cultural and educational impact, with interactive NFT mints, prizes, and blockchain presentations.</p>
          <p>Perfect for large venues, festivals or marquee events, it's a show designed to leave a lasting impression and attract media attention.</p>
        </>
      ),
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-500',
      accentColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      artists: '11-12',
      artistBreakdown: [
        { category: 'Opening Acts', items: [
          { name: 'DJ', fee: 300 },
          { name: 'Solo', fee: 300 },
          { name: 'Duo A', fee: 600, note: '(2x $300)' },
          { name: 'Duo B', fee: 600, note: '(2x $300)' }
        ]},
        { category: 'Supporting Acts', items: [
          { name: 'Support A', fee: 700 },
          { name: 'Support B', fee: 700 }
        ]},
        { category: 'Feature Act', items: [
          { name: 'Feature A', fee: 2500 },
          { name: 'Feature B', fee: 5500 }
        ]},
        { category: 'Premium Feature', items: [
          { name: 'Premium A', fee: 25000 },
          { name: 'Premium B', fee: 25000 }
        ]}
      ],
      fees: {
        artistFees: 61200,
        transport: 2000,
        production: 1500,
        staff: 1600,
        blockchainGuest: 300,
        contingency: 6000
      },
      total: 72600
    }
  ];

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  const calculatePercentage = (amount: number, total: number) => {
    return ((amount / total) * 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div 
          className="relative py-20 mb-16"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Abstract%20digital%20blockchain%20network%20visualization%20with%20glowing%20hexagonal%20nodes%20and%20connection%20lines%20in%20dark%20space%20featuring%20vibrant%20neon%20colors%20purple%20blue%20green%20gradients%20representing%20decentralized%20technology%20and%20Web3%20innovation%20with%20subtle%20graffiti%20texture%20overlay%20modern%20tech%20aesthetic%20high%20contrast%20futuristic%20atmosphere&width=1920&height=400&seq=purchaseinfohero001&orientation=landscape)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 
              className="text-5xl md:text-7xl font-black font-['Orbitron'] mb-4"
              style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              HODL the Mic
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Promoter Rate Sheet</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Web3 Hip Hop Tour: Artist Fees, Logistics, and Budget Overview
            </p>
            <p className="text-base italic text-gray-300 max-w-3xl mx-auto">
              Bringing together legendary artists and blockchain innovators to create something unprecedented.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <p className="text-lg text-gray-300 leading-relaxed font-semibold">
              HODL the Mic
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              A groundbreaking documentary and tour project bridging the gap between Hip-Hop and Web3 technology.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative border-2 ${tier.borderColor} rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer ${tier.bgColor}`}
                onClick={() => setShowAllBreakdowns(!showAllBreakdowns)}
              >
                <div className={`bg-gradient-to-br ${tier.color} p-6 text-center`}>
                  <h3 className="text-2xl font-bold mb-1 font-['Orbitron']">{tier.name}</h3>
                  <p className="text-sm opacity-90">{tier.subtitle}</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="pb-4 border-b border-gray-700">
                    <div className="text-sm text-gray-300 leading-relaxed">{tier.description}</div>
                  </div>

                  <div className={`bg-gradient-to-r ${tier.color} p-4 rounded-lg`}>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">Total Cost</span>
                      <span className="text-2xl font-bold">{formatCurrency(tier.total)}*</span>
                    </div>
                  </div>

                  {isMounted && showAllBreakdowns && (
                    <div className="space-y-4 pt-4 border-t border-gray-700">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <i className="ri-user-star-line text-xl"></i>
                          </div>
                          <span className="text-sm">Artists</span>
                        </div>
                        <span className="font-bold">{tier.artists}</span>
                      </div>

                      {tier.artistBreakdown && (
                        <div className="space-y-3 pb-3 border-b border-gray-700">
                          {tier.artistBreakdown.map((category, catIndex) => (
                            <div key={catIndex}>
                              <h4 className="text-xs font-bold text-gray-400 mb-2">{category.category}:</h4>
                              <div className="space-y-1 ml-2">
                                {category.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-300">
                                      {item.name} {item.note && <span className="text-xs text-gray-500">{item.note}</span>}
                                    </span>
                                    <span className="font-semibold">${item.fee}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-music-2-line"></i>
                            </div>
                            <span>Artist Fees</span>
                          </div>
                          <span className="font-semibold">{formatCurrency(tier.fees.artistFees)}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-car-line"></i>
                            </div>
                            <span>Transport</span>
                          </div>
                          <span className="font-semibold">{formatCurrency(tier.fees.transport)}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-tools-line"></i>
                            </div>
                            <span>Production</span>
                          </div>
                          <span className="font-semibold">{formatCurrency(tier.fees.production)}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-team-line"></i>
                            </div>
                            <span>Staff</span>
                          </div>
                          <span className="font-semibold">{formatCurrency(tier.fees.staff)}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-links-line"></i>
                            </div>
                            <span>Blockchain Guest</span>
                          </div>
                          <span className="font-semibold">{formatCurrency(tier.fees.blockchainGuest)}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                              <i className="ri-shield-check-line"></i>
                            </div>
                            <span>Contingency</span>
                          </div>
                          <span className="font-semibold">{formatCurrency(tier.fees.contingency)}</span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <p className="text-xs text-gray-400 mb-3">Budget Breakdown</p>
                        {Object.entries(tier.fees).map(([key, value]) => {
                          const percentage = calculatePercentage(value, tier.total);
                          const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                          return (
                            <div key={key}>
                              <div className="flex justify-between text-xs mb-1">
                                <span>{label}</span>
                                <span>{percentage}%</span>
                              </div>
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                  className={`bg-gradient-to-r ${tier.color} h-2 rounded-full transition-all`}
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <button 
                    className="w-full mt-4 py-2 border-2 border-gray-700 hover:border-gray-500 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAllBreakdowns(!showAllBreakdowns);
                    }}
                  >
                    {isMounted && showAllBreakdowns ? 'Hide Details' : 'View Breakdown'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-8 mb-16">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-400 leading-relaxed" suppressHydrationWarning={true}>
                <strong className="text-yellow-500">* Disclaimer:</strong> All costs are estimates and subject to change based on venue requirements, ticket price, estimated ticket sales, travel logistics, and specific event needs. Contingency funds are included in all tiers. Hotel accommodations and transport assumptions are noted below. Final pricing will be confirmed upon booking.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-yellow-500 mb-6 font-['Orbitron'] flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-information-line text-2xl"></i>
              </div>
              Promoter Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-hotel-fill text-green-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Hotel Accommodations</h4>
                  <p className="text-sm text-gray-400">Hotel rooms, if needed, to be provided by Promoter. Costs are not included in quote.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-car-fill text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Transport Costs</h4>
                  <p className="text-sm text-gray-400">Estimated costs are included as reference to cover artist travel logistics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-shield-check-fill text-purple-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Contingency Buffer</h4>
                  <p className="text-sm text-gray-400">Contingency is included for minor adjustments and unforeseen circumstances.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-links-fill text-yellow-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Blockchain Guest Speaker</h4>
                  <p className="text-sm text-gray-400">Fee covers expert Web3 speaker for educational content and audience engagement.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-team-fill text-orange-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Staff Coverage</h4>
                  <p className="text-sm text-gray-400">Staff costs include tour management, production crew, and technical support.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-tools-fill text-red-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Production Elements</h4>
                  <p className="text-sm text-gray-400">Covers specific stage setup and technical requirements.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <i className="ri-money-dollar-circle-line text-green-500"></i>
                </div>
                Ticket Share Structure
              </h4>
              <div className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Every show includes a guaranteed flat fee for the entire production. On top of that:
                </p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-arrow-right-s-line text-blue-500"></i>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Mid-Tier (Validator Node):</p>
                      <p className="text-gray-400 text-sm">Charge of 15% of ticket revenue once sales exceed $30,000.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-arrow-right-s-line text-yellow-500"></i>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Premium (Moon Shot):</p>
                      <p className="text-gray-400 text-sm">Charge of 20% of ticket revenue once sales exceed $120,000.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mt-4 pt-4 border-t border-gray-700">
                  Promoters keep all ticket revenue up to the threshold. Percentages apply only to revenue above that level, ensuring fairness for both sides.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <i className="ri-ticket-line text-purple-500"></i>
                </div>
                Attendance & Pricing Guide
              </h4>
              <div className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 text-yellow-500 font-semibold">Show Tier</th>
                      <th className="text-left py-3 px-4 text-yellow-500 font-semibold">Attendance Range</th>
                      <th className="text-left py-3 px-4 text-yellow-500 font-semibold">Suggested Ticket Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700/50">
                      <td className="py-4 px-4 font-medium text-white">Micro-Tier (Test Net)</td>
                      <td className="py-4 px-4">100–200+</td>
                      <td className="py-4 px-4">$35-40</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-4 px-4 font-medium text-white">Base (Genesis Block)</td>
                      <td className="py-4 px-4">200–500+</td>
                      <td className="py-4 px-4">$40-45</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-4 px-4 font-medium text-white">Mid-Tier (Validator Node)</td>
                      <td className="py-4 px-4">500–900+</td>
                      <td className="py-4 px-4">$50-55</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium text-white">Premium (Moon Shot)</td>
                      <td className="py-4 px-4">1,500–2,500+</td>
                      <td className="py-4 px-4">$60-65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-purple-500/10 border-2 border-yellow-500/30 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4 font-['Orbitron']">Ready to Book?</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to discuss your event, venue requirements, and preferred tier. Let's bring the Web3 Hip Hop experience to your city.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a 
                href="/#contact" 
                className="inline-block bg-yellow-500 text-black px-8 py-3 font-semibold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap"
                style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
              >
                Contact for Booking
              </a>
              <a 
                href="/litepaper" 
                className="inline-block bg-gray-800 text-white border-2 border-gray-600 px-8 py-3 font-semibold hover:bg-gray-700 transition-all cursor-pointer whitespace-nowrap"
                style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
              >
                View Litepaper
              </a>
            </div>

            <div className="flex justify-center space-x-4">
              <a 
                href="https://x.com/HODLtheMic_TOUR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-x-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/hodlthemic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
              <a 
                href="https://www.youtube.com/@HODLtheMIC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-youtube-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
              <a 
                href="https://www.tiktok.com/@hodlthemic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500/20 flex items-center justify-center cursor-pointer transition-all"
                style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-tiktok-line text-gray-400 hover:text-yellow-500"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
