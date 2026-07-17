import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../api/usersApi";
import { userKeys } from "../userKeys";
import toast from "react-hot-toast";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: () =>
      // newUser
      {
        // ─── Option 1: Invalidate and refetch (simpler, safer) ───
        queryClient.invalidateQueries({ queryKey: userKeys.lists() });

        // ─── Option 2 (Tier 2 — Optimistic): manually update cache ───
        // queryClient.setQueryData(userKeys.lists(), (oldData) => {
        //   return oldData ? [...oldData, newUser] : [newUser]
        // })

        toast.success("User created successfully!", {
          icon: "👏",
        });
      },

    onError: (error) => {
      // This handles 400 errors (e.g. "email already taken")
      // 401/403/500 are already caught in the interceptor
      const message = error?.response?.data?.message || "Failed to create user";
      toast.error(message);
    },
  });
};
