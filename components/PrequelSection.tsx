
'use client';

export default function PrequelSection() {
  return (
    <section id="prequel" className="py-20 bg-gray-900">
      <style jsx>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-500 font-['Orbitron']">Prequel Mini-Doc</h2>
            <h3 className="text-2xl font-semibold text-white">The Genesis of a Movement</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Before the main documentary, witness the origins of <em className="text-yellow-500 font-semibold">HODL the Mic</em>. This 15-minute prequel follows our
              journey from concept to reality, featuring exclusive interviews with early adopters who saw the vision
              of combining hip-hop culture with blockchain technology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience the raw energy of underground studios, the excitement of first blockchain transactions, and
              the passion of artists who dared to innovate. This is where it all began.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://youtu.be/OwRr-uTzcvI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-button whitespace-nowrap hover:bg-yellow-400 transition-all cursor-pointer"
              >
                Watch Here
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="hexagon-border hexagon aspect-video bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
              <div 
                className="hexagon w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url(https://readdy.ai/api/search-image?query=Hip-hop%20documentary%20filming%20scene%20with%20professional%20cameras%2C%20artists%20being%20interviewed%20about%20blockchain%20technology%2C%20urban%20studio%20environment%2C%20cinematic%20lighting%2C%20behind-the-scenes%20documentary%20style&width=800&height=600&seq=hodl-prequel-1&orientation=landscape)'
                }}
              >
                <div className="absolute inset-0 hexagon bg-black/40 flex items-center justify-center">
                  <a 
                    href="https://youtu.be/OwRr-uTzcvI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <i className="ri-play-fill text-black text-3xl ml-1"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400" suppressHydrationWarning={true}>Duration: 15:00</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
