import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";

export function useUserData() {
  const {
    isLoading,
    error,
    data: userData,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { isLoading, userData, refetch };
}
