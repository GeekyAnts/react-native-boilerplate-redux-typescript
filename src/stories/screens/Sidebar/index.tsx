import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";

const routes = [
  {
    route: "Home",
    caption: "Home"
  },
  {
    route: "BlankPage",
    caption: "Blank Page"
  },
  {
    route: "Login",
    caption: "Logout"
  }
];

export interface Props {
  navigation: any;
}
export interface State {}
export default class Sidebar extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Content>
          <List
            style={{ marginTop: 40 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Text>{data.caption}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
