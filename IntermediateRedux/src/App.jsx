import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const theme = useState("#ad343e");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
