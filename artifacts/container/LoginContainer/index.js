import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";
const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);
class LoginForm extends React.Component {
    renderInput({ input, meta: { touched, error } }) {
        return (React.createElement(Item, { error: error && touched },
            React.createElement(Icon, { active: true, name: input.name === "email" ? "person" : "unlock" }),
            React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name === "email" ? "Email" : "Password", secureTextEntry: input.name === "password" ? true : false }, input))));
    }
    login() {
        if (this.props.valid) {
            this.props.navigation.navigate("Drawer");
        }
        else {
            Toast.show({
                text: "Enter Valid Username & password!",
                duration: 2000,
                position: "top",
                textStyle: { textAlign: "center" },
            });
        }
    }
    render() {
        const form = (React.createElement(Form, null,
            React.createElement(Field, { name: "email", component: this.renderInput, validate: [email, required] }),
            React.createElement(Field, { name: "password", component: this.renderInput, validate: [alphaNumeric, minLength8, maxLength15, required] })));
        return React.createElement(Login, { loginForm: form, onLogin: () => this.login() });
    }
}
const LoginContainer = reduxForm({
    form: "login",
})(LoginForm);
export default LoginContainer;
//# sourceMappingURL=index.js.map