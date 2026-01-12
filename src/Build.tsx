import { ExternalLink } from 'lucide-react';

function Build() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] pt-24 pb-20">
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4C2A85]">
              Build Trustless Agents
            </h1>
            <p className="text-lg md:text-xl text-[#71717a] leading-relaxed max-w-3xl mx-auto">
              Allow agents, tooling, and networks to communicate, transact, and coordinate openly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-16">
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">Quickstart</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Build autonomous agents with built-in trust and payments. Choose your path below to integrate 8004 for reputation or x402 for payment infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-[#4C2A85] text-white hover:bg-[#412471] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover">
                    Start with 8004
                  </button>
                  <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-150 bg-white card-shadow">
                    Start with x402
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-16 mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-10 border border-[#e4e4e7] card-shadow hover:card-shadow-hover transition-shadow duration-200">
                  <h3 className="font-display text-4xl font-bold mb-6 text-[#4C2A85]">8004</h3>

                  <p className="text-lg text-[#3f3f46] leading-relaxed mb-8">
                    8004 is an Ethereum standard that introduces a trust layer for the open agent economy
                  </p>

                  <h4 className="font-display text-xl font-bold mb-6 text-[#18181b]">Get started</h4>

                  <ol className="space-y-4 text-[#3f3f46]">
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">1.</span>
                      <span>Read the <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">EIP-8004 Specification<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">2.</span>
                      <span>Read the <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">A2A Specification<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">3.</span>
                      <span>See <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">Agent0 SDK Quickstart<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">4.</span>
                      <span>Check out <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">Reference Implementations<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">5.</span>
                      <span>See <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">Awesome-8004<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white rounded-2xl p-10 border border-[#e4e4e7] card-shadow hover:card-shadow-hover transition-shadow duration-200">
                  <h3 className="font-display text-4xl font-bold mb-6 text-[#4C2A85]">x402</h3>

                  <p className="text-lg text-[#3f3f46] leading-relaxed mb-8">
                    x402 is an open web standard that introduces payment-required primitives for agents, APIs, and software services using crypto-native settlement.
                  </p>

                  <h4 className="font-display text-xl font-bold mb-6 text-[#18181b]">Get started</h4>

                  <ol className="space-y-4 text-[#3f3f46]">
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">1.</span>
                      <span>Read the <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">x402 Specification<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">2.</span>
                      <span>Read <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">How x402 Works<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                    <li className="flex flex-col gap-2">
                      <div className="flex gap-3">
                        <span className="font-semibold text-[#4C2A85]">3.</span>
                        <span>Try the <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">Quickstart for Sellers<ExternalLink className="w-4 h-4" /></a></span>
                      </div>
                      <div className="ml-8 text-[#71717a]">
                        (enable payments for your API)
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-[#4C2A85]">4.</span>
                      <span>Explore <a href="#" className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1">Reference Implementations<ExternalLink className="w-4 h-4" /></a></span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">
                Demo Projects
              </h2>
              <p className="text-lg text-[#71717a]">
                Go 0-1 with Open Standards for your agent
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-24">
              <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7]">
                  <span className="text-[#71717a]">Babylon</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-[#18181b]">Babylon</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Brief description of the demo project and what it demonstrates.
                </p>
                <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                  View Demo
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7]">
                  <span className="text-[#71717a]">Demo 2</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-[#18181b]">Project Title</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Brief description of the demo project and what it demonstrates.
                </p>
                <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                  View Demo
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7]">
                  <span className="text-[#71717a]">Demo 3</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-[#18181b]">Project Title</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Brief description of the demo project and what it demonstrates.
                </p>
                <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                  View Demo
                </button>
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-[#18181b]">
                Supported Chains
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8 max-w-5xl mx-auto">
                {[
                  'ETH Sepolia',
                  'Base Sepolia',
                  'Linea Sepolia',
                  'Polygon Amoy',
                  'Hedera Testnet',
                  'HyperEVM Testnet'
                ].map((chain, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-[#f3f0ff] border-2 border-[#e4e4e7] flex items-center justify-center hover:border-[#4C2A85] transition-colors duration-200">
                      <div className="w-10 h-10 rounded-full bg-[#4C2A85]"></div>
                    </div>
                    <span className="text-sm font-medium text-[#3f3f46] text-center">{chain}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/erc-8004/erc-8004-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1"
              >
                see deployed 8004 contracts
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-[#e4e4e7] card-shadow">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">
                  Builder program waitlist
                </h2>
                <p className="text-[#71717a] leading-relaxed mb-6">
                  Get hands-on support, technical resources, and direct access to the experts.
                </p>
                <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 mb-6 bg-white card-shadow">
                  Apply now
                </button>
                <div className="w-full">
                  <img
                    src="/ta6.png"
                    alt="Agent building and securing the future"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[#e4e4e7] card-shadow">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">
                  Contribute
                </h2>
                <p className="text-[#71717a] leading-relaxed mb-6">
                  Contribute to the development of open standards.
                </p>
                <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 mb-6 bg-white card-shadow">
                  Contributor Framework
                </button>
                <div className="w-full">
                  <img
                    src="/ta7.png"
                    alt="Contribute illustration"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Build;
