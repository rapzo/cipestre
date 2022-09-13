import styles from './Authentication.module.css';

/* eslint-disable-next-line */
export interface AuthenticationProps {}

export function Authentication(props: AuthenticationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Authentication!</h1>
    </div>
  );
}

export default Authentication;
