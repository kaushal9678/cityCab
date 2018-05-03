import React from 'react';

import {View,Image,TouchableHighlight} from 'react-native';
import styles from './styles'
const ButtonCheckBox = ({ 
    text, selected=false, 
    onPress,checkMark=true,
    visible=true,
    customIcon=null,
    iconBackground ,
  }) => {
    return (
      
        <TouchableOpacity onPress={onPress} underlayColor={styles.underLayColor}>
          <View style = {styles.row}>
          {selected?<Icon checkmark={checkMark} visible={visible} iconBackground={iconBackground}/>:<Icon/>} <Text style={styles.text}>{text}</Text>
           
           {customIcon}
         
          </View>
        </TouchableOpacity>
     
    );
  };

export {ButtonCheckBox};