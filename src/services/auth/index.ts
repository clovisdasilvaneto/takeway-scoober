import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {},
      authorize: (
        credentials: any,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">,
      ): Awaitable<User | null> => {
        if (!credentials?.name) throw new Error("Please inform your name.");

        const { name } = credentials;

        return {
          id: `${name}-${Date.now().toString()}`,
          name,
        };
      },
    }),
  ],
};
