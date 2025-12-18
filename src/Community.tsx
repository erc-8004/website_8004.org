function Community() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] pt-24 pb-20">
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-[#7c3aed]">
              The Trustless Agent Community
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#7c3aed]">5,500+</div>
                <p className="text-[#71717a] leading-relaxed">
                  developers on X in the first month
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#7c3aed]">#2</div>
                <p className="text-[#71717a] leading-relaxed">
                  most popular discussion of the year on Ethereum Magicians
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#7c3aed]">80+</div>
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
              <div className="bg-white rounded-2xl p-10 border border-[#e4e4e7] card-shadow">
                <div className="mb-10">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#18181b]">
                    Join the Community
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[#71717a] text-lg h-14 flex items-center text-center">Join Community</p>
                    <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#7c3aed] hover:text-[#7c3aed] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 whitespace-nowrap bg-white card-shadow hover:card-shadow-hover">
                      Telegram
                    </button>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[#71717a] text-lg h-14 flex items-center text-center">Community Events</p>
                    <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#7c3aed] hover:text-[#7c3aed] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 whitespace-nowrap bg-white card-shadow hover:card-shadow-hover">
                      Events calendar
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 border border-[#e4e4e7] card-shadow flex items-center justify-center">
                <div className="text-[#71717a] text-center">
                  <div className="w-24 h-24 bg-[#f3f0ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-lg">Illustration space</p>
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
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#7c3aed] transition-colors duration-200">
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
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#7c3aed] transition-colors duration-200">
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
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#7c3aed] transition-colors duration-200">
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
              <div key={index} className="w-14 h-14 rounded-full bg-white flex items-center justify-center card-shadow mx-auto overflow-hidden border border-[#e4e4e7] hover:border-[#7c3aed] transition-colors duration-200">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="text-center mb-20">
            <button className="border border-[#e4e4e7] text-[#18181b] hover:border-[#7c3aed] hover:text-[#7c3aed] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 mb-3 bg-white card-shadow hover:card-shadow-hover">
              Add your project
            </button>
            <p className="text-[#71717a]">
              Include your agent in our directory
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-20 bg-white rounded-2xl p-10 border border-[#e4e4e7] card-shadow">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#18181b] mb-6">
              Forum
            </h2>
            <p className="text-[#71717a] mb-8 text-lg">
              Join the conversation on Ethereum Magicians
            </p>
            <a
              href="https://ethereum-magicians.org/t/erc-8004-trustless-agents/25098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7c3aed] text-white hover:bg-[#6d28d9] px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover"
            >
              Visit Forum
            </a>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 mt-20 text-[#18181b]">Led by</h2>
          <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
            Leading organizations collaborating to build open standards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-4xl mx-auto mb-20">
            {[
              { name: 'Google', img: '/google.jpg' },
              { name: 'Coinbase', img: '/coinbase.png' },
              { name: 'Metamask', img: '/metamask.jpg' },
              { name: 'Ethereum Foundation', img: '/ef.jpg' },
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
