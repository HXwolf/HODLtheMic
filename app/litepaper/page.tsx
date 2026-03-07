'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LitepaperPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#sponsorship-tiers') {
        const element = document.getElementById('sponsorship-tiers');
        if (element) {
          const headerHeight = 220;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            setIsDropdownOpen(true);
          }, 600);
        }
      }
    };

    setTimeout(() => {
      handleHashChange();
    }, 100);
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-32">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-yellow-500 mb-12 text-center font-['Orbitron']">Litepaper</h1>
          
          <div className="space-y-12 text-gray-300 leading-relaxed">
            {/* Vision & Mission */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 font-['Orbitron'] flex items-center">
                <span className="text-4xl mr-3">🎤</span>
                Vision &amp; Mission
              </h2>
              <p className="text-lg">
                <em className="text-yellow-500">HODL the Mic</em> is where hip hop meets Web3, a cultural bridge that makes blockchain understandable, relatable, and entertaining. Through music, live events, and storytelling, we turn complex crypto concepts into creative experiences, inspiring a new generation to HODL (Hold On for Dear Life) onto the future of decentralized technology.
              </p>
            </section>

            {/* The Problem */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 font-['Orbitron'] flex items-center">
                <span className="text-4xl mr-3">🚧</span>
                The Problem
              </h2>
              <p className="text-lg mb-4">
                Blockchain innovation, despite its potential, is often buried under:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-3 text-lg">
                <li><strong className="text-yellow-500">Pump-and-dump schemes</strong> that erode trust and mislead newcomers.</li>
                <li><strong className="text-yellow-500">Confusing terminology</strong> that shuts out new users and creates an exclusive atmosphere.</li>
                <li><strong className="text-yellow-500">Hype cycles</strong> that shadow real artistic merit, sustainable development, and genuine community building.</li>
              </ul>
              <p className="text-lg mt-4">
                This pervasive noise makes it harder for individuals to discover and engage with the true power of DeFi, NFTs, DAOs, and community-driven technology.
              </p>
            </section>

            {/* The Solution */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 font-['Orbitron'] flex items-center">
                <span className="text-4xl mr-3">💡</span>
                The Solution
              </h2>
              <p className="text-lg mb-6">
                <em className="text-yellow-500">HODL the Mic</em> uses the universal language of hip hop culture - its music, performance, graffiti, dance, and storytelling - to explain Web3 in a way that sticks. Imagine a freestyle battle breaking down tokenomics, or a graffiti mural illustrating the immutable ledger of an NFT. We connect with audiences by translating abstract blockchain concepts into tangible, resonant cultural experiences.
              </p>
              
              <p className="text-lg mb-4">
                We bring together:
              </p>
              
              <div className="space-y-4 ml-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Artists</h3>
                  <p>Who inspire through rhythm, rhyme, and visual expression, acting as cultural translators.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Developers</h3>
                  <p>Who build robust, user-friendly tools for real-world Web3 adoption.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Fans &amp; Community Members</h3>
                  <p>Who live and breathe the culture every day, fostering organic growth and engagement.</p>
                </div>
              </div>
            </section>

            {/* Why PulseChain */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 font-['Orbitron'] flex items-center">
                <span className="text-4xl mr-3">🔗</span>
                Why PulseChain?
              </h2>
              <p className="text-lg mb-6">
                HODL the Mic is multichain-friendly. We support artists from every chain and build in various corners of the metaverse. However we've chosen PulseChain as a core ecosystem to highlight and support. Why? PulseChain embodies many of the values we want to showcase through culture and education:
              </p>
              
              <div className="space-y-4 ml-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Accessibility &amp; Low Costs</h3>
                  <p>PulseChain's low transaction fees make it possible for artists and fans to engage with NFTs, DeFi, and community projects without barriers.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Decentralization First</h3>
                  <p>Built with the ethos of reducing central points of failure, PulseChain aligns with hip hop's legacy of independence, resilience, and speaking truth to power.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Green &amp; Scalable</h3>
                  <p>Its eco-friendly proof-of-stake design makes it a sustainable choice for artists, communities, and educators.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Community-Driven Growth</h3>
                  <p>PulseChain has one of the most active grassroots communities in crypto, similar to how hip hop itself grew from the ground up into a global movement.</p>
                </div>
              </div>
              
              <p className="text-lg mt-6">
                By highlighting PulseChain, while still maintaining bridges to other chains, we emphasize a decentralized ecosystem that reflects the same values as the culture we represent: empowerment, independence, and collaboration.
              </p>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="mb-16">
              <h2 className="text-3xl font-bold text-yellow-500 mb-8 font-['Orbitron']">Roadmap</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-sm mr-4" style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}>
                    <span suppressHydrationWarning={true}>
                      {isMounted ? (
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-mic-fill text-black text-lg"></i>
                          </div>
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-checkbox-fill text-black text-lg"></i>
                          </div>
                        </div>
                      ) : (
                        'Phase 0'
                      )}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">Blockchain Mic Check</h3>
                    <p>Foundational phase covering planning, brand setup, socials, website build, design direction, and early strategy work.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex items-center">
                    <span className="text-4xl mr-3 mic-glow" suppressHydrationWarning={true}>🎤</span>
                    <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-2xl mr-6" style={{clipPath: 'polygon(10% 25%, 10% 75%, 50% 100%, 90% 75%, 90% 25%, 50% 0%)'}}>
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">Website Launch & Community Ignition</h3>
                    <p>Launch the official website and open the community channels. Welcome early supporters, and begin targeted outreach across Hip-Hop, Web3, and creator networks.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-sm mr-4" style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}>
                    Phase 2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">Funding Campaign & Artist Reveal</h3>
                    <p>Launch strategic funding through unique NFT drops and community initiatives, paired with the official reveal of featured artists to boost excitement, clarity, and supporter engagement.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-sm mr-4" style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}>
                    Phase 3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2"><em className="text-yellow-500">HODL the Mic</em> Tour (First Wave)</h3>
                    <p>Launch the initial live event tour across key cities in Canada and the US, bringing the Web3 x Hip Hop experience directly to communities.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-sm mr-4" style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}>
                    Phase 4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">Full Documentary Feature</h3>
                    <p>Begin production on a feature-length documentary, diving deeper into the movement and its impact.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-sm mr-4" style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}>
                    Phase 5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">Documentary Release & Distribution</h3>
                    <p>Premiere the documentary through select live event screenings, festival submissions, and/or online distribution platforms.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-sm mr-4" style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}>
                    Phase 6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">Expansion</h3>
                    <p>Develop the broader digital ecosystem, secure media partnerships, and plan future international tours, educational programs, and long-term initiatives. Add features like artist profiles, community sign up pages and much more.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-500 text-black font-bold flex items-center justify-center text-sm mr-4" style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}>
                    Phase 7
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2"><em className="text-yellow-500">HODL the Mic</em> Tour (Second Wave)</h3>
                    <p>Expand the live experience with a second wave of tour events, featuring new cities, expanded artist lineups, and integrated Web3 engagement.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sponsorship Tiers Dropdown */}
            <section>
              <div className="mb-8" id="sponsorship-tiers">
                <button
                  onClick={toggleDropdown}
                  data-sponsorship-dropdown
                  data-open={isDropdownOpen ? 'true' : ''}
                  className="flex items-center justify-between w-full bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4 hover:bg-gray-800/50 transition-all cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-yellow-500 font-['Orbitron'] flex items-center">
                    <span className="text-3xl mr-3">💎</span>
                    Sponsorship Tiers + Rewards
                  </h3>
                  <div className={`w-6 h-6 flex items-center justify-center transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <i className="ri-arrow-down-s-line text-yellow-500 text-xl"></i>
                  </div>
                </button>
                
                {isDropdownOpen && (
                  <div className="mt-4 bg-gray-900/70 border border-gray-700 rounded-lg p-6 overflow-x-auto">
                    <div className="min-w-full">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-600">
                            <th className="text-left py-3 px-4 text-yellow-500 font-semibold">Tier</th>
                            <th className="text-left py-3 px-4 text-yellow-500 font-semibold">Contribution</th>
                            <th className="text-left py-3 px-4 text-yellow-500 font-semibold">Benefits</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-gray-700/50">
                            <td className="py-4 px-4 font-medium text-white">Supporter</td>
                            <td className="py-4 px-4">$100</td>
                            <td className="py-4 px-4">Name shoutout (web/social/documentary)</td>
                          </tr>
                          <tr className="border-b border-gray-700/50">
                            <td className="py-4 px-4 font-medium text-white">Community Sponsor</td>
                            <td className="py-4 px-4">$500-$1,000</td>
                            <td className="py-4 px-4">All Supporter benefits, logo on site, mention at 1 tour stop, 1 Early Supporter NFT, 2 tickets</td>
                          </tr>
                          <tr className="border-b border-gray-700/50">
                            <td className="py-4 px-4 font-medium text-white">Supporting Sponsor</td>
                            <td className="py-4 px-4">$2,500-$5,000</td>
                            <td className="py-4 px-4">All Tier 1 benefits, logo on flyers/banner, doc credits, tier NFTs, 4 tickets</td>
                          </tr>
                          <tr className="border-b border-gray-700/50">
                            <td className="py-4 px-4 font-medium text-white">Tour Sponsor</td>
                            <td className="py-4 px-4">$10,000-$15,000</td>
                            <td className="py-4 px-4">All Tier 2 benefits, logo on posters/merch, mid-level doc credits, mention at all tour stops, rep onstage (1-2 events), tier NFTs, 6-8 tickets</td>
                          </tr>
                          <tr className="border-b border-gray-700/50">
                            <td className="py-4 px-4 font-medium text-white">Presenting Sponsor</td>
                            <td className="py-4 px-4">$20,000-$40,000</td>
                            <td className="py-4 px-4">All Tier 3 benefits, "Presented by" branding, opening doc credits, content collab (NFT/video), workshop session, tier NFTs, 10-12 tickets + VIP</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 font-medium text-white">Title Sponsor</td>
                            <td className="py-4 px-4">$40,000+</td>
                            <td className="py-4 px-4">All Tier 4 benefits, exclusive naming rights, top-tier logo, featured doc partner, rep onstage at multiple events, co-branded NFT/merch, 20+ tickets + backstage/VIP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-center">
                      <a 
                        href="/#contact" 
                        className="inline-block bg-yellow-500 text-black px-6 py-3 font-semibold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap rounded-lg"
                      >
                        Become a Sponsor
                      </a>
                      <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        We also welcome in-kind sponsorships such as merchandise, gear, or prize giveaways to support your brand, engage audiences and bring extra value to fans and the tour experience.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Sponsors Disclaimer */}
            <section>
              <div className="mt-6 bg-gray-800/50 border border-yellow-500/20 rounded-lg p-4 mb-4">
                <h4 className="text-yellow-500 font-semibold mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  Sponsorship Disclaimer
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All sponsorship tiers, benefits, and workshop opportunities are based on the current tour plan. Availability of specific rewards (such as workshops, documentary features, or promotional activations) may vary depending on the final tour schedule, venue capacities, and production logistics.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mt-2">
                  We strongly encourage sponsors to secure their support early to ensure full access to all benefits. While we will make every effort to accommodate late sponsors, certain rewards may be limited or adjusted to fit the evolving tour and documentary framework.
                </p>
              </div>
            </section>

            {/* Partners */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 font-['Orbitron'] flex items-center">
                <span className="text-4xl mr-3">🤝</span>
                Partners (Anonymous for Now)
              </h2>
              <p className="text-lg mb-4">
                We are actively collaborating with key players across the Web3 ecosystem, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 ml-4">
                <div className="border border-gray-700 p-4 rounded-lg bg-gray-900/30">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-2">Performing Artists</h3>
                  <p>Featured groups, visual artists and headlining acts focused on a digital hip-hop experience.</p>
                </div>
                
                <div className="border border-gray-700 p-4 rounded-lg bg-gray-900/30">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-2">Web3 Marketplaces</h3>
                  <p>Creating seamless connections between artists and fans through NFTs.</p>
                </div>
                
                <div className="border border-gray-700 p-4 rounded-lg bg-gray-900/30">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-2">Educators &amp; Cultural Leaders</h3>
                  <p>Dedicated to demystifying blockchain and spreading knowledge.</p>
                </div>
                
                <div className="border border-gray-700 p-4 rounded-lg bg-gray-900/30">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-2">Community Projects</h3>
                  <p>Amplifying grassroots voices and fostering decentralized growth.</p>
                </div>
              </div>
            </section>

            {/* Final Call to Action */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 font-['Orbitron'] flex items-center">
                <span className="text-4xl mr-3">📢</span>
                Call to Action
              </h2>
              <div className="text-center bg-gradient-to-r from-yellow-500/10 to-transparent p-8 rounded-lg border border-yellow-500/20">
                <p className="text-xl mb-4">
                  <em className="text-yellow-500">HODL the Mic</em> is more than a tour. It's a movement for blockchain understanding and adoption, driven by the vibrant power of culture.
                </p>
                <p className="text-2xl font-bold text-yellow-500 font-['Orbitron']">
                  Be part of the story. Build the bridge. <em className="text-yellow-500">HODL the Mic</em>.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4 font-['Orbitron']">Join the Movement</h3>
                <p className="text-lg mb-6">
                  Ready to bridge hip hop culture with Web3 technology? Be part of the revolution that makes blockchain accessible to everyone.
                </p>
                <a 
                  href="/#contact" 
                  className="inline-block bg-yellow-500 text-black px-8 py-3 font-semibold hover:bg-yellow-400 transition-all cursor-pointer whitespace-nowrap"
                  style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
                >
                  Get Involved
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
