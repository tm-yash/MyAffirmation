import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {Fonts} from '../../styles/Fonts';

export const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    backgroundColor: '#EDF4F6',
  },
  quoteTemplate: {
    width: s(300),
    height: vs(310),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteBg1: {
    width: Platform.OS === 'ios' ? s(212) : s(212),
    height: Platform.OS === 'ios' ? vs(252) : vs(2200),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  quoteBg2: {
    width: s(179),
    height: vs(131),
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  watermark: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: vs(20),
  },
  quoteBg3: {
    width: ms(50),
    height: ms(50),
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
  leftQuoteIcon: {
    alignSelf: 'flex-start',
  },
  rightQuoteIcon: {
    alignSelf: 'flex-end',
  },
  quoteStyle: {
    color: '#ffff',
    fontSize: 18,
    marginTop: vs(20),
    textAlign: 'center',
  },
  settingHeaderTitle: {
    fontSize: 26,
    // fontWeight: '500',
    color: '#000000',
    fontFamily: Fonts.family.PoppinsMedium,
  },
  settingHeaderSubTitle: {
    fontSize: 18,
    color: '#000000',
  },
  carouselBlock: {
    marginTop: vs(35),
  },
  sliderItems: {
    alignSelf: 'center',
    height: vs(290),
    width: s(220),
    borderRadius: 10,
  },
  heading: {
    textAlign: 'center',
    marginTop: vs(35),
    color: '#000',
  },
  contents: {
    textAlign: 'center',
    marginTop: vs(10),
  },
  dotStyles: {
    width: s(8),
    height: vs(7),
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#D820DC',
    marginTop: vs(5),
  },
  nextButton: {
    justifyContent: 'flex-end',
    marginTop: isIphoneX() ? vs(80) : vs(60),
  },
  sliderImage: {
    height: isIphoneX() ? vs(300) : vs(300),
    width: isIphoneX() ? s(300) : s(285),
    borderRadius: 20,
    resizeMode: 'contain',
  },
  HomeScreenNoch: {
    backgroundColor: '#EEEEEE',
    width: s(50),
    height: vs(5),
    borderRadius: 4,
    marginTop: vs(10),
    marginBottom: vs(15),
    alignSelf: 'center',
  },
  homeFlatListSections: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
  },
  breakLine: {
    height: 3,
    backgroundColor: '#F4F6F6',
    width: '100%',
    marginVertical: vs(15),
  },
  homeHeader: {
    marginTop: isIphoneX() ? 0 : vs(7),
    paddingBottom: vs(20),
  },
  homeSliderAndHEaderView: {
    marginBottom: isIphoneX() ? vs(30) : vs(30),
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingBottom: vs(18),
  },
});
