import { Link } from 'react-router-dom';

function BuildCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#4C2A85]">
          Build Trustless Agents
        </h2>
        <p className="text-center text-[#71717a] text-lg mb-12 max-w-2xl mx-auto">
          Get started now, or leave your details to qualify for future Trustless Agents builder program.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Link
            to="/build"
            className="w-full sm:w-auto bg-[#4C2A85] text-white hover:bg-[#412471] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover text-center"
          >
            Build Now
          </Link>
          <Link
            to="/community"
            className="w-full sm:w-auto bg-white border border-[#e4e4e7] text-[#18181b] hover:border-[#4C2A85] hover:text-[#4C2A85] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-150 card-shadow hover:card-shadow-hover text-center"
          >
            Join Community
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BuildCTA;
