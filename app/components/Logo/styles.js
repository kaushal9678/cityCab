import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $smallFontSize:16.0,
  $largeFontSize :25.0,
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  backgroundImage: {          // <- new
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  logo: {
    width: '$largeImageSize',
  },
  text: {
    fontWeight: 'bold',
    fontSize:'$largeFontSize', //32,
    letterSpacing: 1,
    marginTop: 15,
    color: '$white',
  },
});

//export default styles;