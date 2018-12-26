import * as React from "react";
import "react-native";
import Login from "../index";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

const onLogin = jest.fn();
const loginForm = React.Component;

it("renders correctly", () => {
  const tree = renderer
    .create(<Login onLogin={onLogin} loginForm={loginForm} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
