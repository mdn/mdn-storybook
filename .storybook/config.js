import { addParameters, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import requireContext from "require-context.macro";
import "../src/index.css";

const req = requireContext("../src", true, /\.stories.js$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(loadStories, module);
