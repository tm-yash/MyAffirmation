import {Dimensions, Platform, StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {vs, s, ms} from 'react-native-size-matters';
import {Colors} from '../../styles/Colors';

const WINDOW = Dimensions.get('window');

export const styles = StyleSheet.create({
  editImage: {
    width: 400,
    height: 400,
    backgroundColor: 'red',
    marginTop: 100,
  },
  container: {
    flex: 1,
    paddingHorizontal: s(20),
    paddingVertical: isIphoneX() ? vs(40) : vs(20),
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeIconBorder: {
    borderColor: '#000',
    borderWidth: 1,
    width: ms(50),
    height: ms(50),
    borderRadius: 12,
  },
  goBackImage: {
    tintColor: '#000',
  },
  icon: {
    // height: 30,
    // width: 30,
    tintColor: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
  },
  icons: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  goBackIconBorder: {
    borderColor: '#283244',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
  },
  images: {
    height: ms(380),
    width: ms(350),
    borderRadius: 10,
    alignSelf: 'center',
  },
  captureImage: {
    resizeMode: 'contain',
    borderRadius: 10,
    marginHorizontal: s(30),
  },
  imageWrapper: {
    height: vs(400),
    width: s(320),
    overlayColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    backgroundColor: 'black',
    zIndex: 1,
  },
  selectedImage: {
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  wrapper: {
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  box: {
    height: vs(43),
    width: s(110),
    margin: ms(4),
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F4',
    borderRadius: 30,
  },
  boxSquor: {
    height: vs(50),
    width: s(50),
    margin: ms(4),
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F4',
    borderRadius: 12,
  },
  filterTitle: {
    textAlign: 'center',
    // letterSpacing: 2,
    fontSize: 18,
    color: '#777777',
  },
  text: {
    alignSelf: 'center',
    marginTop: vs(40),
    fontSize: 20,
  },
  extra: {
    marginTop: vs(10),
    alignSelf: 'center',
  },
  btnWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: ms(10),
  },
  parent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  colorTouch: {
    width: ms(50),
    height: ms(50),
    borderRadius: 30,
    marginLeft: s(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {height: 4, width: 4},
  },
  touch: {
    padding: ms(18),
    margin: ms(4),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  background: {
    position: 'absolute',
    resizeMode: 'cover',
    width: WINDOW.width,
    height: WINDOW.height,
    flexDirection: 'column',
  },
  process: {
    borderRadius: 10,
    flexDirection: 'row',
    elevation: Platform.OS === 'ios' ? 15 : 0,
    zIndex: Platform.OS === 'ios' ? 50 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 100,
    width: '100%',
  },
  slide: {
    flex: 6,
    marginRight: s(20),
  },
  parentOfSlide: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratioText: {
    textAlign: 'center',
    fontSize: 16,
    // marginTop: 2,
  },
  ratioIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  editMenu: {
    backgroundColor: '#fff',
    paddingBottom: vs(20),
    paddingHorizontal: s(10),
  },
  fontBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: ms(4),
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },

  selectColorViewAll: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
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

  // NEW STYLE

  borderStyles: {
    borderStyle: 'solid',
    borderColor: '#ffff',
    borderWidth: 2,
  },
  textStyles: {
    color: '#000',
  },
  cornerStyles: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'red',
    borderColor: 'red',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
