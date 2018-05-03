
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
const ButtonWithBorder = ({text,onPress} )=>{
    return(
        <LinearGradient
        start={{ x: 0.0, y: 0.15 }} end={{ x: 0.15, y: .85 }}
        locations={[0.001, 0.90]}
        colors={['#B2FEFA', '#B2FEFA']}
        style={styles.container}>
        <TouchableOpacity onPress = {onPress} style = {styles.buttonStyle}>
            <Text style = {styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    )


}          


export {ButtonWithBorder}