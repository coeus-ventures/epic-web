"use client";

import { useMutation } from "@tanstack/react-query";
import { hello, HelloState } from "./hello.action";

interface UseHelloReturn {
  state: HelloState;
  formAction: (formData: FormData) => void;
  isLoading: boolean;
}

const INITIAL_STATE: HelloState = { result: null, error: null };

// Reference example of the TanStack Query mutation pattern for a form that
// calls a server action and renders its result. The action returns its own
// { result, error } state (it does not throw), so we surface mutation.data.
export function useHello(): UseHelloReturn {
  const mutation = useMutation({
    mutationFn: (formData: FormData) => hello(INITIAL_STATE, formData),
  });

  return {
    state: mutation.data ?? INITIAL_STATE,
    formAction: (formData: FormData) => {
      mutation.mutate(formData);
    },
    isLoading: mutation.isPending,
  };
}
