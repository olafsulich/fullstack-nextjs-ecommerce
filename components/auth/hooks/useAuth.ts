import { useMemo } from "react";
import { useSession, getProviders, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  return useMemo(
    () =>
      ({
        session,
        status,
        signIn,
        signOut,
      } as const),
    [session, status]
  );
};
