import * as React from "react";
import { Image } from "react-native";
import { Container, Content, Button, View, Text } from "native-base";
import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<View style={styles.container}>
					<Content>
						<Image source={require("../../../assets/shadow.png")} style={styles.shadow}>
							<View style={styles.bg}>
								{this.props.loginForm}
								<Button style={styles.btn} onPress={() => this.props.onLogin()}>
									<Text>Login</Text>
								</Button>
							</View>
						</Image>
					</Content>
				</View>
			</Container>
		);
	}
}

export default Login;
