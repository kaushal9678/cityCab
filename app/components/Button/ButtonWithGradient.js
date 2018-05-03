import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles';
const ButtonWithGradient = ({text,onPress,styles1} )=>{
    return(
        
        <TouchableOpacity onPress = {onPress} style = {[styles.container,styles1]}>
        <LinearGradient
        start={{ x: 0.0, y: 0.15 }} end={{ x: 0.85, y: .15 }}
        locations={[0.001, 0.90]}
        colors={['#22c1c3', '#fdbb2d']}
        style={styles.container}>
       
        {/* <TouchableOpacity onPress = {onPress} style = {[styles.buttonStyle,styles1]}> */}
           
            <Text style = {styles.buttonText}>{text}</Text>
           
       {/*  </TouchableOpacity> */}
       
      </LinearGradient>
      </TouchableOpacity >
    )


}          


export {ButtonWithGradient}