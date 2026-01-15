import { ExternalLink } from 'lucide-react';

function SDKs() {
  return (
    <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#e4e4e7] mb-8">
      <div className="max-w-full">
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#18181b]">SDKs</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
            <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">ChaosChain</h4>
            <p className="text-[#71717a] mb-5 leading-relaxed">
              TypeScript SDK with Python support in development.
            </p>
            <a href="https://chaoschain.dev/docs" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
              View docs <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
            <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Agent0</h4>
            <p className="text-[#71717a] mb-5 leading-relaxed">
              TypeScript and Python SDKs with comprehensive guides.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://sdk.ag0.xyz/3-examples/3-1-quick-start/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                Quick start <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#d4d4d8]">|</span>
              <a href="https://sdk.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
                Full docs <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#e4e4e7]">
            <h4 className="font-display text-xl font-bold mb-3 text-[#18181b]">Lucid Agents</h4>
            <p className="text-[#71717a] mb-5 leading-relaxed">
              Alternative SDK approach from Daydreams AI.
            </p>
            <a href="https://github.com/daydreamsai/lucid-agents" target="_blank" rel="noopener noreferrer" className="text-[#4C2A85] hover:text-[#412471] font-semibold inline-flex items-center gap-1 text-sm">
              GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SDKs;
