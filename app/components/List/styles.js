import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";
const styles = EStyleSheet.create({
$underLayColor:'$border',

  row: {
   // height: 48
   paddingHorizontal: 20,
   paddingVertical: 16,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   backgroundColor:'$white',
  // height:50,
  },
  
text:{
    fontSize: 16,
    color:'$darkText'
},
  
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    backgroundColor: '$border',
    flex:1
  },
  iconVisible:{
    backgroundColor: "$primaryBlue",
  },
  checkIcon:{
    width:18,
    alignSelf: 'center',
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "$primaryBlue",
    justifyContent: "center",
    alignItems: "center",
    
  },
  icon: {
    width: 30,
    height:30,
    borderRadius:15,
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignSelf: "center",
    alignItems:"center"
  }
});
export default styles;
