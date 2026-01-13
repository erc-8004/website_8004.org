import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LumaEvent {
  api_id: string;
  event: {
    api_id: string;
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
  };
}

interface LumaResponse {
  entries: LumaEvent[];
  has_more: boolean;
  next_cursor?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const LUMA_CALENDAR_ID = Deno.env.get("LUMA_CALENDAR_ID");
    const LUMA_API_KEY = Deno.env.get("LUMA_API_KEY");

    if (!LUMA_CALENDAR_ID) {
      return new Response(
        JSON.stringify({
          events: [],
          message: "Luma calendar not configured",
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (LUMA_API_KEY) {
      headers["x-luma-api-key"] = LUMA_API_KEY;
    }

    const response = await fetch(
      `https://api.lu.ma/public/v1/calendar/get-items?calendar_api_id=${LUMA_CALENDAR_ID}&period=future`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`Luma API error: ${response.status}`);
    }

    const data: LumaResponse = await response.json();

    const events = data.entries.map((entry) => ({
      id: entry.event.api_id,
      name: entry.event.name,
      start_at: entry.event.start_at,
      end_at: entry.event.end_at,
      cover_url: entry.event.cover_url,
      url: entry.event.url,
      geo_address_info: entry.event.geo_address_info,
      timezone: entry.event.timezone,
    }));

    return new Response(
      JSON.stringify({ events }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Luma events:", error);
    return new Response(
      JSON.stringify({
        events: [],
        error: "Failed to fetch events",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
