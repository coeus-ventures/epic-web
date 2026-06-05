"use client";

import { useMutation } from "@tanstack/react-query";
import { signup, type ActionResult } from "./actions/signup.action";
import { HOME_URL } from "@/app.config";

interface UseSignupReturn {
  state: ActionResult;
  formAction: (formData: FormData) => void;
  isLoading: boolean;
}

export function useSignup(redirectURL: string = HOME_URL): UseSignupReturn {
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      // The action redirects on success; on failure it returns { error }.
      const result = await signup({ error: null }, formData, redirectURL);
      if (result?.error) {
        throw new Error(result.error);
      }
      return result;
    },
  });

  return {
    state: {
      error: mutation.error ? (mutation.error as Error).message : null,
    },
    formAction: (formData: FormData) => {
      mutation.mutate(formData);
    },
    isLoading: mutation.isPending,
  };
}
