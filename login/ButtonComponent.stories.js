

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./ButtonComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Button", module)
  .add("default", () => <Button {...myProps} {...actions} />)
  .add("pinned", () => <Button {...myProps} pinned={true} {...actions} />)
  .add("archived", () => <Button {...myProps} archived={true} {...actions} />);