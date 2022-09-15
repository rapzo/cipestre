import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const secret = process.env.SECRET || 'S3cRet';
const maxAge = 30 * 24 * 60 * 60;

const users = [
  {
    name: 'Chuck',
    username: 'cnorris@rangers.com',
    password: 'thebest',
  },
  {
    name: 'Jimmy',
    username: 'jtrivette@rangers.com',
    password: 'sidekick',
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'cipestre',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        return users.find(({ username, password }) => {
          return (
            username === credentials.username &&
            password === credentials.password
          );
        });
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    async redirect(context) {
      console.log(context);
      return context.baseUrl;
    },
    // async session({ session, user, token }) {
    //   return session;
    // },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  secret,
  session: {
    strategy: 'jwt',
    maxAge,
  },
  jwt: {
    secret,
    maxAge,
  },
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
};

export default NextAuth(authOptions);
