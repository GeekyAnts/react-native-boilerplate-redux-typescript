const initialState = {
	list: [],
	isLoading: true,
};

export default function(state = initialState, action) {
	if (action.type === "FETCH_LIST_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}
