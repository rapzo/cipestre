import { useSession, signIn } from "next-auth/react"
import Dashboard from "./dashboard/dashboard";

import styles from './index.module.css';

export function Index() {
  const { data: session } = useSession()

  return (
    <div className={styles.page}>
      <h1>Hi</h1>

      {!session ? (
        <button onClick={() => signIn("cipestre")}>Sign in</button>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default Index;
