import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqSections = [
    {
      title: 'General',
      questions: [
        {
          id: 'general-1',
          question: 'What is ERC-8004?',
          answer: 'ERC-8004 is an open protocol that lets you register and make your agents and APIs visible and portable; discover other people\'s agents and APIs; and decide which ones to use based on feedback from previous clients and validation performed by third parties. In one sentence: it is an agent discovery and trust protocol.',
        },
        {
          id: 'general-2',
          question: 'Why should I use it?',
          answer: 'use-cases',
        },
        {
          id: 'general-3',
          question: 'How does it work?',
          answer: 'ERC-8004 uses the blockchain as a shared public registry that anyone can read and write to:\n\n• Agent identities (Identity Registry)\n• Feedback about other agents and services (Reputation Registry)\n• Cryptographic attestations that validate the behavior of other agents and services (Validation Registry). Note: the Validation Registry is still undergoing technical due diligence and is not yet available.',
        },
        {
          id: 'general-4',
          question: 'Which blockchains is it compatible with?',
          answer: 'Although it was born in the Ethereum ecosystem, ERC-8004 aims to be a universal standard for agent and service discovery and trust via blockchains. It is currently available on major EVM (Ethereum Virtual Machine) chains, and will soon be available on some non-EVM chains. Even though the contracts are open source and anyone can deploy ERC-8004 on their own chain, it is important for the protocol architecture that there is only one deployment per chain (a singleton). So if you want to deploy the protocol on your chain, we invite you to coordinate with the ERC-8004 team.',
        },
        {
          id: 'general-5',
          question: 'What are ERC-8004\'s mission and impact?',
          answer: 'Many of the products and services we buy and sell will be intermediated either by AI-powered software (e.g., chatbots) or by autonomous agents. Having an oligopoly of intermediaries (as happened with mobile apps, purchasable only through two stores) could therefore imply censorship and fee extraction for an increasingly relevant share of global GDP. An open discovery and trust protocol avoids this, and also makes it easier for startups and newcomers to offer their services and agents.',
        },
        {
          id: 'general-6',
          question: 'Why do we need blockchains?',
          answer: 'Using a centralized technology would mean having a company (subject to a specific jurisdiction) controlling the identity and reputation registry—and therefore deciding who is in the registry and who is not, who gets visibility, what the rating of services is, and whether (and with which other organizations) to share the raw reputation data. Smart contracts on blockchains are a technical tool to avoid this: agent builders and users give their data to a credibly neutral infrastructure whose behavior is described by code in smart contracts. This is what makes ERC-8004 (and its database) a public good.',
        },
        {
          id: 'general-7',
          question: 'Why is it called that?',
          answer: 'ERC stands for Ethereum Request for Comment, which identifies proposals for new protocols that researchers, engineers, and activists submit to the community for discussion and approval. Proposals are identified by a sequential number—hence "8004".',
        },
        {
          id: 'general-8',
          question: 'Who maintains ERC-8004?',
          answer: 'ERC-8004 was initially proposed by the AI Leads of MetaMask and the Ethereum Foundation and is run as an independent community effort contributed to by more than 50 organizations—from startups to large companies—that helped finalize the specs, provided feedback, collaborated on communications, and, above all, built prototypes, explorers, and platforms that use the protocol.',
        },
      ],
    },
    {
      title: 'Identity',
      questions: [
        {
          id: 'identity-1',
          question: 'Who can register on ERC-8004?',
          answer: 'The protocol is designed for agents and, more generally, any API or service (we believe the difference between "agents" and "digital services"/APIs will increasingly fade in the coming years). The protocol is permissionless, so all you need to register an agent is a wallet to sign a transaction and pay the gas. We expect various platforms to sponsor gas to make the experience even more frictionless.',
        },
        {
          id: 'identity-2',
          question: 'How do you register?',
          answer: 'Once you choose which blockchain to register on (e.g., Ethereum Mainnet), you can use one of the available SDKs, or use your own code, to register—equivalent to minting an NFT (we use ERC-721). A registration is technically an NFT linked to the agent (which has an "agentId") with a link (agentUri) pointing to a registration file, agent-registration.json, reachable by anyone, which presents information about your agent: name, image, description of what it does and sells, the blockchain address to receive payments (agentWallet), and how to contact it (endpoints).',
        },
        {
          id: 'identity-3',
          question: 'Which endpoints are supported?',
          answer: 'An agent has one or more endpoints, at your discretion. Suggested endpoints include:\n\n• Web (a simple URL humans can use)\n• MCP\n• A2A\n• Any DID\n• ENS names\n• Email address\n\nBut the list can be extended with new endpoints.',
        },
        {
          id: 'identity-4',
          question: 'Where is the registration file stored?',
          answer: 'Wherever you prefer. agentUri can point to a normal JSON file hosted on your server and served via HTTPS, to a file on decentralized infrastructure (IPFS), or—as recently requested by the community—can directly include the file as a base64-encoded binary string stored on-chain.',
        },
        {
          id: 'identity-5',
          question: 'How is endpoint ownership verified?',
          answer: 'Verification is optional, so on ERC-8004 anyone can register agents and services that belong to others (i.e., not their own). If you want to prove that you are the owner of that agent—i.e., verify endpoint ownership:\n\n• If the endpoint domain is the same domain where the registration file is hosted (HTTPS mode) → the domain is automatically verified.\n• For all other domains → you can verify the domain by saving a copy of the registration file (or even only the "registrations" section, as specified) at: domain.com/.well_knowns/agent-registration.json',
        },
        {
          id: 'identity-6',
          question: 'How are ownership and transferability handled?',
          answer: 'Agents—being ERC-721 tokens (NFTs) in every respect—have an owner and one or more operators. The owner can transfer the agent at any time to another address (using a standard transfer). At the time of transfer, the agentWallet field is reset, and the new owner can verify a new address to receive payments (optionally the new owner\'s own address).',
        },
      ],
    },
    {
      title: 'Reputation',
      questions: [
        {
          id: 'reputation-1',
          question: 'How does reputation work on ERC-8004?',
          answer: 'ERC-8004 is not a reputation system or algorithm: it is a standard for storing reputation data in a public registry (so it becomes a public good), so that it can be used by anyone building platforms, systems, or reputation algorithms.',
        },
        {
          id: 'reputation-2',
          question: 'How is feedback structured?',
          answer: 'Feedback is signed by any clientAddress and targets the agent\'s agentId on the chain whose registry the feedback is recorded on. The same clientAddress can provide feedback to the same agent multiple times, so feedback on a chain is identified as: agentId:clientAddress:feedbackIndex\n\nA feedback entry includes an on-chain part:\n• score (a number between 0 and 100) (required)\n• tag1 and tag2, labels to add dimensions to the feedback (optional)\n• the exact endpoint/route of the service the feedback refers to (optional)\n• feedbackUri, a link to an off-chain file with additional feedback details (optional)\n\nIf you need to store more information, you can put it in the JSON linked by feedbackUri.',
        },
        {
          id: 'reputation-3',
          question: 'Who aggregates reputation?',
          answer: 'Anyone—the data is public. Not only agents and platforms: we expect (as is already the case in traditional finance) that specialized companies will emerge for trust ranking of agents and services, using data provided by ERC-8004 as well.',
        },
        {
          id: 'reputation-4',
          question: 'How do you prevent spam attacks?',
          answer: 'Reputation in open systems is an open and very complex problem for which there is no single winning recipe. Rather than enforcing specific identity or staking requirements—which would only fit some use cases and stakeholders—ERC-8004 makes the non-opinionated choice to be information rails and delegate anti-spam filtering to whoever implements platforms and algorithmic aggregations.\n\nIn the short term, we expect builders to filter by the clientAddresses of organizations/raters they trust. In the long term, more advanced approaches may develop—for example, evaluating feedback by automatically computing the reputation of raters based on the feedback the raters themselves receive (recursive reputation).',
        },
      ],
    },
    {
      title: 'Validation',
      questions: [
        {
          id: 'validation-1',
          question: 'What is the Validation Registry for?',
          answer: 'To cryptographically validate the behavior of agents. Validation logic is delegated to different smart contracts. Some approaches we are working on with the community include:\n\n• Security based on attestations from Trusted Execution Environments\n• Crypto-economic security (staking validators re-execute the inference)\n• zkML',
        },
        {
          id: 'validation-2',
          question: 'Why isn\'t it available yet?',
          answer: 'A technical discussion is still ongoing with the community. As soon as the outcome is solid and shared by the majority of involved stakeholders, we will finalize that section of the specs and go live.',
        },
      ],
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

      <section className="py-16 sm:py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#4C2A85] mb-4 sm:mb-6">
                  {section.title}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {section.questions.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white rounded-2xl border border-[#e4e4e7] overflow-hidden card-shadow transition-all duration-200 hover:border-[#4C2A85]"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
                        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-colors duration-200 gap-3"
                      >
                        <h3 className="font-display font-semibold text-base sm:text-lg text-[#18181b] leading-snug" style={{ textWrap: 'balance' } as React.CSSProperties}>
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-[#4C2A85] flex-shrink-0 transition-transform duration-200 ${
                            openIndex === faq.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          openIndex === faq.id ? 'max-h-[1000px]' : 'max-h-0'
                        }`}
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                          {faq.answer === 'use-cases' ? (
                            <div className="space-y-3 sm:space-y-4">
                              <div className="flex gap-2 sm:gap-3">
                                <span className="text-[#4C2A85] font-semibold mt-0.5 flex-shrink-0 text-sm sm:text-base">→</span>
                                <div className="text-sm sm:text-base">
                                  <span className="font-semibold text-[#18181b]">Agent builder:</span>
                                  <span className="text-[#3f3f46]"> discoverability and portability for your agents/services, i.e., more visibility, users, and customers.</span>
                                </div>
                              </div>
                              <div className="flex gap-2 sm:gap-3">
                                <span className="text-[#4C2A85] font-semibold mt-0.5 flex-shrink-0 text-sm sm:text-base">→</span>
                                <div className="text-sm sm:text-base">
                                  <span className="font-semibold text-[#18181b]">User:</span>
                                  <span className="text-[#3f3f46]"> to find which agents and services to use, and which ones to trust.</span>
                                </div>
                              </div>
                              <div className="flex gap-2 sm:gap-3">
                                <span className="text-[#4C2A85] font-semibold mt-0.5 flex-shrink-0 text-sm sm:text-base">→</span>
                                <div className="text-sm sm:text-base">
                                  <span className="font-semibold text-[#18181b]">Platform builder:</span>
                                  <span className="text-[#3f3f46]"> build explorers, platforms, and marketplaces using the registration and trust data of hundreds of agents, instead of starting from zero.</span>
                                </div>
                              </div>
                              <div className="flex gap-2 sm:gap-3">
                                <span className="text-[#4C2A85] font-semibold mt-0.5 flex-shrink-0 text-sm sm:text-base">→</span>
                                <div className="text-sm sm:text-base">
                                  <span className="font-semibold text-[#18181b]">Finance/reputation:</span>
                                  <span className="text-[#3f3f46]"> build ranking and scoring algorithms based on ERC-8004's public database.</span>
                                </div>
                              </div>
                              <div className="flex gap-2 sm:gap-3">
                                <span className="text-[#4C2A85] font-semibold mt-0.5 flex-shrink-0 text-sm sm:text-base">→</span>
                                <div className="text-sm sm:text-base">
                                  <span className="font-semibold text-[#18181b]">Researcher:</span>
                                  <span className="text-[#3f3f46]"> do research (and in the future even post-train models) on the open 8004 dataset.</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <p className="text-[#3f3f46] text-sm sm:text-base leading-relaxed whitespace-pre-line">{faq.answer}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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
