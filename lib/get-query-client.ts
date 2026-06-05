import {
  QueryClient,
  defaultShouldDehydrateQuery,
} from '@tanstack/react-query';

const isServer = typeof window === 'undefined';

// Default staleTime above zero so the client does not immediately refetch
// queries that were prefetched and hydrated from the server.
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        // Include pending queries in dehydration so server-prefetched data
        // streams to the client even when not yet settled.
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

// A fresh QueryClient per request on the server (never shared across users),
// and a module-level singleton on the client (stable across re-renders and
// React suspensions).
export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
