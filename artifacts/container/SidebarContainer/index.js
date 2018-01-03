import * as React from "react";
import Sidebar from "../../stories/screens/Sidebar";
export default class SidebarContainer extends React.Component {
    render() {
        return React.createElement(Sidebar, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map