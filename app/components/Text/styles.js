import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        color:'$white',
        paddingRight: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    }

});