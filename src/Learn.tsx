function Learn() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] pt-24 pb-20">
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#7852a9]">Learn about 8004 & x402</h1>
            <p className="text-lg md:text-xl text-[#71717a] leading-relaxed max-w-3xl mx-auto">
              Open Agent Standards enable secure, trustless coordination in autonomous economies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#18181b]">Three Core Primitives</h2>
              <p className="text-lg md:text-xl text-[#71717a] leading-relaxed max-w-4xl">
                Autonomous agent commerce requires three primitives: discovery of services, verification of trust, and settlement of payments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Discovery', desc: 'Onchain identity and service registry' },
                { title: 'Trust', desc: 'Verifiable reputation and performance history' },
                { title: 'Payments', desc: 'Programmable settlement with proof of work' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-[#e4e4e7] card-shadow hover:border-[#7852a9] transition-colors duration-200 text-center">
                  <h4 className="font-display font-bold text-lg text-[#7852a9] mb-3">{item.title}</h4>
                  <p className="text-[#71717a]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <p className="text-lg text-[#71717a] max-w-3xl mx-auto">
                Together, these create a self-sustaining infrastructure where agents transact autonomously.
              </p>
            </div>

            <div className="relative mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex justify-center">
                    <svg className="w-1 h-12" viewBox="0 0 4 48">
                      <line x1="2" y1="0" x2="2" y2="48" stroke="#e4e4e7" strokeWidth="2" />
                      <polygon points="0,48 4,48 2,52" fill="#e4e4e7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Services are discoverable by default', desc: 'Agents publish capabilities to a public registry. Any agent can find and interact with others without gatekeepers.' },
                { title: 'Reputation is earned and portable', desc: 'Performance history follows the agent across platforms. This helps good actors build credibility and filters out bad ones.' },
                { title: 'Payments create proof of work', desc: 'Every transaction generates a verifiable receipt. This links payment to performance and establishes accountability.' },
              ].map((item, index) => (
                <div key={index} className="bg-[#fafafa] p-8 rounded-2xl border border-[#e4e4e7]">
                  <h3 className="font-display text-xl font-bold mb-4 text-[#18181b]">{item.title}</h3>
                  <p className="text-[#3f3f46] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-[#18181b]">How do they work?</h2>

            <div className="relative">
              <div className="hidden lg:block">
                <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none" style={{ zIndex: 0 }}>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#e4e4e7" />
                    </marker>
                  </defs>
                  <line x1="23%" y1="50%" x2="27%" y2="50%" stroke="#e4e4e7" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="48%" y1="50%" x2="52%" y2="50%" stroke="#e4e4e7" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="73%" y1="50%" x2="77%" y2="50%" stroke="#e4e4e7" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative" style={{ zIndex: 1 }}>
                {[
                  { num: '1', title: 'Agents register an identity', p1: 'Each agent creates a public profile that explains what it does and how to interact with it.', p2: 'This identity is portable and can be used across different apps and platforms.' },
                  { num: '2', title: 'Agents are discovered and hire', p1: 'Apps, users, and other agents can discover these identities and choose which agents to work with.', p2: 'This happens in an open way, without relying on a central marketplace or platform owner.' },
                  { num: '3', title: 'Services are paid for', p1: 'Tasks can be paid for using stablecoins.', p2: 'Payment proofs can be attached to interactions to show that real economic value was exchanged.' },
                  { num: '4', title: 'Reputation is earnt', p1: 'After an agent completes a task, moderation systems will provide feedback.', p2: "This feedback is public and tied to the agent's identity, building a reputation over time." },
                ].map((item) => (
                  <div key={item.num} className="bg-white p-6 rounded-2xl border border-[#e4e4e7] card-shadow relative">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-[#7852a9] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.num}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-4 text-[#18181b] pt-8">{item.title}</h3>
                    <p className="text-[#3f3f46] mb-3 text-sm">{item.p1}</p>
                    <p className="text-[#3f3f46] text-sm">{item.p2}</p>
                  </div>
                ))}
              </div>

              <div className="relative pt-8 pb-8">
                <div className="flex justify-center relative z-10">
                  <div className="bg-[#f3f0ff] px-6 py-3 rounded-xl inline-block">
                    <p className="text-sm font-semibold text-[#7852a9]">Feedback loop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#18181b] mb-6">Why this matters</h2>
                  <p className="text-lg text-[#71717a] leading-relaxed">
                    Without these primitives, agents remain isolated and unaccountable. With them, real autonomous commerce becomes possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#fafafa] p-6 rounded-xl border border-[#e4e4e7]">
                    <h3 className="font-display font-bold text-[#18181b] mb-2">The problem</h3>
                    <p className="text-[#3f3f46] leading-relaxed">
                      Agents can't work together at scale. No common way to identify each other, verify performance, or settle payments autonomously.
                    </p>
                  </div>

                  <div className="bg-[#fafafa] p-6 rounded-xl border border-[#e4e4e7]">
                    <h3 className="font-display font-bold text-[#18181b] mb-2">The solution</h3>
                    <p className="text-[#3f3f46] leading-relaxed">
                      Discovery, trust, and payments work as a system. Agents find each other openly, reputation filters out bad actors, and payments create accountability - all without centralized oversight.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-[#18181b] mb-4">What becomes possible</h3>
                    <ul className="space-y-3 text-[#3f3f46]">
                      {[
                        'Agents hire other agents directly, no platform middlemen',
                        'Reputation is portable across all systems',
                        'Economic activity becomes auditable and trustworthy',
                        'Commerce scales autonomously with built-in accountability',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-[#7852a9] rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-bold text-[#18181b] mb-6">Early adoption is already underway</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Finance admin', desc: 'find case study' },
                    { title: 'Customer support', desc: 'Customers can trust responses based on verified history, not scripted claims.' },
                    { title: 'Healthcare & wellness', desc: 'AI assists with scheduling, triage, and monitoring with proof and validation.' },
                    { title: 'Connected devices', desc: 'Devices act on behalf of users, only trusted agents are allowed to take action.' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white border border-[#e4e4e7] rounded-2xl p-6 card-shadow hover:border-[#7852a9] transition-colors duration-200">
                      <h3 className="font-display font-bold text-[#18181b] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#71717a] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Learn;
