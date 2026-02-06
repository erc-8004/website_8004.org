import { ArrowRight } from 'lucide-react';
import CommunityEvents from './CommunityEvents';
import CoAuthoredBy from './CoAuthoredBy';
import Footer from './Footer';

function Community() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] flex flex-col">
      <section className="relative pt-40 pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-[#4C2A85]">
              The Trustless Agent Community
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#4C2A85]">14,000+</div>
                <p className="text-[#71717a] leading-relaxed">
                  Registered agents
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#4C2A85]">21</div>
                <p className="text-[#71717a] leading-relaxed">
                  Chains
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#4C2A85]">20,000+</div>
                <p className="text-[#71717a] leading-relaxed">
                  Exchanged feedback
                </p>
              </div>
            </div>
            <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://t.me/ERC8004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4C2A85] text-white hover:bg-[#412471] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover"
              >
                Join Community
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#events"
                className="bg-white border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover"
              >
                See Events
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-10 border border-[#e4e4e7] card-shadow flex flex-col justify-center min-h-[320px]">
              </div>

              <div className="bg-white rounded-2xl border border-[#e4e4e7] card-shadow overflow-hidden min-h-[320px]">
                <img
                  src="/community2_under_5mb.jpg"
                  alt="Community building together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 text-[#18181b]">
            Builder perspectives
          </h2>
          <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
            Voices from the teams building with open agent standards
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] hover:border-[#4C2A85] transition-all duration-200 flex flex-col">
              <div className="text-[#4C2A85] text-4xl mb-4">"</div>
              <p className="text-[#3f3f46] mb-6 leading-relaxed flex-1">
                ERC-8004 provides foundational infrastructure for agent-based economic systems through three independent registries. This cements the foundation of trustless agent ecosystem.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                  <img src="/logos/altLayer.jpg" alt="AltLayer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#18181b]">YQ</p>
                  <p className="text-sm text-[#71717a]">AltLayer, Co-founder </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] hover:border-[#4C2A85] transition-all duration-200 flex flex-col">
              <div className="text-[#4C2A85] text-4xl mb-4">"</div>
              <p className="text-[#3f3f46] mb-6 leading-relaxed flex-1">
                Without ERC-8004, AI agents are just code. With it, they're accountable economic actors. This is the unlock.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                  <img src="/logos/ChaosChain.jpg" alt="Chaoschain" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#18181b]">Sumeet Chougule</p>
                  <p className="text-sm text-[#71717a]">Chaoschain, Founder </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] hover:border-[#4C2A85] transition-all duration-200 flex flex-col">
              <div className="text-[#4C2A85] text-4xl mb-4">"</div>
              <p className="text-[#3f3f46] mb-6 leading-relaxed flex-1">
                ERC-8004 extends the agents registered using Virtuals ACP to the broader EVM family, accelerating the development of a permissionless agentic economy.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                  <img src="/logos/Virtuals.jpg" alt="Virtuals" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#18181b]">Wee Kee</p>
                  <p className="text-sm text-[#71717a]">Virtuals, Core Contributor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-[#18181b]">
            With global builders and contributors
          </h3>

          <div className="grid grid-cols-4 md:grid-cols-9 gap-x-6 gap-y-8 max-w-5xl mx-auto mb-12">
            {[
              { name: '0xGasless', img: '/logos/0xGasless.jpg' },
              { name: 'AEON', img: '/logos/AEON.jpg' },
              { name: 'AiMo Network', img: '/logos/AiMo Network.jpg' },
              { name: 'Alias Labs', img: '/logos/Alias Labs.jpg' },
              { name: 'Ampersend', img: '/logos/Ampersend.jpg' },
              { name: 'AstraSync', img: '/logos/AstraSync.jpg' },
              { name: 'Base', img: '/logos/base.jpg' },
              { name: 'BlocRun', img: '/logos/BlocRun.jpg' },
              { name: 'Bond Credit', img: '/logos/bond.credit.jpg' },
              { name: 'Bonfires', img: '/logos/Bonfires.jpg' },
              { name: 'Cambrian', img: '/logos/CAmbrian.jpg' },
              { name: 'ChaosChain', img: '/logos/ChaosChain.jpg' },
              { name: 'Cod3x', img: '/logos/Cod3x.png' },
              { name: 'Collab.land', img: '/logos/Collab.land.jpg' },
              { name: 'Consensys', img: '/logos/Consensys.jpg' },
              { name: 'DappRadar', img: '/logos/DappRadar.png' },
              { name: 'DayDreams Agents', img: '/logos/DayDreamsAgents.png' },
              { name: 'EigenLayer', img: '/logos/EigenLayer.jpg' },
              { name: 'Ekai Labs', img: '/logos/Ekai Labs.jpg' },
              { name: 'ElizaOS', img: '/logos/ElizaOS.png' },
              { name: 'EmberAI', img: '/logos/EmberAI.jpg' },
              { name: 'ENS', img: '/logos/ENS.jpg' },
              { name: 'Ethos', img: '/logos/Ethos.jpg' },
              { name: 'Filecoin', img: '/logos/filecoin.jpg' },
              { name: 'Flashbots', img: '/logos/Flashbots.jpg' },
              { name: 'Giza Tech', img: '/logos/Giza Tech.jpg' },
              { name: 'HashgraphDAO', img: '/logos/hashgraphDAO.jpg' },
              { name: 'HelloMother', img: '/logos/HelloMother.jpg' },
              { name: 'Index Network', img: '/logos/Index Network.png' },
              { name: 'Inomy', img: '/logos/Inomy.png' },
              { name: 'iSek', img: '/logos/iSek.jpg' },
              { name: 'JoAI', img: '/logos/JoAI.jpg' },
              { name: 'Karum', img: '/logos/Karum.jpg' },
              { name: 'Khorus', img: '/logos/Khorus.jpg' },
              { name: 'Kudo', img: '/logos/Kudo.jpg' },
              { name: 'LineaBuild', img: '/logos/LineaBuild.png' },
              { name: 'Lyneth', img: '/logos/Lyneth.jpg' },
              { name: 'Mcpay Tech', img: '/logos/Mcpay Tech.jpg' },
              { name: 'Metamask', img: '/metamask.webp' },
              { name: 'MinaraAI', img: '/logos/MinaraAI.jpg' },
              { name: 'Near Protocol', img: '/logos/Near Protocol.jpg' },
              { name: 'Nevermined', img: '/logos/Nevermined.jpg' },
              { name: 'Oasis', img: '/logos/Oasis.jpg' },
              { name: 'Offchain Labs', img: '/logos/OffchainLabs.png' },
              { name: 'Olas', img: '/logos/Olas.jpg' },
              { name: 'OpenServ', img: '/logos/OpenServ.jpg' },
              { name: 'OttoWallet', img: '/logos/OttoWallet.jpg' },
              { name: 'Pakt.World', img: '/logos/Pakt.World.jpg' },
              { name: 'Phala', img: '/logos/Phala.png' },
              { name: 'Pinata Cloud', img: '/logos/Pinata Cloud.jpg' },
              { name: 'PoapStudio', img: '/logos/PoapStudio.jpg' },
              { name: 'Polygon', img: '/logos/polygon.jpg' },
              { name: 'Praxis', img: '/logos/Praxis.jpg' },
              { name: 'Questflow', img: '/logos/Questflow.jpg' },
              { name: 'Rena Labs', img: '/logos/Rena Labs.jpg' },
              { name: 'Scroll', img: '/logos/Scroll.jpg' },
              { name: 'Semantic', img: '/logos/semantic.png' },
              { name: 'Semiotic', img: '/logos/Semiotic.jpg' },
              { name: 'Silence Labs', img: '/logos/Silence Labs.jpg' },
              { name: 'SilverBackDeFi', img: '/logos/SilverBackDefi.jpg' },
              { name: 'Supermission', img: '/logos/Supermission.jpg' },
              { name: 'Terminal3', img: '/logos/Terminal3.jpg' },
              { name: 'Theoriq', img: '/logos/Theoriq (Alpha Protocol).jpg' },
              { name: 'ThirdWeb', img: '/logos/Thirdweb.jpg' },
              { name: 'Towns Protocol', img: '/logos/Towns Protocol.png' },
              { name: 'Trusta Network', img: '/logos/Trusta Network.jpg' },
              { name: 'Turf Network', img: '/logos/turf-network.jpeg' },
              { name: 'UltravioletaDAO', img: '/logos/UltravoiletaDAO .png' },
              { name: 'Unibase', img: '/logos/Unibase.jpg' },
              { name: 'Virtuals', img: '/logos/Virtuals.jpg' },
              { name: 'Warden Protocol', img: '/logos/Warden Protocol.jpg' },
              { name: 'Worldcoin', img: '/logos/Worldcoin.jpg' },
              { name: 'ZyfAI', img: '/logos/ZyfAI.jpg' },
            ].map((item, index) => (
              <div key={index} className="relative group flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow overflow-hidden border border-[#e4e4e7] group-hover:border-[#4C2A85] transition-colors duration-200">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://form.fillout.com/t/e8VGKbnf7Wus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 mb-3 bg-white card-shadow hover:card-shadow-hover"
            >
              Add your project
            </a>
            <p className="text-[#71717a]">
              Include your agent in our directory
            </p>
          </div>
        </div>
      </section>

      <CoAuthoredBy />

      <section id="events" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <CommunityEvents />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-[#18181b]">
            Still have questions?
          </h2>
          <p className="text-lg text-[#71717a] mb-8 max-w-2xl mx-auto">
            Join our community to connect with other builders and get answers to your questions.
          </p>
          <a
            href="https://t.me/ERC8004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4C2A85] text-white hover:bg-[#412471] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover"
          >
            Join Community
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Community;
