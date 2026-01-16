import { ExternalLink } from 'lucide-react';

function SmartContracts() {
  return (
    <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7]">
      <div className="max-w-full">
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-[#18181b]">Smart Contracts</h3>
        <p className="text-lg text-[#71717a] mb-6">
          See the official ERC-8004 reference materials
        </p>
        <div className="grid gap-6">
          <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
            <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Contracts</h4>
            <p className="text-[#71717a] mb-5 leading-relaxed">
              Access the official ERC-8004 Solidity source code.
            </p>
            <a href="https://github.com/neodaoist/erc8004/tree/main/src" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
              View contracts <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
            <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">ABIs</h4>
            <p className="text-[#71717a] mb-5 leading-relaxed">
              Get the compiled ABIs for integration with your applications.
            </p>
            <a href="https://github.com/neodaoist/erc8004/tree/main/out" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
              View ABIs <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
            <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Deployments</h4>
            <p className="text-[#71717a] mb-5 leading-relaxed">
              Find deployed contract addresses across supported chains.
            </p>
            <a href="https://github.com/neodaoist/erc8004#deployments" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
              View addresses <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartContracts;
