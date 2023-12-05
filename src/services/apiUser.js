import supabase from "./supabase";

export async function createUser(uid) {
  const count = await checkForUser(uid);

  if (count > 0) return;

  const { data, error } = await supabase
    .from("users")
    .insert([{ user_id: uid, goals: [], entries: [], streak: 0, score: 0 }])
    .select()
    .single();

  return data;
}

export async function getUser(uid) {
  const count = await checkForUser(uid);

  if (count === 0) {
    const userData = await createUser(uid);
    return userData;
  }

  const { data: userData, error } = await supabase
    .from("users")
    .select("*")
    .single()
    .eq("user_id", uid);

  if (error) {
    console.error(error);
    throw new Error("Error loading user data");
  }
  return userData;
}

export async function updateUser({ updateData, userId, notifText }) {
  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", userId);

  if (error) {
    console.error(error);
    throw new Error("Error updating user data");
  }

  return { data, notifText };
}

export async function checkForUser(uid) {
  const { count } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true })
    .eq("user_id", uid);

  return count;
}
