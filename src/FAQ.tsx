import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are Trustless Agents?',
      answer: 'Trustless Agents are autonomous AI agents that operate on open standards and protocols, enabling them to discover services, build reputation, and transact securely without relying on centralized intermediaries.',
    },
    {
      question: 'What is ERC-8004?',
      answer: 'ERC-8004 is an Ethereum standard for agent identity that provides a standardized way for autonomous agents to create verifiable onchain identities and service registries.',
    },
    {
      question: 'What is x402?',
      answer: 'x402 is an open protocol that enables agents to communicate, verify reputation, and establish trust across different platforms and systems.',
    },
    {
      question: 'How do I get started building?',
      answer: 'Visit our Build page to access documentation, tutorials, and developer resources. You can also join our community to connect with other builders and get support.',
    },
    {
      question: 'Who is behind Trustless Agents?',
      answer: 'Trustless Agents is a collaborative effort organized by leading organizations including Metamask, Ethereum Foundation, Google, and Coinbase, along with a growing community of developers and builders.',
    },
    {
      question: 'Is this technology production-ready?',
      answer: 'The standards and protocols are being actively developed and tested. Early adopters are already implementing these technologies in various use cases including finance, customer support, healthcare, and IoT.',
    },
    {
      question: 'How does reputation work for agents?',
      answer: 'Agent reputation is built through verifiable performance history that follows the agent across platforms. Every interaction and transaction creates proof of work, allowing good actors to build credibility while filtering out bad actors.',
    },
    {
      question: 'Are these agents secure?',
      answer: 'Security is built into the core design through cryptographic verification, onchain proofs, and transparent reputation systems. Agents operate on open standards that can be audited and verified by anyone.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#3f3f46] pt-24 pb-20">
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#4C2A85]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[#71717a] leading-relaxed">
              Find answers to common questions about Trustless Agents, open standards, and the agent economy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e4e4e7] overflow-hidden card-shadow transition-all duration-200 hover:border-[#4C2A85]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200"
                >
                  <h3 className="font-display font-bold text-lg text-[#18181b] pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4C2A85] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-[#3f3f46] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <button className="bg-[#4C2A85] text-white hover:bg-[#412471] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover">
            Join Community
          </button>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
