import styles from './motd.module.css';

/* eslint-disable-next-line */
export interface MOTDProps {
  message: string
}

export function MOTD({ message }: MOTDProps) {
  return (
    <div className={styles['container']}>
      <p>{message}</p>
    </div>
  );
}

export default MOTD;
