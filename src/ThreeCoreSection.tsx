import { useState, useEffect, useRef } from 'react';
import { Search, Shield, Receipt, Globe, BadgeCheck, FileCheck } from 'lucide-react';

function ThreeCoreSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const primitives = [
    {
      id: 1,
      title: 'Discovery',
      subtitle: 'Onchain identity and service registry',
      icon: Search,
      detailTitle: 'Services are discoverable by default',
      detailText: 'Agents publish capabilities to a public registry. Any agent can find and interact with others without gatekeepers.',
      detailIcon: Globe,
    },
    {
      id: 2,
      title: 'Trust',
      subtitle: 'Verifiable reputation and performance history',
      icon: Shield,
      detailTitle: 'Reputation is earned and portable',
      detailText: 'Performance history follows the agent across platforms. This helps good actors build credibility and filters out bad ones.',
      detailIcon: BadgeCheck,
    },
    {
      id: 3,
      title: 'Payments',
      subtitle: 'Programmable settlement tied to completed tasks',
      icon: Receipt,
      detailTitle: 'Programmable settlement tied to completed tasks',
      detailText: 'Every transaction generates a verifiable receipt. This links payment to performance and establishes accountability.',
      detailIcon: FileCheck,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-[#f5f3ff]/20 to-white"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#4C2A85] to-transparent mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}></div>

          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#18181b] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0ms' }}
          >
            Open Foundations for Agentic Commerce
          </h2>

          <p
            className={`text-center text-[#71717a] text-lg mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Autonomous agent commerce requires three primitives: discovery of services, verification of trust, and settlement of payments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/erc-8004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f3f0ff] text-[#4C2A85] px-6 py-3 rounded-xl flex items-center gap-3 card-shadow hover:card-shadow-hover transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="font-semibold">ERC-8004</span>
              <span className="text-sm text-[#a78bfa]">Agent Identity Standard</span>
            </a>

            <a
              href="https://www.x402.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f3f0ff] text-[#4C2A85] px-6 py-3 rounded-xl flex items-center gap-3 card-shadow hover:card-shadow-hover transition-all duration-200"
            >
              <span className="font-semibold">x402</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
            <div className="hidden md:flex absolute top-1/2 left-1/4 right-1/4 h-px items-center justify-between -translate-y-1/2 pointer-events-none">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/30 to-[#a78bfa]/30 relative overflow-hidden">
                <div className="absolute inset-0 animate-flow-dot"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#a78bfa]/30 via-[#a78bfa]/30 to-transparent relative overflow-hidden">
                <div className="absolute inset-0 animate-flow-dot" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {primitives.map((primitive, index) => {
              const Icon = primitive.icon;
              return (
                <div
                  key={primitive.id}
                  className={`bg-white p-10 rounded-2xl border border-[#e4e4e7] transition-all duration-300 cursor-pointer card-shadow relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${activeCard === primitive.id ? 'border-[#4C2A85] ring-2 ring-[#4C2A85]/20' : 'hover:border-[#a78bfa] hover:-translate-y-1 hover:card-shadow-hover'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  onClick={() => setActiveCard(activeCard === primitive.id ? null : primitive.id)}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0.5 bg-[#4C2A85] transition-all duration-300 group-hover:w-20"></div>

                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-[#f3f0ff] flex items-center justify-center transition-all duration-300 ${activeCard === primitive.id ? 'bg-[#4C2A85] scale-110' : 'group-hover:scale-110 group-hover:bg-[#4C2A85]'}`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${activeCard === primitive.id ? 'text-white' : 'text-[#4C2A85] group-hover:text-white'}`} />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-4 text-[#4C2A85] text-center transition-colors duration-300 group-hover:text-[#412471]">
                    {primitive.title}
                  </h3>

                  <p className="text-[#71717a] leading-relaxed text-center">
                    {primitive.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8 mt-12 relative">
            {primitives.map((_, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className={`w-px bg-gradient-to-b from-[#a78bfa]/30 to-[#a78bfa]/60 transition-all duration-700 relative overflow-hidden ${isVisible ? 'h-24 opacity-100' : 'h-0 opacity-0'}`}
                  style={{ transitionDelay: `${600 + index * 50}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-3 bg-[#4C2A85] animate-flow-down"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {primitives.map((primitive, index) => {
              const DetailIcon = primitive.detailIcon;
              return (
                <div
                  key={primitive.id}
                  className={`bg-white p-8 rounded-2xl border-l-4 transition-all duration-300 card-shadow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${activeCard === primitive.id ? 'border-[#4C2A85] bg-[#f5f3ff] ring-2 ring-[#4C2A85]/20' : 'border-[#e4e4e7] hover:border-[#4C2A85] hover:bg-[#fafafa]'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <DetailIcon className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-300 ${activeCard === primitive.id ? 'text-[#4C2A85]' : 'text-[#a78bfa]'}`} />
                    <h4 className="font-display text-lg font-bold text-[#18181b]">
                      {primitive.detailTitle}
                    </h4>
                  </div>
                  <p className="text-[#71717a] leading-relaxed">
                    {primitive.detailText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeCoreSection;
