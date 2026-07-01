import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WebsitesPage from "./pages/WebsitesPage";
import FunCodePage from "./pages/FunCodePage";
import PostersPage from "./pages/PostersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/fun-code" element={<FunCodePage />} />
        <Route path="/posters" element={<PostersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
