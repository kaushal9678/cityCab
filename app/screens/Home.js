import React, {Component} from 'react';
import {View} from 'react-native';
import { Container } from '../components/Container';
import {Logo} from '../components/Logo'
import {ButtonWithGradient} from '../components/Button'
import {connect} from 'react-redux';
class Home extends Component{

    handleLoginPress = () => {
        console.log("pressed Login button");
        this.props.navigation.navigate("Login",{title:"User Login"})
      };
      handleSignUpPress = () => {
        console.log("pressed Signup button");
        //this.props.navigation.navigate(" User SignUp")
        this.props.navigation.navigate('SignUp',{title:'User Login'})   

      };

    render(){
        return(
            <Container>
                <Logo/>
                <ButtonWithGradient text="Login" onPress={this.handleLoginPress}></ButtonWithGradient>
                <ButtonWithGradient text="Sign Up" onPress={this.handleSignUpPress}></ButtonWithGradient>
            </Container>
        )
    }
}

export default Home;