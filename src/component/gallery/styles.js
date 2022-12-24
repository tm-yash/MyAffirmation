import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  settingHeaderTitle: {
    fontSize: 24,
    fontWeight: '500',
    justifyContent: 'center',
    color: '#000000',
  },
  TemplateBackground: {
    justifyContent: 'space-between',
    paddingRight: s(10),
    paddingTop: vs(10),
  },
  goBackIconBorder: {
    borderColor: '#283244',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
  },
  BackgroundImag: {
    width: Platform.OS === ' ios' ? s(150) : s(150),
    height: Platform.OS === 'ios' ? vs(155) : vs(178),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100%',
    margin: 20,
    backgroundColor: '#F76793',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: s(20),
    marginTop: vs(10),
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    paddingHorizontal: s(20),
    borderColor: '#ffffff',
    borderWidth: 1,
    width: ms(50),
    height: ms(50),
    borderRadius: 12,
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
  TemplateHeader: {
    marginTop: Platform.OS === 'ios' ? 0 : vs(12),
  },
  searchContainer: {
    width: s(300),
    height: vs(50),
    backgroundColor: '#ffffff',
    marginTop: Platform.OS === 'ios' ? vs(-60) : vs(-60),
    borderRadius: 12,
    // marginRight: 70,
  },
  container: {
    flex: 1,
    backgroundColor: '#EDF4F6',
  },
  selectTitle: {
    alignSelf: 'center',
    marginLeft: s(10),
  },
  titleWrapper: {
    alignSelf: 'flex-start',
    marginTop: vs(12),
    marginLeft: s(5),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: isIphoneX() ? vs(1) : vs(-5),
  },
  templateCard: {
    height: ms(120),
    width: isIphoneX() ? ms(250) : ms(250),
    borderRadius: 20,
    marginHorizontal: s(5),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabBar: {
    padding: ms(15),
    borderWidth: 1,
    width: '48%',
    alignItems: 'center',
    borderRadius: 50,
  },
  activeTab: {
    padding: ms(15),
    width: '40%',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: 'pink',
  },
  inActive: {
    padding: ms(15),
    width: '40%',
    alignItems: 'center',
  },
  inActiveText: {
    color: '#000000',
  },
  closeIconView: {
    position: 'absolute',
    borderColor: '#000000',
    borderWidth: 1,
    height: ms(50),
    width: ms(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    top: Platform.OS === 'ios' ? 57 : 19,
    right: 20,
  },
  closeIcon: {
    tintColor: '#000000',
  },
});
