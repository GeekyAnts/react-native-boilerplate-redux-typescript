import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Grid, Row } from "native-base";
import { NavigationActions } from "react-navigation";

import styles from "./styles";
export interface Props {
	navigation: any;
	list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => {
								this.props.navigation.dispatch(
									NavigationActions.reset({
										index: 0,
										actions: [NavigationActions.navigate({ routeName: "Login" })],
									})
								);
							}}
						>
							<Icon active name="power" />
						</Button>
					</Left>

					<Body>
						<Title>Home</Title>
					</Body>

					<Right>
						<Button transparent>
							<Icon active name="menu" onPress={() => this.props.navigation.navigate("DrawerOpen")} />
						</Button>
					</Right>
				</Header>
				<Content>
					<Grid style={styles.mt}>
						{this.props.list.map((item, i) => (
							<Row key={i}>
								<TouchableOpacity
									style={styles.row}
									onPress={() =>
										this.props.navigation.navigate("BlankPage", {
											name: { item },
										})}
								>
									<Text style={styles.text}>{item}</Text>
								</TouchableOpacity>
							</Row>
						))}
					</Grid>
				</Content>
			</Container>
		);
	}
}

export default Home;
