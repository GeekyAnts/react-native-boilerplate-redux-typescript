import "react-native";
import React from "react";
import BlankPage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
	const tree = renderer.create(<BlankPage {...this.props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
