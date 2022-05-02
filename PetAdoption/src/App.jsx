import { render } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1 id="brand">Adopt Me!</h1>
      <Pet name="Catherine" animal="Cat" breed="Mix" />
      <Pet name="Miles" animal="Cat" breed="Siamese" />
      <Pet name="Lady" animal="Cat" breed="Long Hair" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
