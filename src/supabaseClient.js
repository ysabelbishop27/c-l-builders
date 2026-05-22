import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://axasmoukqzlsxpbfuuuq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4YXNtb3VrcXpsc3hwYmZ1dXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTE0MTYsImV4cCI6MjA5NTAyNzQxNn0.UP5s8hmVNDSxWyTKwlo_AoUMVOqlIlGcdW605zoNZFY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);