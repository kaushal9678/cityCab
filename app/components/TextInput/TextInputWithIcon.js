import React from 'react';
import {View} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana,Hideo } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from '../TextInput/styles';
 


  const TextInputWithIcon = ({ label, value,iconClass ,onChangeText, placeholder,secureTextEntry,iconName,keyboard_type,inputAccessoryViewID }) => {
    return(
      <View style = {styles.container}>
<Kohana
      style={styles.input}
      label={label}
      inputAccessoryViewID = {inputAccessoryViewID}
      iconClass={MaterialsIcon}
      iconName= {iconName}//{"directions-bus"}
      iconColor={"#f4d29a"}
      autoCorrect={false} placeholder={placeholder} keyboardType={keyboard_type} value={value} onChangeText={onChangeText}  secureTextEntry={secureTextEntry}
      labelStyle={{ color: "#91627b" }}
      inputStyle={{ color: "#91627b" }}
      useNativeDriver
      
    />
 </View>
      

    );
}
export  {TextInputWithIcon};