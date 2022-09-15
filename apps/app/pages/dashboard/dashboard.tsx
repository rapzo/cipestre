import { useSession } from 'next-auth/react';
import MOTD from '../../components/motd/motd';
import styles from './dashboard.module.css';

export interface DashboardProps {
  message?: string;
}

export function Dashboard(props: DashboardProps) {
  const {
    data: { user },
  } = useSession();

  return (
    <div className={styles['container']}>
      <h1>Welcome {user.name}!</h1>

      <MOTD message={props.message} />
    </div>
  );
}

export async function getServerSideProps(_context) {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const { value } = await response.json();

  console.log(value);
  return {
    props: {
      message: value,
    },
  };
}

export default Dashboard;
