import React from "react";
import { storiesOf } from "@storybook/react";

import Logo from "./logo.jsx";

storiesOf("Logo", module)
  .add("default", () => <Logo locale="en-US" />)
  .add("de", () => <Logo locale="de" />);
