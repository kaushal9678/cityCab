import EStyleSheet from "react-native-extended-stylesheet";
const HEIGHT = 48,
BORDER_RADIUS  = 4
export default EStyleSheet.create({
    $buttonBackgroundColorBase:'$white',
    $buttonBackgroundColorModifier:0.2,

container:{
   
    width: "95%",
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'space-between',
   // justifyContent: "center",
    marginVertical: 11,
    //position: 'absolute',
   // bottom:-60,
    height:50,
   
},
subContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
},
buttonStyle:{
   // backgroundColor: '#00F0F8FF',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    borderRadius:4,


},

buttonText:{
    fontSize: 22,
    fontWeight: '600',
    color:'$white',
    paddingHorizontal: 15,
    alignSelf: 'center',
    paddingVertical: 10,
    


},
imageStyle:{
    width:20,
    height:20,
  
    //marginRight: 10,
   // paddingRight: 5,
   
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
