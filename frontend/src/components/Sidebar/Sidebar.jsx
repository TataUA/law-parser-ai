import { SidebarTags } from "../SidebarTags/SidebarTags";
import { SidebarSubjects } from "../SidebarSubjects/SidebarSubjects";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ type }) => {
  const title = type === "tags" ? "Обери тему" : "Обери кого стосується";

  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.content}>
        {type === "tags" && <SidebarTags />}
        {type === "subjects" && <SidebarSubjects />}
      </div>
    </aside>
  );
};
