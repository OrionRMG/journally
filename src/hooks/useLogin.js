import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/", "replace", true);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Login failed");
    },
  });

  return { login, isLoading };
}
