const SUPABASE_URL = "%%SUPABASE_URL%%";
const SUPABASE_ANON_KEY = "%%SUPABASE_ANON_KEY%%";

const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadMessage() {
  const el = document.getElementById("message");

  const { data, error } = await client
    .from("messages")
    .select("content")
    .limit(1)
    .single();

  if (error) {
    el.textContent = "Erreur : " + error.message;
    el.classList.add("error");
    return;
  }

  el.textContent = data.content;
}

loadMessage();
