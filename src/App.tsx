import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Build from './Build';
import Community from './Community';
import FAQ from './FAQ';
import ThreeCoreSection from './ThreeCoreSection';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46]">
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'nav-shadow border-b border-[#e4e4e7]' : ''}`}>
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigateToPage('home')}
            className="cursor-pointer hover:opacity-80 transition-opacity duration-150"
          >
            <img src="/8004_logo_purple copy.png" alt="Trustless Agents" className="h-12" />
          </button>
          <div className="flex items-center gap-6 md:gap-8">
            <button
              onClick={() => navigateToPage('build')}
              className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm font-medium"
            >
              Build
            </button>
            <button
              onClick={() => navigateToPage('community')}
              className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm font-medium"
            >
              Community
            </button>
            <button
              onClick={() => navigateToPage('faq')}
              className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm font-medium"
            >
              FAQ
            </button>
          </div>
        </nav>
      </header>

      {currentPage === 'build' ? (
        <Build onNavigate={navigateToPage} />
      ) : currentPage === 'community' ? (
        <Community onNavigate={navigateToPage} />
      ) : currentPage === 'faq' ? (
        <FAQ onNavigate={navigateToPage} />
      ) : (
        <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#4C2A85] animate-fade-in-up">
            Trustless Agents
          </h1>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#18181b] animate-fade-in-up animate-delay-100">
            Open Standards for the Agentic Web
          </p>
          <p className="text-lg md:text-xl text-[#71717a] max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-200">
            The community for those building autonomous agents on open protocols
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animate-delay-300">
            <button
              onClick={() => navigateToPage('build')}
              className="bg-[#4C2A85] text-white hover:bg-[#412471] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 flex items-center gap-2 card-shadow hover:card-shadow-hover"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateToPage('community')}
              className="bg-white border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover"
            >
              Join Community
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-[#18181b]">
            Agents That Work for People, Owned by People
          </h2>
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-[#71717a] max-w-4xl mx-auto leading-relaxed">
                The open agent economy needs to be anchored in the democratic values that have shaped human progress.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <img
                  src="/ta8.jpg"
                  alt="Trustless agent illustration"
                  className="w-full h-auto rounded-2xl card-shadow"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[#3f3f46] text-lg leading-relaxed">
                  AI agents are becoming the new intermediaries of information, decisions, and value. Today, they rely on closed systems controlled by a handful of gatekeepers.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 md:order-1">
                <p className="text-[#3f3f46] text-lg leading-relaxed">
                  We believe their foundations must be open, permissionless, and accountable. Not governed by gatekeepers, in a system where your data is not a public good.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:order-2">
                <img
                  src="/ta2.png"
                  alt="Trustless agent illustration"
                  className="w-full h-auto rounded-2xl card-shadow"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <img
                  src="/ta23.jpg"
                  alt="Trustless agent illustration"
                  className="w-full h-auto rounded-2xl card-shadow"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[#3f3f46] text-lg leading-relaxed">
                  To achieve this, the agent economy requires open standards. They are essential not only for secure data exchange, but also to ensure that AI does not accelerate the deterioration of the open web as it exists today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 md:order-1">
                <p className="text-[#3f3f46] text-lg leading-relaxed">
                  Trust, reputation, and payments - things humans have relied on for centuries - must be re-established for autonomous software. Outside of this, many more standards will emerge.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:order-2">
                <img
                  src="/ta4.jpg"
                  alt="Agent economy illustration showing trust, reputation, commerce and agents"
                  className="w-full h-auto rounded-2xl card-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThreeCoreSection />

      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 text-[#18181b]">Organized by</h2>
          <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
            Leading organizations collaborating to build open standards for the agent economy
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-4xl mx-auto">
            {[
              { name: 'Metamask', img: '/metamask.jpg' },
              { name: 'Ethereum Foundation', img: '/ef.jpg' },
              { name: 'Google', img: '/google.jpg' },
              { name: 'Coinbase', img: '/coinbase.png' },
            ].map((org, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center card-shadow overflow-hidden">
                  <img src={org.img} alt={org.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-[#18181b]">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#4C2A85]">
            Build Trustless Agents
          </h2>
          <p className="text-center text-[#71717a] text-lg mb-12 max-w-2xl mx-auto">
            Get started now, or leave your details to qualify for future Trustless Agents builder program.
          </p>

          <div className="max-w-md mx-auto">
            <button
              onClick={() => navigateToPage('build')}
              className="w-full bg-[#4C2A85] text-white hover:bg-[#412471] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover"
            >
              Build Now
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={navigateToPage} />
        </>
      )}
    </div>
  );
}

export default App;
