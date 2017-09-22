import reducer from "../reducer";

describe("list reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			list: [],
			isLoading: true,
		});
	});

	it("should handle FETCH_LIST_SUCCESS", () => {
		expect(
			reducer(
				{
					list: [],
					isLoading: true,
				},
				{
					type: "FETCH_LIST_SUCCESS",
					list: [
						"React Native Starter Kit",
						"React Navigation",
						"NativeBase Easy Grid",
						"NativeBase",
						"CodePush",
						"Redux",
					],
				}
			)
		).toEqual({
			list: [
				"React Native Starter Kit",
				"React Navigation",
				"NativeBase Easy Grid",
				"NativeBase",
				"CodePush",
				"Redux",
			],
			isLoading: true,
		});
	});
	it("should handle LIST_IS_LOADING", () => {
		expect(
			reducer(
				{
					list: [],
					isLoading: false,
				},
				{
					type: "LIST_IS_LOADING",
					isLoading: false,
				}
			)
		).toEqual({
			list: [],
			isLoading: false,
		});
	});
});
