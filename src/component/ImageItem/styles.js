import {StyleSheet, Dimensions} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {vs, s, ms} from 'react-native-size-matters';
import {Fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  images: {
    height: ms(350),
    width: ms(350),
    borderRadius: 10,
    alignSelf: 'center',
  },
  card: {
    height: Dimensions.get('window').height,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  captureImage: {
    resizeMode: 'contain',
    borderRadius: 10,
    marginHorizontal: s(30),
  },
  image: {
    resizeMode: 'contain',
    height: vs(260),
    width: s(320),
    marginTop: ms(10),
    borderRadius: 15,
  },
  shareContainer: {
    position: 'absolute',
    bottom: isIphoneX() ? vs(15) : vs(24),
    right: s(45),
  },
  shareIcon: {
    resizeMode: 'contain',
    height: vs(28),
    marginRight: s(-25),
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: isIphoneX() ? vs(13) : vs(10),
  },
  bottomBarTitle: {
    // fontFamily: Fonts.family.PoppinsThin,
    fontSize: 20,
    marginTop: s(20),
    marginLeft: s(20),
    margin: isIphoneX() ? vs(15) : vs(20),
  },
});
