import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<DynamicPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;