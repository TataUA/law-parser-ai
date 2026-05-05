import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFilters } from "../../hooks/useFilters";
import { LawCard } from "../../components/LawCard/LawCard";
import styles from "./LawsListPage.module.css";

function LawsListPage() {
  const [laws, setLaws] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { setTags, selectedTag, setSelectedTag } = useFilters();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedTag(null);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/laws`)
      .then((res) => res.json())
      .then((data) => {
        setLaws(data);

        const allTags = [...new Set(data.flatMap((law) => law.tags))];
        setTags(allTags);
      });
  }, []);

  const filteredLaws = laws.filter((law) => {
    const matchesSearch = law.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesTag = selectedTag ? law.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Знайти закони по назві чи по тегу</h1>

      <input
        className={styles.search}
        type="text"
        placeholder="Назва закону..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredLaws.length === 0 && (
        <p className={styles.empty}>Не знайдено законів для вашого запиту</p>
      )}

      <div className={styles.list}>
        {filteredLaws.map((law) => (
          <LawCard
            key={law.id}
            law={law}
            onClick={() => navigate(`/law/${law.id}`)}
            search={debouncedSearch}
          />
        ))}
      </div>
    </div>
  );
}

export default LawsListPage;
