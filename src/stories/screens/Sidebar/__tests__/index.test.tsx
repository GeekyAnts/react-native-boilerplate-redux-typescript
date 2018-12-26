import * as React from "react";
import "react-native";
import Sidebar from "../index";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };

it("renders correctly", () => {
  const tree = renderer.create(<Sidebar navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
