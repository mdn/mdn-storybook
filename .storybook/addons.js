import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import "@storybook/addons";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Button",
};

export const first = () => (
  <button onClick={linkTo("Button", "second")}>Go to "Second"</button>
);
export const second = () => (
  <button onClick={linkTo("Button", "first")}>Go to "First"</button>
);
