import { useState, useEffect, useRef } from 'react';
import { Zap, Network, Shield } from 'lucide-react';

function X402Section() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      id: 1,
      title: 'Payment Protocol',
      subtitle: 'HTTP status codes for payments',
      icon: Zap,
    },
    {
      id: 2,
      title: 'Agent-to-Agent',
      subtitle: 'Direct machine payment flows',
      icon: Network,
    },
    {
      id: 3,
      title: 'Proof of Work',
      subtitle: 'Verifiable payment receipts',
      icon: Shield,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#4C2A85] to-transparent mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}></div>

          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#18181b] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0ms' }}
          >
            What is x402?
          </h2>

          <p
            className={`text-center text-[#71717a] text-lg mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            x402 is a payment protocol that enables agents to transact autonomously using HTTP status codes, creating verifiable proof of work for every transaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className={`bg-white p-10 rounded-2xl border border-[#e4e4e7] transition-all duration-300 card-shadow hover:border-[#a78bfa] hover:-translate-y-1 hover:card-shadow-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#f3f0ff] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4C2A85]">
                      <Icon className="w-8 h-8 text-[#4C2A85] transition-colors duration-300 group-hover:text-white" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-4 text-[#4C2A85] text-center">
                    {feature.title}
                  </h3>

                  <p className="text-[#71717a] leading-relaxed text-center">
                    {feature.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://www.x402.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4C2A85] text-white hover:bg-[#412471] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover"
            >
              Learn More About x402
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default X402Section;
