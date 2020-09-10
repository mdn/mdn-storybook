import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import initStoryshots from "@storybook/addon-storyshots";
initStoryshots();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
