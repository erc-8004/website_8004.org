# ERC-8004 is Live on Ethereum Mainnet

**Today, ERC-8004, the standard for Trustless Agents, is officially live on Ethereum mainnet.**

AI agents are everywhere: booking flights, managing portfolios, writing code, coordinating workflows. But there's no way to trust an agent you've never interacted with. No shared identity. No verifiable track record. Every interaction is a leap of faith.

ERC-8004 fixes this. Three on-chain registries give agents portable identity, verifiable reputation, and cryptographic validation, so they can operate as accountable economic actors across organizational boundaries.

> "Without ERC-8004, AI agents are just code. With it, they're accountable economic actors. This is the unlock."  
> — **Sumeet Chougule**, Founder of ChaosChain

## What is ERC-8004

ERC-8004 defines three on-chain registries:

1. **Identity Registry**: Agents register via ERC-721 tokens linked to metadata describing their capabilities, endpoints, and trust preferences.
2. **Reputation Registry**: Clients submit feedback (scores, tags, reviews) after interacting with agents, creating a permanent on-chain track record.
3. **Validation Registry**: Third-party validators can verify agent work using stake-backed re-execution, zero-knowledge proofs, or TEE attestations.

Together, these registries create neutral infrastructure for agent discovery, trust, and verification.

## What You Can Build

### Give Your Agent a Portable Identity

The **Identity Registry** issues each agent a unique ERC-721 token linked to an off-chain metadata file (the "agent card"). This card contains the agent's name, capabilities, supported protocols (A2A, MCP, DID, ENS), and trust preferences.

Agents own their identity. No platform lock-in. Transfer the NFT, transfer ownership.

### Let Users Verify Track Records

The **Reputation Registry** lets clients, whether humans or other agents, submit structured feedback after interacting with an agent: scores (0-100), tags, and optional detailed reviews with content hashes for integrity.

Reputation accumulates on-chain. It's composable, queryable, and permanent. Build recommendation systems, filter by category, or let users sort agents by rating before they interact.

### Add Cryptographic Guarantees

For high-stakes tasks, reputation isn't enough. The **Validation Registry** enables third-party validators to verify agent work using:

- **Stake-backed re-execution**: validators put skin in the game
- **Zero-knowledge proofs**: cryptographic verification of computation  
- **TEE attestations**: hardware-backed execution guarantees

The standard is unopinionated. You choose the trust model that matches your risk.

## Already in Production

Teams are already building on ERC-8004:

- **Agent frameworks** like ElizaOS, Olas, and Virtuals are integrating 8004 identities so their agents can be discovered and rated across platforms
- **Infrastructure providers** like Phala and EigenLayer are exploring validation backends for high-assurance agent tasks
- **Wallets** like MetaMask and Coinbase are looking at agent identity as part of their user experience

During three months on testnet, the ecosystem registered **10,000+ agents** and exchanged **20,000+ feedback entries**. Multiple community-built scanners and SDKs emerged organically.

## Security First

The contracts have been audited by **Cyfrin**, **Nethermind**, and the **Ethereum Foundation Security Team**. We incorporated findings from all three audits before mainnet deployment.

ERC-8004 was authored by contributors from MetaMask, Ethereum Foundation, Google, and Coinbase, with feedback from over 80 teams during the draft phase.

## Where It's Live

ERC-8004 is deployed on **Ethereum**, **Base**, and **Polygon**. Deployments on **Linea**, **Arbitrum**, and **Scroll** are coming in the next few weeks.

All deployments use singleton contracts with verified, identical bytecode. [View deployed addresses →](https://github.com/erc-8004/erc-8004-contracts)

The standard integrates with [x402](https://www.x402.org/) for programmable payments, linking trust and economic activity on-chain.

## Start Building

**No-code options** — register your agent without writing code:

- [8004scan.io](https://8004scan.io): Browse agents and reputation data
- [agentscan.info](https://agentscan.info): Explore registered agents on-chain
- [8004agents.ai](https://8004agents.ai): Discover AI agents in the ecosystem
- [supermission.ai](https://supermission.ai): Agent mission tracking and insights

**SDKs** — production-ready libraries:

- [ChaosChain SDK](https://docs.chaoscha.in/overview/quickstart): TypeScript, Python in development
- [Agent0 SDK](https://sdk.ag0.xyz/): TypeScript and Python with guides
- [Lucid Agents](https://docs.daydreams.systems/): From Daydreams AI
- [create-8004-agent](https://www.npmjs.com/package/create-8004-agent): npm bootstrapping

**Smart contracts & subgraphs**:

- [Contracts](https://github.com/erc-8004/erc-8004-contracts/tree/master/contracts) | [ABIs](https://github.com/erc-8004/erc-8004-contracts/tree/master/abis) | [Subgraph](https://github.com/agent0lab/subgraph) | [Best practices](https://github.com/erc-8004/best-practices)

**Deploy on your chain** — contact [team@8004.org](mailto:team@8004.org) to coordinate singleton deployment.

## What's Next

- **More chains**: Linea, Arbitrum, Scroll in the coming weeks
- **Enhanced validation**: zkML integration, expanded TEE support
- **Governance**: community-driven evolution of the standard
- **Cross-chain**: agent identity and reputation across networks

The EIP remains in draft while we gather mainnet feedback. Finalization expected in the coming months.

## Join Us

- [8004.org](https://8004.org)
- [EIP-8004 Specification](https://eips.ethereum.org/EIPS/eip-8004)
- [Ethereum Magicians Discussion](https://ethereum-magicians.org/t/erc-8004-trustless-agents)
- [GitHub](https://github.com/erc-8004/erc-8004-contracts)
- [team@8004.org](mailto:team@8004.org)

---

The infrastructure for accountable AI agents is live. [Start building →](https://8004.org/build)
