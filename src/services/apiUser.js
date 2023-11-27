import supabase from "./supabase";

export async function getUser() {
  const { data, error } = await supabase.from("users").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Error loading user data");
  }
  return data;
}

export async function updateUser(updateData, userId) {
  const { error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", userId);

  if (error) {
    console.error(error);
    throw new Error("Error updating user data");
  }
}
