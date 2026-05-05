import { useLocation } from "react-router-dom";

import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  const location = useLocation();
  const isLawPage = location.pathname.startsWith("/law");

  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.body}>
        <Sidebar type={isLawPage ? "subjects" : "tags"} />

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
