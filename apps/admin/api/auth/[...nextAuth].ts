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
  // Configure one or more authentication providers
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
};

export default NextAuth(authOptions);
