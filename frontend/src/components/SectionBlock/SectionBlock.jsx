import styles from "./SectionBlock.module.css";

export const SectionBlock = ({ section, isExpanded, toggle, children }) => {
  return (
    <div className={styles.section}>
      {section.name && (
        <h2 className={styles.title} onClick={() => toggle(section.number)}>
          {isExpanded ? "▾" : "▸"}
          {section.number !== 0 && `Розділ ${section.number}: `}
          {section.name}
        </h2>
      )}

      {(section.name ? isExpanded : true) && (
        <div className={styles.content}>{children}</div>
      )}
    </div>
  );
};
