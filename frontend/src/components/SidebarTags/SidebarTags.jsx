import { useFilters } from "../../hooks/useFilters";
import styles from "./SidebarTags.module.css";

export const SidebarTags = () => {
  const { tags, selectedTag, setSelectedTag } = useFilters();

  return (
    <div className={styles.list}>
      {tags.map((tag) => {
        const isActive = selectedTag === tag;

        return (
          <button
            key={tag}
            onClick={() => setSelectedTag(isActive ? null : tag)}
            className={`${styles.item} ${isActive ? styles.active : ""}`}
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
};
