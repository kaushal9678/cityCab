import EStyleSheet from "react-native-extended-stylesheet";
import {StyleSheet} from 'react-native'
const INPUT_HEIGHT = 55;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
$buttonBackgroundColorBase:'$white',
$buttonBackgroundColorModifier:0.2,

  container: {
    backgroundColor: '#fff',
    width: "90%",
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    padding: 2,
    
  },
  containerDisabled:{
    backgroundColor:'$lightGray'

  },
  buttonContainer: {
    padding:5,
    //width:'20%',
    height:INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent:'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,

    
  },
  input: {
    flex: 1,
    //paddingLeft: 10,
    //color:'#7979',
    height:INPUT_HEIGHT,
    width:'90%',
    paddingBottom: 0,
    //marginVertical:10,
    

  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color:'$primaryBlue',

  },
  border: {
     // borderWidth: 1,
      backgroundColor:  '$primaryBlue',
      height:INPUT_HEIGHT,
      width: StyleSheet.hairlineWidth,
  }
});
