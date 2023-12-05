import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserData, isPending: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (res, data) => {
      if (data.notifText) toast.success(data.notifText);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUserData };
}
