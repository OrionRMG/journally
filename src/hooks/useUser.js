import { useQuery } from "@tanstack/react-query";
import { getUserSession } from "../services/apiAuth";
import { getUser } from "../services/apiUser";

async function getDataAndSession() {
  const sessionData = await getUserSession();

  if (!sessionData) return { data: null };

  const userData = await getUser(sessionData.id);

  return { sessionData, userData };
}

export function useUser() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: getDataAndSession,
  });

  return {
    isLoading,
    data,
    error,
    isAuthenticated: data?.sessionData?.role === "authenticated",
  };
}
