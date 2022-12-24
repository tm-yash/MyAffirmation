import {StyleSheet, Dimensions, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from './Colors';
// import {Fonts} from './Fonts';

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.screenBackground,
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    borderRadius: 15,
    width: s(275),
    paddingVertical: vs(12),
    alignSelf: 'center',
    marginVertical: Platform.OS === 'ios' ? vs(5) : vs(15),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  butoonEndPosition: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  authHeader: {
    borderWidth: 1,
    borderColor: 'rgba(106, 112, 129, 0.2)',
    borderRadius: 10,
    width: ms(45),
    height: ms(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(10),
    marginHorizontal: s(13),
    backgroundColor: 'white',
  },
  authIcon: {
    height: ms(14),
    width: ms(14),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  authTitle: {
    // fontFamily: Fonts.family.SemiBold,
    // fontSize: Fonts.Size.XXXL,
    color: '#000',
  },
  headerSpacing: {
    marginTop: vs(33),
    marginHorizontal: s(14),
  },
  headerSubtitle: {
    // fontFamily: Fonts.family.Regular,
    // fontSize: Fonts.Size.M,
    color: 'rgba(124, 124, 124, 1)',
    width: s(220),
    marginTop: vs(9),
  },
  authInputTitle: {
    color: '#000',
    // fontSize: Fonts.Size.L,
    // fontFamily: Fonts.family.Medium,
    marginHorizontal: s(13),
  },
  authTextTopSpacing: {
    marginTop: vs(13),
  },
  authInputBox: {
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 234, 1)',
    borderRadius: 13,
    padding: s(14),
    marginHorizontal: s(13),
    marginTop: vs(10),
    // fontSize: Fonts.Size.M,
    backgroundColor: 'white',
  },
  line: {
    height: Platform.OS === 'ios' ? vs(0.3) : vs(0.2),
    width: '100%',
    backgroundColor: 'black',
  },
  headerFlex: {
    paddingTop: vs(10),
    paddingHorizontal: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // TEMPLATE STYLE

  goBackHeaderView: {
    marginHorizontal: Platform.OS === 'ios' ? s(20) : s(22),
    zIndex: 9999999,
    position: 'absolute',
    top: Platform.OS === 'ios' ? s(50) : s(22),
    width: s(310),
  },
  goBackIconBorder: {
    borderColor: '#ffffff',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
  },
  quoteOfTHeDayScreen: {
    alignItems: 'center',
    paddingTop: vs(90),
    height: Dimensions.get('window').height,
  },
  QuoteFoThaDayFooterBorder: {
    borderColor: '#ffffff',
    borderWidth: 2,
    width: Platform.OS === 'ios' ? ms(58) : ms(52),
    height: Platform.OS === 'ios' ? ms(58) : ms(52),
    borderRadius: 17,
  },
  quoteViewStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: s(20),
    width: Platform.OS === 'ios' ? s(330) : s(330),
    height: Platform.OS === 'ios' ? vs(490) : vs(470),
    paddingLeft: s(30),
  },
  footerIconText: {
    fontSize: 18,
    color: '#ffffff',
    paddingTop: 5,
  },
  footer: {width: 270},

  // BUTTON

  selectColorMainView: {
    position: 'absolute',
    paddingVertical: vs(20),
    backgroundColor: '#ffffff',
    height: vs(120),
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // top: Platform.OS === 'ios' ? vs(160) : vs(150),
    bottom: 0,
  },
  HomeScreenNoch: {
    backgroundColor: '#EEEEEE',
    width: s(50),
    height: vs(5),
    borderRadius: 4,
    marginBottom: vs(15),
    alignSelf: 'center',
  },
  buttonView: {
    // marginTop: 50,
    paddingBottom: 20,
  },
  QuoteCancelBtn: {
    height: vs(60),
    width: s(153),
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
  },
  cancelTitle: {
    fontSize: 20,
    color: '#A6A7A6',
    fontWeight: '600',
  },
  saveTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
  QuoteSaveBtn: {
    height: vs(60),
    width: s(153),
    backgroundColor: '#AA67DD',
    borderRadius: 20,
  },
});
