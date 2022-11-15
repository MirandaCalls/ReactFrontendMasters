import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext.js";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";

const App = () => {
  const theme = useState("#ad343e");
  return (
    <ThemeContext.Provider value={theme}>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
