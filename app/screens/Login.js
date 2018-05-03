import React, { Component } from "react";
import { View,KeyboardAvoidingView } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { TextInputWithIcon } from "../components/TextInput";
import { connect } from "react-redux";
import {ButtonWithGradient} from '../components/Button'
import {connectAlert} from '../components/Alert'
import {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFail
} from "../actions";
class Login extends Component {

componentWillMount(){

}
componentWillReceiveProps(nextprops){
  if (nextprops.error && nextprops.error !== this.props.error){
      this.props.alertWithType('error','Error',nextprops.error)
  }
}
  onEmailChange(text) {
    // this.props.emailChanged(text);
    this.props.dispatch(emailChanged(text));
  }
  onPasswordChange(text) {
    // this.props.passwordChanged(text);
    this.props.dispatch(passwordChanged(text));
  }
  onButtonPress=()=> {
    const { email, password } = this.props;
    if (!email.length || !password.length){
      this.props.alertWithType('error','Error','Please enter email and password')
    }else{
    this.props.dispatch(loginUser({ email, password }));
  }
  }
  render() {
    const inputAccessoryViewID = "uniqueID";
    return (
      <Container>
        <Logo />
        <KeyboardAvoidingView behavior='padding' >
        <TextInputWithIcon
          placeholder=""
          keyboard_type="email-address"
          iconName="email"
          onChangeText={this.onEmailChange.bind(this)}
          label="user@test.com"
          secureTextEntry={false}
          value={this.props.email}
        />
        />
        <TextInputWithIcon
          placeholder=""
          keyboard_type="default"
          iconName="lock"
          onChangeText={this.onPasswordChange.bind(this)}
          label="password"
          secureTextEntry={true}
          value={this.props.password}
        />
        </KeyboardAvoidingView>
        <ButtonWithGradient text='LOGIN' onPress={this.onButtonPress}/>
        />

      </Container>
    );
  }
}
const mapStateToProps = state => {
  const { email, password, loading, error, user } = state.login;
  return { email, password, loading, error, user };
};

export default connect(mapStateToProps)(connectAlert(Login));
