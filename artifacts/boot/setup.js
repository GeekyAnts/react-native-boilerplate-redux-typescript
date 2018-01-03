import * as React from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export default class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false }))
        };
    }
    render() {
        return (React.createElement(StyleProvider, { style: getTheme(variables) },
            React.createElement(Provider, { store: this.state.store },
                React.createElement(App, null))));
    }
}
//# sourceMappingURL=setup.js.map