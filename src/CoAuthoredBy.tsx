function CoAuthoredBy() {
  const organizations = [
    { name: 'Metamask', img: '/metamask.webp' },
    { name: 'Ethereum Foundation', img: '/logos/chainLogos/eth-mainnet.svg' },
    { name: 'Google', img: '/google.jpg' },
    { name: 'Coinbase', img: '/coinbase.png' },
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 text-[#18181b]">
          Co-authored by
        </h2>
        <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
          Leading organizations collaborating to build open standards
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-4xl mx-auto">
          {organizations.map((org, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center card-shadow overflow-hidden">
                <img src={org.img} alt={org.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-medium text-[#18181b]">{org.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoAuthoredBy;
