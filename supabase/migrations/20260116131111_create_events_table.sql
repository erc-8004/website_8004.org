/*
  # Create events table

  1. New Tables
    - `events`
      - `id` (uuid, primary key) - Unique identifier for each event
      - `title` (text) - Event title/name
      - `img_url` (text, nullable) - URL to event image
      - `date` (text) - Event date in format DD/MM/YY
      - `url` (text) - Link to event page (e.g., lu.ma link)
      - `created_at` (timestamptz) - When the event was created
      - `updated_at` (timestamptz) - When the event was last updated

  2. Security
    - Enable RLS on `events` table
    - Add policy for public read access (anyone can view events)
    - Add policy for authenticated users to manage events
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  img_url text,
  date text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events
  FOR DELETE
  TO authenticated
  USING (true);