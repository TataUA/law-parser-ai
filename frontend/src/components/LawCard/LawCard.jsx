import styles from "./LawCard.module.css";

export const LawCard = ({ law, onClick, search }) => {
  const highlightText = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className={styles.highlight}>
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <h3 className={styles.title}>{highlightText(law.title, search)}</h3>

      <div className={styles.tags}>
        {law.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
