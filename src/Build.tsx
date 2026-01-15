import { ExternalLink } from 'lucide-react';

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
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">Smart Contracts</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Access the official ERC-8004 contracts, ABIs, and deployment addresses directly.
                </p>
                <div className="space-y-3">
                  <p className="text-[#52525b]">
                    <a href="https://github.com/neodaoist/erc8004/tree/main/src" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      Contracts <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[#d4d4d8] mx-2">|</span>
                    <a href="https://github.com/neodaoist/erc8004/tree/main/out" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      ABIs <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[#d4d4d8] mx-2">|</span>
                    <a href="https://github.com/neodaoist/erc8004#deployments" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      Deployment addresses <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">No code solutions</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  If you want to browse agents and reputation from a website, check out the community explorers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://8004scan.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 bg-white card-shadow">
                    8004scan.io
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://agentscan.info" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 bg-white card-shadow">
                    Agentscan.info
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://8004agents.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 bg-white card-shadow">
                    8004agents.ai
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://supermission.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 bg-white card-shadow">
                    Supermission
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">SDKs</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Several community projects provide SDKs for developers:
                </p>
                <div className="space-y-3">
                  <p className="text-[#52525b]">
                    <span className="text-[#18181b] font-semibold">ChaosChain</span> offers a TypeScript SDK with Python support in development.{' '}
                    <a href="https://chaoschain.dev/docs" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      View documentation <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                  <p className="text-[#52525b]">
                    <span className="text-[#18181b] font-semibold">Agent0</span> provides both TypeScript and Python SDKs with comprehensive guides and examples.{' '}
                    <a href="https://sdk.ag0.xyz/3-examples/3-1-quick-start/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      Quick start <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[#d4d4d8] mx-2">|</span>
                    <a href="https://sdk.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      Full docs <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                  <p className="text-[#52525b]">
                    <span className="text-[#18181b] font-semibold">Lucid Agents</span> from Daydreams AI offers an alternative SDK approach.{' '}
                    <a href="https://github.com/daydreamsai/lucid-agents" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      GitHub <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">Subgraphs</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Agent0, in collaboration with The Graph Foundation, maintains open-source ERC-8004 subgraphs across multiple chains.
                </p>
                <div className="space-y-3 mb-6">
                  <p className="text-[#52525b]">
                    View supported chains and endpoints in the GitHub repository.{' '}
                    <a href="https://github.com/agent0-xyz/erc8004-subgraphs" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-medium inline-flex items-center gap-1">
                      GitHub <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                  <p className="text-[#52525b]">
                    Want to list your subgraph? Open a PR or contact{' '}
                    <a href="mailto:team@ag0.xyz" className="text-[#4C2A85] hover:text-[#412471] font-medium">team@ag0.xyz</a>.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://thegraph.com/explorer" target="_blank" rel="noopener noreferrer" className="bg-[#4C2A85] text-white hover:bg-[#412471] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover text-center">
                    Go to subgraphs
                  </a>
                  <a href="https://sdk.ag0.xyz/4-subgraph/4-1-intro/" target="_blank" rel="noopener noreferrer" className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-150 bg-white card-shadow text-center inline-flex items-center justify-center gap-1">
                    Documentation <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
              <div className="max-w-full">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#18181b]">Deployment & Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
                    <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Deploy on your chain</h4>
                    <p className="text-[#71717a] mb-5 leading-relaxed">
                      Want to bring ERC-8004 to your blockchain? Contact us to coordinate singleton deployment.
                    </p>
                    <a href="mailto:team@8004.org" className="bg-[#4C2A85] text-white hover:bg-[#412471] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover inline-block">
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

            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#18181b]">
                Demo Projects
              </h2>
              <p className="text-lg text-[#71717a]">
                Go 0-1 with 8004
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-24">
              <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7]">
                  <span className="text-[#71717a]">Create 8004 agent</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create 8004 agent</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Brief description of the demo project and what it demonstrates.
                </p>
                <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                  View Demo
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200 card-shadow hover:card-shadow-hover">
                <div className="aspect-video bg-[#fafafa] rounded-xl mb-6 flex items-center justify-center border border-[#e4e4e7]">
                  <span className="text-[#71717a]">Create 8004 scanner</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create 8004 scanner</h3>
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
                <h3 className="font-display text-xl font-bold mb-3 text-[#18181b]">Create 8004 x x402 agent on Coinbase</h3>
                <p className="text-[#71717a] mb-6 leading-relaxed">
                  Brief description of the demo project and what it demonstrates.
                </p>
                <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 w-full bg-white">
                  View Demo
                </button>
              </div>
            </div>

            <div className="text-center hidden">
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
