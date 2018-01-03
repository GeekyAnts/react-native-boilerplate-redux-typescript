import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import datas from "./data";
import { fetchList } from "./actions";
class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.fetchList(datas);
    }
    render() {
        return React.createElement(Home, { navigation: this.props.navigation, list: this.props.data });
    }
}
function bindAction(dispatch) {
    return {
        fetchList: url => dispatch(fetchList(url)),
    };
}
const mapStateToProps = state => ({
    data: state.homeReducer.list,
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
//# sourceMappingURL=index.js.map