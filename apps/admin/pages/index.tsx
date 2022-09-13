import { useSession, signIn, signOut } from "next-auth/react"
import styles from './index.module.css';

export function Index() {
  const { data: session } = useSession()

  return (
    <div className={styles.page}>
      <h1>Hi</h1>
      {!session ? (
        <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <button onClick={() => signIn()}>Sign out</button>
      )}
    </div>
  );
}

export default Index;
