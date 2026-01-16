import { ExternalLink } from 'lucide-react';
import SDKs from './SDKs';
import SmartContracts from './SmartContracts';

function Build() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] pt-24 pb-20">
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-[5px]">
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
            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-full">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">No code solutions</h3>
                <p className="text-lg text-[#71717a] mb-8">
                  If you want to browse agents and reputation from a website, check out the community explorers
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">8004scan.io</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed text-sm">
                      Browse agents and reputation data.
                    </p>
                    <a href="https://8004scan.io" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Agentscan.info</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed text-sm">
                      Explore registered agents on-chain.
                    </p>
                    <a href="https://agentscan.info" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">8004agents.ai</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed text-sm">
                      Discover AI agents in the ecosystem.
                    </p>
                    <a href="https://8004agents.ai" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Supermission</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed text-sm">
                      Agent mission tracking and insights.
                    </p>
                    <a href="https://supermission.ai" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-full text-center">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-12 text-[#18181b]">
                  Supported Chains
                </h3>

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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7]">
                <div className="max-w-full">
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-[#18181b]">Subgraphs</h3>
                  <p className="text-lg text-[#71717a] mb-6">
                    Leverage a subgraph within your Trustless Agent
                  </p>
                  <div className="grid gap-6">
                    <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                      <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">GitHub Repository</h4>
                      <p className="text-[#71717a] mb-5 leading-relaxed">
                        Open-source ERC-8004 subgraphs maintained by Agent0 and The Graph Foundation across multiple chains.
                      </p>
                      <a href="https://github.com/agent0lab/subgraph" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                        View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                      <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Documentation</h4>
                      <p className="text-[#71717a] mb-5 leading-relaxed">
                        Learn how to query subgraphs and integrate them into your applications.
                      </p>
                      <a href="https://sdk.ag0.xyz/4-subgraph/4-1-intro/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                        Read docs <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <SmartContracts />
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-full">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">
                  Demo Projects
                </h3>
                <p className="text-lg text-[#71717a] mb-2">
                  Learn how to build with 8004
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                    <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7]">
                      <span className="text-[#71717a]">Create 8004 agent</span>
                    </div>
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create 8004 agent</h4>
                    <p className="text-[#71717a] mb-6 leading-relaxed">
                      Brief description of the demo project and what it demonstrates.
                    </p>
                    <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                      View Demo
                    </button>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                    <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                      <img src="/hf_20260116_112802_85fcb600-851a-4cea-9d76-6f317e5125e5-2.png" alt="Create 8004 scanner" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create 8004 scanner</h4>
                    <p className="text-[#71717a] mb-6 leading-relaxed">
                      Brief description of the demo project and what it demonstrates.
                    </p>
                    <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                      View Demo
                    </button>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                    <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7]">
                      <span className="text-[#71717a]">Create 8004 x x402 agent on Coinbase</span>
                    </div>
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create 8004 x x402 agent on Coinbase</h4>
                    <p className="text-[#71717a] mb-6 leading-relaxed">
                      Brief description of the demo project and what it demonstrates.
                    </p>
                    <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <SDKs />

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8 mt-16">
              <div className="max-w-full">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-[#18181b]">Deployment & Best Practices</h3>
                <p className="text-lg text-[#71717a] mb-6">
                  Deploy 8004 registries to your chain and understand best practice for building with 8004
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Deploy on your chain</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      Want to bring ERC-8004 to your blockchain? Contact us to coordinate singleton deployment.
                    </p>
                    <a href="mailto:team@8004.org" className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] bg-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 inline-block">
                      Email team@8004.org
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Building on ERC-8004</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      Review our recommended patterns for registration and implementation.
                    </p>
                    <a href="https://sdk.ag0.xyz/2-best-practices/2-1-intro/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      Best practices <span className="ml-0.5">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="hidden py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-[#e4e4e7] card-shadow max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">
                Builder program waitlist
              </h2>
              <p className="text-[#71717a] leading-relaxed mb-6">
                Get hands-on support, technical resources, and direct access to the experts.
              </p>
              <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 mb-6 bg-white card-shadow">
                Apply now
              </button>
              <div className="pt-8 border-t border-[#e4e4e7] flex items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/ta6.png"
                    alt="Agent building and securing the future"
                    className="w-48 h-auto rounded-xl"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#a1a1aa]">Details on the builder program coming soon</p>
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
