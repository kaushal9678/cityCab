import React,{Component} from 'react';
import {Alert,TextInput,Button} from 'react-native'
import {Container} from '../Container'
import {ButtonWithGradient} from '../Button'
//import {styles} from './styles'

 class TextInputBar extends Component{
    //state = {text: ''};
  
    render() {
        return (
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
               /*  onChangeText={text => {
                  this.setState({text});
                }} */
                value= 'Done'//{this.state.text}
                placeholder={'Type a message...'}
              />
              <Button
                onPress={() => {
                  Alert.alert('You tapped the button!');
                }}
                title="Send"
              />
            </View>
          );
        }
      }
      


  const styles = {
    textInputContainer: {
      flexDirection: 'row',
    },
    textInput: {
      flex: 1,
      paddingLeft: 10,
    },
    text: {
      padding: 10,
      color: 'white',
    },
    textBubbleBackground: {
      backgroundColor: '#2f7bf6',
      borderRadius: 20,
      width: 110,
      margin: 20,
    },
  };
  export default TextInputBar;