import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon, Separator } from "../List";
import PropTypes from 'prop-types'
import styles from "../List/styles";
const ListItem = ({ 
  text, selected=false, 
  onPress,checkMark=true,
  visible=true,
  customIcon=null,
  iconBackground ,
}) => {
  return (
    
      <TouchableOpacity onPress={onPress} underlayColor={styles.underLayColor}>
        <View style = {styles.row}>
          <Text style={styles.text}>{text}</Text>
          {selected?<Icon checkmark={checkMark} visible={visible} iconBackground={iconBackground}/>:<Icon/>}
         {customIcon}
       
        </View>
      </TouchableOpacity>
   
  );
};
ListItem.propTypes={
  text:PropTypes.string,
  selected:PropTypes.bool,
  onPress:PropTypes.func,
  checkMark:PropTypes.bool,
  visible:PropTypes.bool,
  customIcon:PropTypes.element,
  iconBackground:PropTypes.string
}
export { ListItem };
