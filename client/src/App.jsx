import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UrlList from "./pages/UrlList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<UrlList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;