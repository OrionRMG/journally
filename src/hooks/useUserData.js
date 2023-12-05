import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, updateUser } from "../services/apiUser";

export function useUserData(uid) {
  const {
    isLoading,
    error,
    data: userData,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(uid),
  });

  return { isLoading, userData, refetch };
}
