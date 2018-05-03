import React, { Component } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  InputAccessoryView,
  Button
} from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { TextInputWithIcon } from "../components/TextInput";
import { connect } from "react-redux";
import { ButtonWithGradient } from "../components/Button";
import TextInputBar from "../components/InputAccessoryView/TextInputBar";
import {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFail
} from "../actions";
import styles from "../components/Logo/styles";
class SignUp extends Component {
  onEmailChange(text) {
    // this.props.emailChanged(text);
    this.props.dispatch(emailChanged(text));
  }
  onPasswordChange(text) {
    // this.props.passwordChanged(text);
    this.props.dispatch(passwordChanged(text));
  }
  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.dispatch(loginUser({ email, password }));
  };
  render() {
    const inputStyle = [styles.input];
    const inputAccessoryViewID = "uniqueID";
    return (
      <Container>
        <ScrollView keyboardDismissMode="on-drag">
          <Container>
            <View style={styles1.contentView}>
              <Logo />
              <KeyboardAvoidingView behavior="padding">
                <TextInputWithIcon
                  placeholder=""
                  keyboard_type="default"
                  iconName="person"
                  onChangeText={this.onEmailChange.bind(this)}
                  label="user name"
                  inputAccessoryViewID={inputAccessoryViewID}
                  secureTextEntry={false}
                />
                <TextInputWithIcon
                  placeholder=""
                  keyboard_type="email-address"
                  iconName="email"
                  onChangeText={this.onEmailChange.bind(this)}
                  label="user@test.com"
                  inputAccessoryViewID={inputAccessoryViewID}
                  secureTextEntry={false}
                />

                <TextInputWithIcon
                  placeholder=""
                  keyboard_type="default"
                  iconName="lock"
                  onChangeText={this.onPasswordChange.bind(this)}
                  label="password"
                  inputAccessoryViewID={inputAccessoryViewID}
                  secureTextEntry={true}
                />
                <TextInputWithIcon
                  placeholder=""
                  keyboard_type="phone-pad"
                  iconName="phone"
                  onChangeText={this.onPasswordChange.bind(this)}
                  label="01111111111"
                  secureTextEntry={false}
                  inputAccessoryViewID={inputAccessoryViewID}
                />
              </KeyboardAvoidingView>

              <ButtonWithGradient
                text="Create account"
                onPress={this.onButtonPress}
                style={{ marginTop: 10, padding: 30 }}
              />
            </View>
            />
          </Container>
        </ScrollView>
       {/*  <InputAccessoryView backgroundColor="#fffffff7">
          <TextInputBar />
        </InputAccessoryView> */}
      </Container>
      
    );
  }
}
const mapStateToProps = state => {
  const { email, password, loading, error, user } = state.login;
  return { email, password, loading, error, user };
};

const styles1 = {
  contentContainer: {
    //paddingVertical: 20,
    flex: 1
  },
  contentView: {
    //backgroundColor: '#22A7F0',
    alignItems: "center",
    borderColor: "#ECF0F1",
    //padding: 10,
    justifyContent: "center",

    // flex: 1,
    width: Dimensions.get("window").width
    // height: Dimensions.get('window').height,
  }
};
export default connect(mapStateToProps)(SignUp);
