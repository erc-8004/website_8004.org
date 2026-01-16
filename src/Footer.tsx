import { Twitter, Github, Send, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-16 bg-white border-t border-[#e4e4e7]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/8004_logo_purple copy.png" alt="Trustless Agents" className="h-10 mb-4" />
            <p className="text-[#71717a] text-sm leading-relaxed">
              Building the open, trustless agentic web
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#18181b] mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('build')}
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm"
                >
                  Build
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('community')}
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm"
                >
                  Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#18181b] mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/ERC8004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Join Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/trustlessagents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  Follow on Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ethereum/ERCs/blob/master/ERCS/erc-8004.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#18181b] mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:team@trustlessagents.org"
                  className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150 text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e4e4e7] text-center">
          <p className="text-[#71717a] text-sm">
            <span className="text-[#4C2A85] font-semibold">Trustless Agents</span> | Building the open, trustless agentic web
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
