import React from 'react'
import {View,TouchableWithoutFeedback,Keyboard} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import LinearGradient from "react-native-linear-gradient";
import AnimatedLinearGradient, {
  presetColors
} from "react-native-animated-linear-gradient";

import styles from './styles';
const Container = ({children,substyles})=>{
    const containerStyles = [styles.container]
    /* if (backgroundColor){
        containerStyles.push({backgroundColor});
    } */
   return(
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
     <LinearGradient
        start={{ x: 0.0, y: 0.15 }} end={{ x: 0.15, y: .85 }}
        locations={[0.001, 0.90]}
        colors={['#F2A049', '#ee5155']}
        style={[containerStyles,substyles]}>
        {children}
      </LinearGradient>
    
   </TouchableWithoutFeedback>
   )
}
 /* Container.propTypes = {
    children:PropTypes.any,
}  */
export {Container}