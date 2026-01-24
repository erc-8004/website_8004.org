---
title: "Welcome to ERC-8004"
date: "2026-01-18"
description: "Introducing the Trustless Agent standard and our community"
slug: "welcome-to-8004"
---

# ERC-8004 is Live on Ethereum Mainnet

**Today, ERC-8004, the standard for Trustless Agents, is officially live on Ethereum mainnet.**

AI agents are everywhere: booking flights, managing portfolios, writing code, coordinating workflows. But there's no way to trust an agent you've never interacted with. No shared identity. No verifiable track record. Every interaction is a leap of faith.

ERC-8004 fixes this. Three on-chain registries give agents portable identity, verifiable reputation, and cryptographic validation, so they can operate as accountable economic actors across organizational boundaries.

> "Without ERC-8004, AI agents are just code. With it, they're accountable economic actors. This is the unlock."  
> — **Marco De Rossi**, MetaMask, AI Lead

## What is ERC-8004

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
- A **score** TBD TBD TBD
- **Tags** for categorization (e.g., "fast", "accurate", "DeFi")
- Optional **feedbackURI** pointing to detailed off-chain reviews
- A **content hash** to verify integrity of off-chain data

Feedback is permanent. It can't be deleted, only responded to by the agent. This creates an immutable audit trail. Clients can query feedback by agent, by reviewer, by tag, or by time range. The registry emits events for every feedback submission, making it easy to index with subgraphs.

Reputation doesn't prescribe how to aggregate scores. Different applications can weight feedback differently, filter by trusted reviewers, or build their own scoring algorithms on top of the raw data.

### Validation Registry

For high-stakes tasks where reputation isn't sufficient, the Validation Registry enables third-party verification of agent work.

The flow works like this:
1. An agent (or client) submits a **validation request** specifying the validator address, a request URI containing task details, and a content hash
2. The validator executes the verification off-chain using their chosen method
3. The validator submits a **validation response** with a score (0-100), optional tags, and evidence URI/hash

The standard supports multiple trust models:
- **Stake-backed re-execution**: Validators stake tokens and re-run the agent's task. If results match, validation passes. If not, stake can be slashed.
- **Zero-knowledge proofs**: For deterministic computations, validators can submit zkML proofs that verify the agent's output without revealing inputs.
- **TEE attestations**: Validators running in trusted execution environments (SGX, TDX) can provide hardware-backed attestations.

The standard is unopinionated about which model to use. Different agents, different stakes, different trust requirements. TBD TBD The registry just records what was validated, by whom, and the result.

![ERC-8004 Registries](/public/registries.jpeg)

> "Without ERC-8004, AI agents are just code. With it, they're accountable economic actors. This is the unlock."  
> — **Davide Crapis**, Ethereum Foundation, Head of AI

## Already in Production

During three months on testnet, the ecosystem registered **10,000+ agents** and exchanged **20,000+ feedback entries**. Community-built scanners, SDKs, and tooling emerged organically.

The ecosystem now spans agent frameworks, validation infrastructure, identity providers, DeFi protocols, and L2s. Teams are building TEE-based validation backends, ZK proof integrations, cross-chain identity bridges, and production SDKs in TypeScript and Python.

> "Without ERC-8004, AI agents are just code. With it, they're accountable economic actors. This is the unlock."  
> — **Sumeet Chougule**, Founder of ChaosChain

![ERC-8004 Ecosystem](/public/ecosystem.jpg)


## ERC-8004 is security first

The contracts have been audited by **Cyfrin**, **Nethermind**, and the **Ethereum Foundation Security Team**. We incorporated findings from all three audits before mainnet deployment.

ERC-8004 was authored by contributors from MetaMask, Ethereum Foundation, Google, and Coinbase, with feedback from over 80 teams during the draft phase.

## Where It's Live

ERC-8004 is deployed on **Ethereum**, **Base**, and **Polygon**. Deployments on **Linea**, **Arbitrum**, and **Scroll** are coming in the next few weeks.

All deployments use singleton contracts with verified, identical bytecode. [View deployed addresses →](https://github.com/erc-8004/erc-8004-contracts)

The standard integrates with [x402](https://www.x402.org/) for programmable payments, linking trust and economic activity on-chain.

## Start Building

**No-code options** - register your agent without writing code:

- [8004scan.io](https://8004scan.io): Browse agents and reputation data
- [agentscan.info](https://agentscan.info): Explore registered agents on-chain
- [8004agents.ai](https://8004agents.ai): Discover AI agents in the ecosystem
- [supermission.ai](https://supermission.ai): Agent mission tracking and insights

**SDKs** - production-ready libraries:

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
- Watch towers for reputation TBD TBD 

The EIP remains in draft while we gather mainnet feedback. Finalization expected in the coming months.

## Join Us

- [8004.org](https://8004.org)
- [EIP-8004 Specification](https://eips.ethereum.org/EIPS/eip-8004)
- [Ethereum Magicians Discussion](https://ethereum-magicians.org/t/erc-8004-trustless-agents)
- [GitHub](https://github.com/erc-8004/erc-8004-contracts)
- [team@8004.org](mailto:team@8004.org)
