import { useState, useEffect, useRef } from 'react';
import { Search, Shield, Receipt, Globe, BadgeCheck, FileCheck, Layers, CreditCard, Plus } from 'lucide-react';

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
      subtitle: '8004 establishes a composable method for agent discovery.',
      icon: Search,
      detailTitle: 'Services are discoverable by default',
      detailText: 'Agents publish capabilities to a public registry. Any agent can find and interact with others without gatekeepers.',
      detailIcon: Globe,
    },
    {
      id: 2,
      title: 'Trust',
      subtitle: 'Reputation is essential for autonomous commerce and the machine to machine economy.',
      icon: Shield,
      detailTitle: 'Reputation is earned and portable',
      detailText: 'Performance history follows the agent across platforms. This helps good actors build credibility and filters out bad ones.',
      detailIcon: BadgeCheck,
    },
    {
      id: 3,
      title: 'Payment',
      subtitle: 'x402 is an open payment protocol that enables programmable stablecoin transfers.',
      icon: Receipt,
      detailTitle: 'Payments create proof of work',
      detailText: 'Every transaction generates a verifiable receipt. This links payment to performance and establishes accountability.',
      detailIcon: FileCheck,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-[#f5f3ff]/20 to-white"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}></div>

          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#18181b] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0ms' }}
          >
            The Open Foundations for Agent Commerce
          </h2>

          <p
            className={`text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto leading-relaxed transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Through open standards like ERC-8004 and x402, we're creating the infrastructure for autonomous agents to discover each other, build reputation, and transact securely.
          </p>

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
                  className={`bg-white p-10 rounded-2xl border border-[#e4e4e7] transition-all duration-300 cursor-pointer card-shadow relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${activeCard === primitive.id ? 'border-[#7c3aed] ring-2 ring-[#7c3aed]/20' : 'hover:border-[#a78bfa] hover:-translate-y-1 hover:card-shadow-hover'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  onClick={() => setActiveCard(activeCard === primitive.id ? null : primitive.id)}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0.5 bg-[#7c3aed] transition-all duration-300 group-hover:w-20"></div>

                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-[#f3f0ff] flex items-center justify-center transition-all duration-300 ${activeCard === primitive.id ? 'bg-[#7c3aed] scale-110' : 'group-hover:scale-110 group-hover:bg-[#7c3aed]'}`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${activeCard === primitive.id ? 'text-white' : 'text-[#7c3aed] group-hover:text-white'}`} />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-4 text-[#7c3aed] text-center transition-colors duration-300 group-hover:text-[#6d28d9]">
                    {primitive.title}
                  </h3>

                  <p className="text-[#71717a] leading-relaxed text-center">
                    {primitive.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {primitives.map((primitive, index) => {
              const DetailIcon = primitive.detailIcon;
              return (
                <div
                  key={primitive.id}
                  className={`bg-white p-8 rounded-2xl border-l-4 transition-all duration-300 card-shadow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${activeCard === primitive.id ? 'border-[#7c3aed] bg-[#f5f3ff] ring-2 ring-[#7c3aed]/20' : 'border-[#e4e4e7] hover:border-[#7c3aed] hover:bg-[#fafafa]'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <DetailIcon className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-300 ${activeCard === primitive.id ? 'text-[#7c3aed]' : 'text-[#a78bfa]'}`} />
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

          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <button className="flex items-center gap-3 bg-white border-2 border-[#7c3aed] text-[#7c3aed] px-8 py-4 rounded-xl font-semibold hover:bg-[#7c3aed] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Layers className="w-5 h-5" />
              <span>ERC-8004</span>
              <span className="text-sm font-normal opacity-70">Agent Identity Standard</span>
            </button>
            <button className="flex items-center gap-3 bg-white border-2 border-[#7c3aed] text-[#7c3aed] px-8 py-4 rounded-xl font-semibold hover:bg-[#7c3aed] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <CreditCard className="w-5 h-5" />
              <span>x402</span>
              <span className="text-sm font-normal opacity-70">Payments Standard</span>
            </button>
            <button className="flex items-center gap-2 bg-white border-2 border-[#7c3aed] text-[#7c3aed] px-8 py-4 rounded-xl font-semibold hover:bg-[#7c3aed] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Plus className="w-5 h-5" />
              <span>Upcoming Standards</span>
            </button>
          </div>

          <div
            className={`flex justify-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '1100ms' }}
          >
            <button className="bg-white border-2 border-[#18181b] text-[#18181b] px-12 py-4 rounded-xl font-semibold hover:bg-[#18181b] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeCoreSection;
