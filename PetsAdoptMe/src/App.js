const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Catherine",
      animal: "Cat",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Miles",
      animal: "Cat",
      breed: "Siamese",
    }),
    React.createElement(Pet, {
      name: "Lady",
      animal: "Cat",
      breed: "Long Hair",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
