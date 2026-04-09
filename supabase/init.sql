-- Table messages
CREATE TABLE messages (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content    text NOT NULL,
  created_at timestamp WITH TIME ZONE DEFAULT now()
);

-- Donnée initiale
INSERT INTO messages (content) VALUES ('Hello World');
