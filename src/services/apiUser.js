import supabase from "./supabase";

export async function getUser() {
  const { data, error } = await supabase.from("users").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Error loading user data");
  }
  return data;
}
