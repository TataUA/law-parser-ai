import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <h2 className={styles.title}>⚖️ Зрозуміле право</h2>
        </Link>

        <p className={styles.subtitle}>Знайди потрібне в законі за секунди</p>
      </div>

      <div className={styles.right}>
        <button className={styles.loginButton}>Login</button>
      </div>
    </header>
  );
};
