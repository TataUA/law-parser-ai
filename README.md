# ⚖️ Clear Law

_(Зрозуміле право)_

An interactive web application for searching and exploring legal information in a simple and structured way.
It helps users quickly find relevant laws and understand who they apply to.

---

## 🚀 Features

- 🔍 Search laws by title
- 🏷️ Filter by tags
- 👤 Filter by subject (e.g. students, employees, entrepreneurs)
- 📂 Hierarchical structure (sections → articles → paragraphs)
- 🔽 Expand/collapse content
- ✨ Highlight search matches
- ⚡ Debounced search for better performance

---

## 🧠 Project Idea

Legal texts are often complex and difficult to navigate.
This project demonstrates how legal information can be:

- structured in a user-friendly way
- filtered based on user needs
- presented clearly with a clean UI

---

## 🛠️ Tech Stack

- React
- React Router
- CSS Modules
- JavaScript (ES6+)

---

## 📁 Project Structure

```bash
src/
  components/
    Header/
    LawCard/
    Sidebar/
    SectionBlock/
    ArticleBlock/

  pages/
    LawsListPage/
    LawItemPage/

  hooks/
    useFilters.js
```

---

## ⚙️ Getting Started

1. Install dependencies (frontend+backend):

```bash
npm install
```

2. Run the frontend:

```bash
npm run dev
```

3. Run backend:

```bash
node server.js
```

---

## 📊 Data

The project uses mock JSON data to simulate legal documents, including:

- sections
- articles
- paragraphs
- subjects (who the law applies to)

---

## 💡 Key Implementation Details

- Flexible data normalization (supports laws with or without sections)
- Filtering down to paragraph level
- Automatic expansion of relevant content
- Reusable UI components
- Separation of logic and presentation

---

🚀 Future Improvements

- 🤖 AI-powered tag generation based on law content
- 🔍 Full-text search inside articles and paragraphs
- 📌 Highlighting selected subject directly in legal text
- 🌐 Integration with real legal data sources

---

## 🎯 Purpose

This project was built as a test assignment and demonstrates practical frontend development skills.

- React fundamentals
- UI/UX thinking
- code structure and organization
- working with structured data

---

## 👩‍💻 Author

Tetiana Khyzhniak
