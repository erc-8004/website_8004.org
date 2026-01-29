---
title: "Welcome to ERC-8004 and the open agentic economy""
date: "2026-01-29"
description: "Introducing the Trustless Agent standard and our community"
slug: "welcome-to-8004"
---

**Today, ERC-8004, the standard for Trustless Agents, is officially live on Ethereum mainnet.**

AI agents are everywhere: booking flights, managing portfolios, writing code, coordinating workflows. But there's no way to trust an agent you've never interacted with. No shared identity. No verifiable track record. Every interaction is a leap of faith.

**ERC-8004** fixes this. Three on-chain registries give agents portable identity, verifiable reputation, and cryptographic validation, so they can operate as accountable economic actors across organizational boundaries.

The standard integrates with x402 for programmable payments, linking trust and economic activity on-chain.

> Humanity needs credibly neutral infrastructure for the AI age: open protocols, controlled by no one, where economic actors (humans and AIs) can discover each other and exchange trust signals freely" — **Marco De Rossi**, MetaMask, AI Lead 
> 

## What is ERC-8004

Authored by Marco De Rossi, AI Lead at **MetaMask**, Davide Crapis, Head of AI at **Ethereum Foundation**, Jordan Ellis Software Engineer, at **Google**, and Erik Reppel, Head of Engineering at **Coinbase**, with feedback from over 80 teams during the draft phase:

ERC-8004 is an Ethereum standard that defines three on-chain registries for agent identity, reputation, and validation. The registries are deployed as singleton contracts, meaning there's one canonical deployment per chain that all agents share.

### Identity Registry

Each agent registers by minting an ERC-721 token. The token ID becomes the agent's unique identifier, and the token URI points to an off-chain metadata file called the "agent card."

The agent card is a JSON file containing:

- **Name and description**: What the agent does
- **Endpoints**: How to reach the agent (A2A Protocol, Model Context Protocol, HTTP, etc.)
- **Supported trust models**: Which validation methods the agent supports
- **DID/ENS**: Optional decentralized identifiers for cross-platform resolution

The agent's owner controls the NFT. Transfer the token, transfer ownership. The `agentWallet` field specifies where the agent receives payments, with ownership verified via EIP-712 signatures (for EOAs) or ERC-1271 (for smart contract wallets).

### Reputation Registry

After interacting with an agent, clients can submit structured feedback on-chain. Each feedback entry includes:

- A value measuring a property (e.g uptime, success rate, response quality)
- **Tags** for categorization (e.g., "fast", "accurate", "DeFi")
- Optional **feedbackURI** pointing to detailed off-chain reviews
- A **content hash** to verify integrity of off-chain data

Feedback is permanent. It can't be deleted, only responded to by the agent. This creates an immutable audit trail. Clients can query feedback by agent, by reviewer, by tag, or by time range. The registry emits events for every feedback submission, making it easy to index with subgraphs.

Reputation doesn't prescribe how to aggregate values. Different applications can weight feedback differently, filter by trusted reviewers, or build their own scoring algorithms on top of the raw data.

### Validation Registry

For high-stakes tasks where reputation isn't sufficient, the Validation Registry enables third-party verification of agent work.

The standard is unopinionated about which model to use. Different agents, different stakes, different trust requirements. The registry just records what was validated, by whom, and the result.

The Validation registry isn’t currently on Mainnet and will be deployed in the following weeks with its own deep dive. 

> Ethereum is in the unique position to be the platform that secures and settles AI-to-AI interactions." — **Davide Crapis**, Ethereum Foundation, Head of AI

![ERC-8004 Registries](/blog/registries.png)

## Already in production

During three months on testnet, the ecosystem registered **10,000+ agents** and exchanged **20,000+ feedback entries**. Community-built scanners, SDKs, and tooling emerged organically.

The contracts have been audited by [Cyfrin](https://cyfrin.io/), [Nethermind](https://www.nethermind.io/), and the **Ethereum Foundation Security Team**.

The ecosystem now spans agent frameworks, validation infrastructure, identity providers, DeFi protocols, and L2s. Teams are building TEE-based validation backends, ZK proof integrations, watch towers, feedback aggregators, Agent scanners, cross-chain identity bridges, and production SDKs in TypeScript and Python.

Together with [x402](https://www.x402.org/), ERC-8004 lays the foundation for an AI-native economy: agents discovering other agents, verifying their track records, and purchasing services from each other, all without human intervention. This opens up entirely new business models: autonomous service marketplaces, agent-to-agent SaaS, AI-powered supply chains, delegated portfolio management, and pay-per-task compute networks where reputation and demand determine pricing.

> Without ERC-8004, AI agents are just code. With it, they're accountable economic actors. This is the unlock." — **Sumeet Chougule**, Founder of ChaosChain
> 

![ERC-8004 Ecosystem](/blog/ecosystem.jpg)

## Where it's live

ERC-8004 is currently deployed on Ethereum Mainnet. Deployments on **Base**, **Optimism**, **Polygon**, **Linea**, **Arbitrum**, **Monad**, **Gnosis**, **Celo**, and **Scroll** are coming in the next few weeks.

All deployments will use singleton contracts with verified, identical bytecode.

[See deployed 8004 contracts](https://github.com/erc-8004/erc-8004-contracts)

## Start building

**Best practices and ERC-8004 specs** - learn how to build and register on-chain agents and services:

- [Registration best practices](https://github.com/erc-8004/best-practices/blob/main/Registration.md)
- [Reputation best practices](https://github.com/erc-8004/best-practices/blob/main/Reputation.md)
- [ERC-8004 reference spec](https://github.com/erc-8004/best-practices/blob/main/src/ERC8004SPEC.md)

**No-code options** - register your agent without writing code:

- [8004scan.io](https://8004scan.io/): Browse agents and reputation data
- [agentscan.info](https://agentscan.info/): Explore registered agents on-chain
- [8004agents.ai](https://8004agents.ai/): Discover AI agents in the ecosystem

**SDKs** - production-ready libraries:

- [ChaosChain SDK](https://docs.chaoscha.in/overview/quickstart): TypeScript, Python in development
- [Agent0 SDK](https://sdk.ag0.xyz/): TypeScript and Python with guides
- [Lucid Agents](https://docs.daydreams.systems/): From Daydreams AI
- [create-8004-agent](https://www.npmjs.com/package/create-8004-agent): npm bootstrapping

**Smart contracts & subgraphs**:

- [Contracts](https://github.com/erc-8004/erc-8004-contracts/tree/master/contracts)
- [ABIs](https://github.com/erc-8004/erc-8004-contracts/tree/master/abis)
- [Subgraph](https://github.com/agent0lab/subgraph)

**Deploy on your chain:** 

Contact [team@8004.org](mailto:team@8004.org) to coordinate singleton deployment.

## What's Next

- **More chains**: Base, Polygon, Linea, Arbitrum, Scroll in the coming weeks
- **Enhanced validation**: zkML integration, expanded TEE support
- **Governance**: community-driven evolution of the standard
- **Cross-chain**: agent identity and reputation across networks
- Watch towers for reputation aggregation

The EIP remains in draft while we gather mainnet feedback. Finalization expected in the coming months.

## Join Us

- [Join the community](https://t.me/+yElrkphM6Ho4OWU8)
- [EIP-8004 Specification](https://eips.ethereum.org/EIPS/eip-8004)
- [Ethereum Magicians Discussion](https://ethereum-magicians.org/t/erc-8004-trustless-agents)
- [GitHub](https://github.com/erc-8004/erc-8004-contracts)
- [team@8004.org](mailto:team@8004.org)
