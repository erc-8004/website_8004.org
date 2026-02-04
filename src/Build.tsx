import { ExternalLink } from 'lucide-react';
import BuildCTA from './BuildCTA';
import Footer from './Footer';

function Build() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] flex flex-col">
      <section className="relative pt-40 pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-[5px]">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4C2A85]">
              Build AI Agents With ERC-8004
            </h1>
            <p className="text-lg md:text-xl text-[#71717a] leading-relaxed max-w-3xl mx-auto">
            Learn how to build on-chain Trustless Agents using the ERC-8004 standard. Give your agents identity, trust, verifiability on Ethereum.
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
                Register Trustless Agent without writing code. Browse hundreds of agents and their reputation on the following scanners                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">trust8004.xyz</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed text-sm">
                      Discover and manage AI agents registered on-chain.
                    </p>
                    <a href="https://www.trust8004.xyz/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12 mb-8">
              <div className="max-w-full text-center">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-12 text-[#18181b]">
                  Supported chains
                </h3>

                <div className="flex flex-wrap justify-center gap-12 mb-8 max-w-5xl mx-auto">
                  {[
                    { name: 'Ethereum', logo: '/logos/chainLogos/eth-mainnet.svg', comingSoon: false },
                    { name: 'Base', logo: '/logos/chainLogos/base-mainnet.jpg', comingSoon: false },
                    { name: 'Polygon', logo: '/logos/chainLogos/matic-mainnet.svg', comingSoon: false },
                    { name: 'Monad', logo: '/logos/chainLogos/monad.jpg', comingSoon: false },
                    { name: 'BNB Chain', logo: '/logos/chainLogos/bnb-bnb-logo.png', comingSoon: false },
                    { name: 'Scroll', logo: '/logos/chainLogos/scroll.jpg', comingSoon: false },
                    { name: 'Gnosis', logo: '/logos/chainLogos/gnosis.jpg', comingSoon: false },
                    { name: 'Linea', logo: '/logos/chainLogos/linea-mainnet.svg', comingSoon: true },
                    { name: 'Arbitrum', logo: '/logos/chainLogos/arb-mainnet.svg', comingSoon: true },
                    { name: 'Optimism', logo: '/logos/chainLogos/optimism.jpg', comingSoon: true },
                    { name: 'Avalanche', logo: '/logos/chainLogos/avalanche.png', comingSoon: true },
                    { name: 'Abstract', logo: '/logos/chainLogos/abstract.jpg', comingSoon: true },
                    { name: 'Celo', logo: '/logos/chainLogos/celo.jpg', comingSoon: true },
                    { name: 'Taiko', logo: '/logos/chainLogos/taiko.png', comingSoon: true },
                  ].map((chain, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                      <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center overflow-hidden transition-colors duration-200 ${chain.comingSoon ? 'bg-[#f4f4f5] border-[#e4e4e7] opacity-50' : 'bg-white border-[#e4e4e7] hover:border-[#4C2A85]'}`}>
                        <img src={chain.logo} alt={chain.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className={`text-sm font-medium text-center ${chain.comingSoon ? 'text-[#a1a1aa]' : 'text-[#3f3f46]'}`}>{chain.name}</span>
                        {chain.comingSoon && <span className="text-xs text-[#a1a1aa]">coming soon</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://github.com/erc-8004/erc-8004-contracts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4C2A85] hover:text-[#412471] underline inline-flex items-center gap-1"
                >
                  See deployed 8004 contracts
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-full">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">SDKs and libraries</h3>
                <p className="text-lg text-[#71717a] mb-8">
                  Several community projects are working on SDKs
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Agent0 SDK</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      TypeScript and Python SDKs with comprehensive guides.
                    </p>
                    <a href="https://sdk.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      View docs <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">ChaosChain</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      TypeScript SDK with Python support in development.
                    </p>
                    <a href="https://docs.chaoscha.in/overview/quickstart" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      View docs <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create-8004-agent</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      Alternative SDK approach from Daydreams AI.
                    </p>
                    <a href="https://www.npmjs.com/package/create-8004-agent" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      View docs <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Lucid Agents</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      Alternative SDK approach from Daydreams AI.
                    </p>
                    <a href="https://docs.daydreams.systems/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      View docs <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-full">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">
                  Demo projects
                </h3>
                <p className="text-lg text-[#71717a] mb-2">
                Learn how to register an agent using ERC-8004, build a scanner, or start accepting payments using the x402 standard. 
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover flex flex-col">
                    <div className="aspect-[5/4] bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                      <img src="/hf_20260116_132416_4a98434d-799b-49a1-bb49-6303ff0eb193-2.png" alt="Create 8004 agent" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create an ERC-8004 agent</h4>
                    <p className="text-[#71717a] mb-6 leading-relaxed flex-1">
                      Build an AI Agent from scratch using the ERC-8004 standard.
                    </p>
                    <a href="https://github.com/Eversmile12/erc-8004-demo-agent" target="_blank" rel="noopener noreferrer" className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white mt-auto text-center block">
                      View Demo
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover flex flex-col">
                    <div className="aspect-[5/4] bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                      <img src="/image.png" alt="Create 8004 scanner" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create an ERC-8004 scanner</h4>
                    <p className="text-[#71717a] mb-6 leading-relaxed flex-1">
                      Build an explorer to browse agents and their reputation on-chain.
                    </p>
                    <a href="https://github.com/Eversmile12/erc-8004-agents-explorer-demo" target="_blank" rel="noopener noreferrer" className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white mt-auto text-center block">
                      View Demo
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] transition-colors duration-200 card-shadow flex flex-col opacity-60">
                    <div className="aspect-[5/4] bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                      <img src="/hf_20260116_112802_85fcb600-851a-4cea-9d76-6f317e5125e5-2.png" alt="Create 8004 x x402 agent on Coinbase" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create an ERC-8004 agent with x402</h4>
                    <p className="text-[#71717a] mb-6 leading-relaxed flex-1">
                      Utilize ERC-8004 with x402, a standard for programmable payments on Ethereum.
                    </p>
                    <button disabled className="border border-[#e4e4e7] text-[#a1a1aa] px-6 py-2.5 rounded-xl text-sm font-semibold w-full bg-[#fafafa] mt-auto cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </div>
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
                      <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Repository & endpoints</h4>
                      <p className="text-[#71717a] mb-5 leading-relaxed">
                        Open-source ERC-8004 subgraphs maintained by Agent0 across multiple chains.
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

              <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7]">
                <div className="max-w-full">
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-[#18181b]">Smart contracts</h3>
                  <p className="text-lg text-[#71717a] mb-6">
                    See the official ERC-8004 reference materials
                  </p>
                  <div className="grid gap-6">
                    <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                      <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Contracts</h4>
                      <p className="text-[#71717a] mb-5 leading-relaxed">
                        Access the official ERC-8004 Solidity source code.
                      </p>
                      <a href="https://github.com/erc-8004/erc-8004-contracts/tree/master/contracts" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                        View contracts <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                      <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">ABIs</h4>
                      <p className="text-[#71717a] mb-5 leading-relaxed">
                        Get the compiled ABIs for integration with your applications.
                      </p>
                      <a href="https://github.com/erc-8004/erc-8004-contracts/tree/master/abis" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                        View ABIs <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                      <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Deployments</h4>
                      <p className="text-[#71717a] mb-5 leading-relaxed">
                        Find deployed contract addresses across supported chains.
                      </p>
                      <a href="https://github.com/erc-8004/erc-8004-contracts/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                        View addresses <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7]">
              <div className="max-w-full">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-[#18181b]">Deployment and best practices</h3>
                <p className="text-lg text-[#71717a] mb-6">
                  Deploy 8004 registries to your chain and understand best practice for building with 8004
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Building on ERC-8004</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      Review our recommended patterns for registration and implementation.
                    </p>
                    <a href="https://github.com/erc-8004/best-practices" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                      Best practices <span className="ml-0.5">&rarr;</span>
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Deploy on your chain</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      Want to bring ERC-8004 to your blockchain? Contact us to coordinate singleton deployment.
                    </p>
                    <a href="mailto:team@8004.org" className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] bg-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 inline-block">
                      Email team@8004.org
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

      <BuildCTA />

      <Footer />
    </div>
  );
}

export default Build;
