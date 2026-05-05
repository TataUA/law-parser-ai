import { useState } from "react";

import { FilterContext } from "./FilterContext";

export function FilterProvider({ children }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [tags, setTags] = useState([]);
  const [subjects, setSubjects] = useState([]);

  return (
    <FilterContext.Provider
      value={{
        selectedTag,
        setSelectedTag,
        selectedSubject,
        setSelectedSubject,
        tags,
        setTags,
        subjects,
        setSubjects,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
