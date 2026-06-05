"use client";

import { useMutation } from "@tanstack/react-query";
import { signIn } from "./actions/signin.action";

interface SignInState {
  error: string | null;
}

interface UseSignInReturn {
  state: SignInState;
  formAction: (formData: FormData) => void;
  isLoading: boolean;
}

export function useSignIn(redirectURL: string): UseSignInReturn {
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      // The action redirects on success; on failure it returns { error }.
      const result = await signIn({ error: null }, formData, redirectURL);
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
