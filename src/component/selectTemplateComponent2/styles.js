import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  templateMainScreen: {
    flex: 1,
  },
  bgObject1: {
    height: vs(190),
    width: s(200),
    resizeMode: 'contain',
    position: 'absolute',
    left: -10,
    top: 50,
  },
  bgObject2: {
    height: vs(190),
    width: s(200),
    resizeMode: 'contain',
    position: 'absolute',
    right: -10,
    bottom: -10,
    zIndex: -999999999,
  },
  selectColorView1: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectColorView2: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRedius: {
    borderRadius: 40,
  },
  selectColorView3: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectColorView4: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectColorView5: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectColorView6: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectColorViewAll: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
  },

  templateMainView: {
    flex: 1,
    height: '100%',
  },
  // selectColorMainView: {
  //   position: 'absolute',
  //   paddingVertical: vs(20),
  //   backgroundColor: '#ffffff',
  //   height: vs(120),
  //   width: '100%',
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   // top: Platform.OS === 'ios' ? vs(160) : vs(150),
  //   bottom: 0,
  // },
  allQuotesVIew: {
    paddingTop: vs(20),
  },
  Quotes: {
    width: ms(75),
    height: ms(75),
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
  },
  QuotesTitle: {
    fontSize: 18,
    position: 'absolute',
    color: '#000000',
  },
  // QuoteCancelBtn: {
  //   height: vs(60),
  //   width: s(153),
  //   backgroundColor: '#EEEEEE',
  //   borderRadius: 20,
  // },
  // QuoteSaveBtn: {
  //   height: vs(60),
  //   width: s(153),
  //   backgroundColor: '#AA67DD',
  //   borderRadius: 20,
  // },
  // buttonView: {
  //   // marginTop: 50,
  //   paddingBottom: 20,
  // },
  // cancelTitle: {
  //   fontSize: 20,
  //   color: '#A6A7A6',
  //   fontWeight: '600',
  // },
  // saveTitle: {
  //   fontSize: 20,
  //   color: '#ffffff',
  //   fontWeight: '600',
  // },
  input: {
    fontWeight: '600',
    fontSize: 22,
    color: '#ffffff',
    // textAlign: 'center',
    marginTop: vs(20),
  },
  QuoteBackground1: {
    width: Platform.OS === 'ios' ? ms(320) : ms(300),
    height: Platform.OS === 'ios' ? ms(320) : ms(300),
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? vs(30) : vs(20),
  },
  CreateQuoteView: {
    paddingHorizontal: s(20),
    marginTop: Platform.OS === 'ios' ? vs(50) : vs(30),
  },
  somePlaceholderStyle: {
    fontSize: 22,
    color: '#ffffff',
  },
  QuoteBackgroundTitle: {
    color: '#ffffff',
    fontSize: 18,
    paddingVertical: 10,
    fontWeight: '500',
    marginTop: 10,
  },

  authorNameInputs: {
    color: 'white',
    width: '100%',
    alignSelf: 'flex-start',
    marginLeft: s(28),
    marginTop: isIphoneX() ? vs(6) : vs(0),
    marginBottom: vs(10),
  },
  // HomeScreenNoch: {
  //   backgroundColor: '#EEEEEE',
  //   width: s(50),
  //   height: vs(5),
  //   borderRadius: 4,
  //   marginBottom: vs(15),
  //   alignSelf: 'center',
  // },

  // MODEL STYLE
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    width: '100%',
    height: vs(125),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 10,
    padding: 10,
  },
  buttonOpen: {
    borderColor: '#ffffff',
    borderWidth: 1,
    width: ms(50),
    height: ms(50),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#EAE9E9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: s(20),
    width: ms(30),
    height: ms(30),
    marginVertical: vs(20),
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  colorPikerIcon: {
    width: ms(20),
    height: ms(20),
  },
  AuthorPhoto: {
    height: ms(53),
    width: ms(53),
    borderRadius: 12,
    alignSelf: 'center',
  },
});
