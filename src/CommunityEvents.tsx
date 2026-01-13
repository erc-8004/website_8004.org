import { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Users } from 'lucide-react';

interface LumaEvent {
  id: string;
  name: string;
  start_at: string;
  end_at: string;
  cover_url: string | null;
  url: string;
  geo_address_info?: {
    city?: string;
    country?: string;
  } | null;
  timezone: string;
}

function CommunityEvents() {
  const [events, setEvents] = useState<LumaEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/luma-events`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const data = await response.json();
      setEvents(data.events || []);
    } catch (err) {
      setError('Unable to load events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getLocation = (event: LumaEvent) => {
    if (event.geo_address_info?.city) {
      return `${event.geo_address_info.city}${event.geo_address_info.country ? `, ${event.geo_address_info.country}` : ''}`;
    }
    return 'Online';
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto mb-20">
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
      <div className="max-w-5xl mx-auto mb-20">
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
    <div className="max-w-5xl mx-auto mb-20">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#18181b] mb-4 text-center">
        Community Events
      </h2>
      <p className="text-[#71717a] mb-10 text-lg text-center">
        Join us at upcoming events and meetups
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 6).map((event) => (
          <a
            key={event.id}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl border border-[#e4e4e7] overflow-hidden card-shadow transition-all duration-200 hover:border-[#4C2A85] hover:card-shadow-hover"
          >
            <div className="h-40 bg-[#f4f4f5] relative overflow-hidden">
              {event.cover_url ? (
                <img
                  src={event.cover_url}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4C2A85]/10 to-[#4C2A85]/5">
                  <Calendar className="w-12 h-12 text-[#4C2A85]/30" />
                </div>
              )}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-[#4C2A85]">
                {formatDate(event.start_at)}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-sm text-[#71717a] mb-2">
                <Calendar className="w-4 h-4" />
                <span>{formatTime(event.start_at)}</span>
              </div>
              <h3 className="font-semibold text-[#18181b] mb-2 line-clamp-2 group-hover:text-[#4C2A85] transition-colors">
                {event.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#71717a]">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{getLocation(event)}</span>
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
  );
}

export default CommunityEvents;
