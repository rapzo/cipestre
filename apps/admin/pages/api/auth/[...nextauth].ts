import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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

export const authOptions = {
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
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // async session({ session, user, token }) {
    //   return session;
    // },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  // pages: {
  //   signIn: '/api/auth/signin',
  //   error: '/api/auth/error',
  // },
};

export default NextAuth(authOptions);
