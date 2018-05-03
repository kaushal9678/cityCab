import React from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';
import PropTypes from 'prop-types'
import styles from '../Button/styles'
import color from 'color'
const ClearButton = ({buttonTitle,onPress})=>{
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier)
    return (
            <View style = {styles.container}>
            <TouchableOpacity underlayColor = {underlayColor} onPress={onPress} style = {styles.buttonStyle}>
            <View  style = {styles.subContainer}>
                <Image resizeMode="contain" source = {require('./images/icon.png')} style = {styles.imageStyle}/>
                <Text style = {styles.buttonText}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
            </View>
        
    )
};
ClearButton.prototypes={
    onPress:PropTypes.func,
    buttonTitle:PropTypes.string,
}
export {ClearButton}