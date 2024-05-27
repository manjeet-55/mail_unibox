import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import AzureADProvider from 'next-auth/providers/azure-ad';`

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/gmail.readonly",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl + "/emails"; // Redirect to /emails endpoint after authentication
    },
  },
};
export default NextAuth(authOptions);
