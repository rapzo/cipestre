import { useSession } from 'next-auth/react';
import styles from './Dashboard.module.css';

/* eslint-disable-next-line */
export interface DashboardProps {
  message?: string
}

export function Dashboard(props: DashboardProps) {
  const { data: {
    user,
  } } = useSession();

  return (
    <div className={styles['container']}>
      <h1>Welcome {user.name}!</h1>

      <p>{props.message}</p>
    </div>
  );
}

export async function getServerSideProps(_context) {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const { value } = await response.json();

  return {
    props: {
      message: value,
    },
  }
}

export default Dashboard;
