import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
