import React from 'react';
import PropTypes from 'prop-types'
import {View,TouchableHighlight,TextInput,Text,InputAccessoryView} from 'react-native';
import styles from './styles'
import color from 'color';
const InputWithButton =(props)=>{

    const {onPress,buttonText,editable=true,textColor} = props
    const containerStyle = [styles.container];
    if (editable === false){
        containerStyle.push(styles.containerDisabled);
    }
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier)
    const textStyle = [styles.buttonText];
    if (textColor){
        textStyle.push({color:textColor});
    }
    return (
        
    <View style = {containerStyle}>
        <TouchableHighlight underlayColor={underlayColor} style = {styles.buttonContainer} onPress={onPress}>
            <Text style = {textStyle}>{buttonText}</Text>
            </TouchableHighlight>
        <View style = {styles.border}></View>
        <TextInput underlineColorAndroid='transparent' style = {styles.input}{...props}/>

    </View>
)
}
InputWithButton.proptypes = {
    onPress:PropTypes.func,
    buttonText:PropTypes.string,
    editable:PropTypes.bool,
}
export {InputWithButton}