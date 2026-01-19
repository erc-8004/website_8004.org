import { Linkedin, Twitter } from 'lucide-react';
import Footer from './Footer';

interface TeamMember {
  name: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const authors: TeamMember[] = [
  {
    name: 'Marco De Rossi',
    image: '/team/marco-de-rossi.jpg',
    linkedin: 'https://www.linkedin.com/in/marcoderossi/',
    twitter: 'https://x.com/marco_derossi',
  },
  {
    name: 'Davide Crapis',
    image: '/team/davide-crapis.jpeg',
    linkedin: 'https://www.linkedin.com/in/davidecrapis/',
    twitter: 'https://x.com/DavideCrapis',
  },
];

const teamMembers: TeamMember[] = [
  {
    name: 'Ben C',
    image: '/team/ben-c.jpeg',
    linkedin: 'https://www.linkedin.com/in/kenkdoteth/',
    twitter: 'https://x.com/0xKenk',
  },
  {
    name: 'Isha Sangani',
    image: '/team/isha-sangani.jpeg',
    linkedin: 'https://www.linkedin.com/in/isha-sangani/',
  },
  {
    name: 'Jessy H',
    image: '/team/jessy-h.jpeg',
    linkedin: 'https://www.linkedin.com/in/jessyio/',
    twitter: 'https://x.com/13yearoldvc',
  },
  {
    name: 'Leonard Tan',
    image: '/team/leonard-tan.jpeg',
    linkedin: 'https://www.linkedin.com/in/lentan/',
  },
  {
    name: 'Vitto Rivabella',
    image: '/team/vitto-rivabella.jpeg',
    linkedin: 'https://www.linkedin.com/in/vittorio-rivabella/',
    twitter: 'https://x.com/VittoStack',
  },
];

function PersonCard({ person }: { person: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-28 h-28 rounded-full bg-[#f4f4f5] overflow-hidden mb-4 card-shadow">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-display text-lg font-semibold text-[#18181b] mb-3">
        {person.name}
      </h3>
      <div className="flex items-center gap-3">
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {person.twitter && (
          <a
            href={person.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717a] hover:text-[#4C2A85] transition-colors duration-150"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 gradient-radial" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4C2A85]">
            Team
          </h1>
          <p className="text-lg md:text-xl text-[#71717a] max-w-3xl mx-auto leading-relaxed">
            The people building open standards for the agentic web
          </p>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 text-[#18181b]">
            Authors
          </h2>
          <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
            The authors behind the ERC-8004 standard
          </p>
          <div className="flex flex-wrap justify-center gap-16 max-w-4xl mx-auto">
            {authors.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6 text-[#18181b]">
            Team Members
          </h2>
          <p className="text-center text-[#71717a] text-lg mb-16 max-w-3xl mx-auto">
            Contributors and builders driving the ecosystem forward
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-4xl mx-auto">
            {teamMembers.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Team;
