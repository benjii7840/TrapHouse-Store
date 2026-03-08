// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Casual from "./pages/Casual";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/casual" element={<Casual />} />
      </Routes>
    </BrowserRouter>
  );
}
