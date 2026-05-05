import { BrowserRouter, Routes, Route } from "react-router-dom";

import LawsListPage from "./pages/LawsListPage/LawsListPage";
import LawItemPage from "./pages/LawItemPage/LawItemPage";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LawsListPage />} />
          <Route path="/law/:id" element={<LawItemPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
