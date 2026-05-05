import styles from "./ArticleBlock.module.css";

export const ArticleBlock = ({ article, isExpanded, toggle }) => {
  return (
    <div className={styles.article}>
      <h3 className={styles.title} onClick={() => toggle(article.number)}>
        {isExpanded ? "▾" : "▸"} Стаття {article.number}: {article.title}
      </h3>

      {isExpanded &&
        (article.paragraphs || []).map((p) => (
          <p key={p.number} className={styles.paragraph}>
            {p.number}. {p.text}
          </p>
        ))}
    </div>
  );
};
