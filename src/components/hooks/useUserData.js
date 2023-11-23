import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";

export function useUserData() {
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { isLoading, error, userData };
}
