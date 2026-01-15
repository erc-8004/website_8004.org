import CommunityEvents from './CommunityEvents';

function Community() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] pt-24 pb-20">
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-[#4C2A85]">
              The Trustless Agent Community
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#4C2A85]">5,500+</div>
                <p className="text-[#71717a] leading-relaxed">
                  developers on X in the first month
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#4C2A85]">#2</div>
                <p className="text-[#71717a] leading-relaxed">
                  most popular discussion of the year on Ethereum Magicians
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#4C2A85]">80+</div>
                <p className="text-[#71717a] leading-relaxed">
                  builder groups interested in implementing specs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
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
            Builder Perspectives
          </h2>
          <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
            Voices from the teams building with open agent standards
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] hover:border-[#4C2A85] transition-all duration-200">
              <div className="text-[#4C2A85] text-4xl mb-4">"</div>
              <p className="text-[#3f3f46] mb-6 leading-relaxed">
                ERC-8004 creates the trust layer we've been missing. It's the foundation for agent-to-agent commerce at scale.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                  <img src="/olas.jpg" alt="Olas" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#18181b]">David Minarsch</p>
                  <p className="text-sm text-[#71717a]">Olas</p>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] hover:border-[#4C2A85] transition-all duration-200">
              <div className="text-[#4C2A85] text-4xl mb-4">"</div>
              <p className="text-[#3f3f46] mb-6 leading-relaxed">
                Open standards are how we build an ecosystem, not just products. This is infrastructure for the next decade.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                  <img src="/phala.png" alt="Phala" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#18181b]">Marvin Tong</p>
                  <p className="text-sm text-[#71717a]">Phala Network</p>
                </div>
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] hover:border-[#4C2A85] transition-all duration-200">
              <div className="text-[#4C2A85] text-4xl mb-4">"</div>
              <p className="text-[#3f3f46] mb-6 leading-relaxed">
                We finally have a common language for agent identity. This unlocks interoperability across the entire space.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e4e4e7] overflow-hidden">
                  <img src="/cambrian.jpg" alt="Cambrian" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#18181b]">James Gannon</p>
                  <p className="text-sm text-[#71717a]">Cambrian</p>
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

          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { name: 'Pakt.world', img: '/pakt.world.jpg' },
              { name: 'ZyfAI', img: '/zyfai.jpg' },
              { name: 'Alias Labs', img: '/alias_labs.jpg' },
              { name: 'Zaara AI', img: '/zaara_ai.jpg' },
              { name: 'Inomy', img: '/inomy.png' },
              { name: 'ENS', img: '/ens.jpg' },
              { name: 'Questflow', img: '/questflow.jpg' },
              { name: '42', img: '/42.jpg' },
              { name: 'Pinata Cloud', img: '/pinata_cloud.jpg' },
              { name: 'Oasis', img: '/oasis.jpg' },
              { name: 'Flashbots', img: '/flashbots.jpg' },
              { name: 'Phala', img: '/phala.png' },
            ].map((item, index) => (
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { name: 'EmerBai', img: '/emerbai.jpg' },
              { name: 'Eternal AI', img: '/eternal_ai_.jpg' },
              { name: 'Thirdweb', img: '/thirdweb.jpg' },
              { name: 'Khoros', img: '/khoros.jpg' },
              { name: 'McPay Tech', img: '/mcpay_tech.jpg' },
              { name: 'Nevermined', img: '/nevermined.jpg' },
              { name: 'Giza Tech', img: '/giza_tech.jpg' },
              { name: 'Cod3x', img: '/cod3x.png' },
              { name: 'OpenServ', img: '/openserv.jpg' },
              { name: 'Praxis', img: '/praxis copy.jpg' },
              { name: 'Semantic', img: '/semantic.png' },
              { name: 'Rena Labs', img: '/rena_labs.jpg' },
            ].map((item, index) => (
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { name: '2TA', img: '/2ta.png' },
              { name: 'Olas', img: '/olas.jpg' },
              { name: 'Collab.Land', img: '/collab.land.jpg' },
              { name: 'Eliza', img: '/eliza_profile_black_1000px.png' },
              { name: 'Cambrian', img: '/cambrian.jpg' },
              { name: 'Ultraviolet DAO', img: '/ultravoiletadao_.png' },
              { name: '0xGasless', img: '/0xgasless.jpg' },
              { name: 'Aeon', img: '/aeon.jpg' },
              { name: 'Bond Credit', img: '/bond.credit.jpg' },
              { name: 'Bonfires', img: '/bonfires.jpg' },
              { name: 'Filecoin', img: '/filecoin.jpg' },
              { name: 'EKAI Labs', img: '/ekai_labs.jpg' },
              { name: 'ChaosChain', img: '/chaoschain.jpg' },
              { name: 'HashgraphDAO', img: '/hashgraphdao.jpg' },
              { name: 'Maximize', img: '/maximize.jpg' },
              { name: 'Index Network', img: '/index_network.png' },
              { name: 'Isek', img: '/isek.jpg' },
              { name: 'Karum', img: '/karum.jpg' },
            ].map((item, index) => (
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { name: 'Semiotic', img: '/semiotic.jpg' },
              { name: 'Silence Labs', img: '/silence_labs.jpg' },
              { name: 'Supermission', img: '/supermission.jpg' },
              { name: 'Terminal3', img: '/terminal3.jpg' },
              { name: 'Theoriq', img: '/theoriq_(alpha_protocol).jpg' },
              { name: 'Virtuals', img: '/virtuals.jpg' },
            ].map((item, index) => (
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#4C2A85] transition-colors duration-200">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="text-center mb-20">
            <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 mb-3 bg-white card-shadow hover:card-shadow-hover">
              Add your project
            </button>
            <p className="text-[#71717a]">
              Include your agent in our directory
            </p>
          </div>

          <CommunityEvents />

          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 mt-20 text-[#18181b]">Led by</h2>
          <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
            Leading organizations collaborating to build open standards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-4xl mx-auto mb-20">
            {[
              { name: 'Metamask', img: '/metamask.jpg' },
              { name: 'Ethereum Foundation', img: '/ef.jpg' },
              { name: 'Google', img: '/google.jpg' },
              { name: 'Coinbase', img: '/coinbase.png' },
            ].map((org, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center card-shadow overflow-hidden border border-[#e4e4e7]">
                  <img src={org.img} alt={org.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-[#18181b]">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
