import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFilters } from "../../hooks/useFilters";

import { SectionBlock } from "../../components/SectionBlock/SectionBlock";
import { ArticleBlock } from "../../components/ArticleBlock/ArticleBlock";
import styles from "./LawItemPage.module.css";

function LawItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedSubject, setSubjects, setSelectedSubject } = useFilters();

  const [law, setLaw] = useState(null);
  const [expandedSections, setExpandedSections] = useState([]);
  const [expandedArticles, setExpandedArticles] = useState([]);

  useEffect(() => {
    setSelectedSubject(null);
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/laws/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLaw(data);

        const allSubjects = [
          ...new Set(
            (data.sections || [{ articles: data.articles || [] }]).flatMap(
              (section) =>
                section.articles.flatMap((article) => [
                  ...(article.subjects || []),
                  ...(article.paragraphs || []).flatMap(
                    (p) => p.subjects || [],
                  ),
                ]),
            ),
          ),
        ];

        setSubjects(allSubjects);
      })
      .catch(() => setLaw(null));
  }, [id]);

  const normalizedSections = useMemo(() => {
    if (!law) return [];

    if (law.sections?.length) return law.sections;

    if (law.articles?.length) {
      return [
        {
          number: 0,
          name: "Статті",
          articles: law.articles,
        },
      ];
    }

    return [];
  }, [law]);

  const filteredSections = useMemo(() => {
    return normalizedSections
      .map((section) => {
        const filteredArticles = section.articles
          .map((article) => {
            const paragraphs = article.paragraphs || [];

            const filteredParagraphs = paragraphs.filter(
              (p) => !selectedSubject || p.subjects?.includes(selectedSubject),
            );

            if (
              !selectedSubject ||
              article.subjects?.includes(selectedSubject) ||
              filteredParagraphs.length > 0
            ) {
              return {
                ...article,
                paragraphs:
                  selectedSubject && filteredParagraphs.length > 0
                    ? filteredParagraphs
                    : paragraphs,
              };
            }

            return null;
          })
          .filter(Boolean);

        if (filteredArticles.length === 0) return null;

        return {
          ...section,
          articles: filteredArticles,
        };
      })
      .filter(Boolean);
  }, [normalizedSections, selectedSubject]);

  const hasResults = filteredSections.length > 0;

  const sectionsToRender = selectedSubject
    ? filteredSections
    : normalizedSections;

  const expandedSectionIds =
    selectedSubject && hasResults
      ? filteredSections.map((s) => s.number)
      : expandedSections;

  const expandedArticleIds =
    selectedSubject && hasResults
      ? filteredSections.flatMap((s) => s.articles.map((a) => a.number))
      : expandedArticles;

  const toggleSection = (num) => {
    setExpandedSections((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num],
    );
  };

  const toggleArticle = (num) => {
    setExpandedArticles((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num],
    );
  };

  if (!law) return <p className={styles.loading}>Завантаження...</p>;

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate("/")}>
        ← Назад
      </button>

      <h1 className={styles.title}>{law.title}</h1>

      {selectedSubject && !hasResults && (
        <p className={styles.empty}>
          Нічого не знайдено для "{selectedSubject}"
        </p>
      )}

      <div className={styles.content}>
        {sectionsToRender.map((section) => (
          <SectionBlock
            key={section.number}
            section={section}
            isExpanded={expandedSectionIds.includes(section.number)}
            toggle={toggleSection}
          >
            {section.articles.map((article) => (
              <ArticleBlock
                key={article.number}
                article={article}
                isExpanded={expandedArticleIds.includes(article.number)}
                toggle={toggleArticle}
              />
            ))}
          </SectionBlock>
        ))}
      </div>
    </div>
  );
}

export default LawItemPage;
