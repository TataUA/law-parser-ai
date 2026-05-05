import { useFilters } from "../../hooks/useFilters";
import styles from "./SidebarSubjects.module.css";

export const SidebarSubjects = () => {
  const { subjects, selectedSubject, setSelectedSubject } = useFilters();

  if (subjects.length === 0) {
    return <p className={styles.empty}>Немає даних</p>;
  }

  return (
    <div className={styles.list}>
      {subjects.map((subj) => {
        const isActive = selectedSubject === subj;

        return (
          <button
            key={subj}
            onClick={() => setSelectedSubject(isActive ? null : subj)}
            className={`${styles.item} ${isActive ? styles.active : ""}`}
          >
            {subj}
          </button>
        );
      })}
    </div>
  );
};
