import React from "react";
import { storiesOf } from "@storybook/react";

import MainNav from "./MainNav.jsx";

storiesOf("MainNav", module)
  .add("default", () => <MainNav locale="en-US" />)
  .add("de", () => <MainNav locale="de" />);
