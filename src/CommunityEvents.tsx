import { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Users } from 'lucide-react';
import eventsData from './data/events.json';

interface Event {
  id: string;
  title: string;
  img_url: string | null;
  date: string;
  url: string;
  created_at: string;
  updated_at: string;
}

function CommunityEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const parseDate = (dateString: string): Date => {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      const fullYear = `20${year}`;
      return new Date(`${fullYear}-${month}-${day}`);
    }
    return new Date(dateString);
  };

  const fetchEvents = () => {
    try {
      setLoading(true);
      // Import events from JSON and sort by date
      const sortedEvents = [...eventsData].sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        // Descending: newer dates first
        return dateB.getTime() - dateA.getTime();
      });
      console.log('Sorted events:', sortedEvents.map(e => ({ title: e.title, date: e.date })));
      setEvents(sortedEvents);
      setError(null);
    } catch (err) {
      setError('Unable to load events');
      console.error('Error loading events:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      const fullYear = `20${year}`;
      const date = new Date(`${fullYear}-${month}-${day}`);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    }
    return dateString;
  };

  const isUpcoming = (dateString: string): boolean => {
    const eventDate = parseDate(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#18181b] mb-4 text-center">
          Community Events
        </h2>
        <p className="text-[#71717a] mb-10 text-lg text-center">
          Join us at upcoming events and meetups
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#e4e4e7] overflow-hidden card-shadow animate-pulse"
            >
              <div className="h-40 bg-[#f4f4f5]" />
              <div className="p-5">
                <div className="h-4 bg-[#f4f4f5] rounded mb-3 w-24" />
                <div className="h-5 bg-[#f4f4f5] rounded mb-2 w-full" />
                <div className="h-4 bg-[#f4f4f5] rounded w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || events.length === 0) {
    return (
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#18181b] mb-4 text-center">
          Community Events
        </h2>
        <p className="text-[#71717a] mb-10 text-lg text-center">
          Join us at upcoming events and meetups
        </p>
        <div className="bg-white rounded-2xl border border-[#e4e4e7] p-12 text-center card-shadow">
          <Users className="w-12 h-12 text-[#d4d4d8] mx-auto mb-4" />
          <p className="text-[#71717a] text-lg mb-2">No upcoming events scheduled</p>
          <p className="text-[#a1a1aa] text-sm">Check back soon for new events!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#18181b] mb-4 text-center">
        Community Events
      </h2>
      <p className="text-[#71717a] mb-10 text-lg text-center">
        Join us at upcoming events and meetups
      </p>
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#e4e4e7] overflow-hidden card-shadow transition-all duration-200 hover:border-[#4C2A85] hover:card-shadow-hover flex-shrink-0 w-[300px]"
            >
              <div className="h-40 bg-[#f4f4f5] relative overflow-hidden">
                {event.img_url ? (
                  <img
                    src={event.img_url}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4C2A85]/10 to-[#4C2A85]/5">
                    <Calendar className="w-12 h-12 text-[#4C2A85]/30" />
                  </div>
                )}
                <div className={`absolute top-3 right-3 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium ${
                  isUpcoming(event.date) 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-gray-500/90 text-white'
                }`}>
                  {isUpcoming(event.date) ? 'Upcoming' : 'Ended'}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#18181b] mb-3 line-clamp-2 group-hover:text-[#4C2A85] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#71717a] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#4C2A85] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Event</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityEvents;
