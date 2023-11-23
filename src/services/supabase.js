import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://panecoladaljxclusqdv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhbmVjb2xhZGFsanhjbHVzcWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDg3MzIsImV4cCI6MjAxNjEyNDczMn0.ofnWVHTIdkAEb0t1BARYXesa89olE0nPYhBT1rddzBQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
