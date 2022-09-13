import { useSession, signIn, signOut } from "next-auth/react"

import styles from './index.module.css';

export function Index() {
  const { data: session } = useSession()

  return (
    <div className={styles.page}>
      <h1>Hi</h1>

      {!session ? (
        <button onClick={() => signIn("cipestre")}>Sign in</button>
        // <a href="/api/auth/signin/">Signin?</a>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </div>
  );
}

export default Index;
