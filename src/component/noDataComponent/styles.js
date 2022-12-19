import {StyleSheet} from 'react-native';
// import {Colors} from '../../styles/colors';
import {s, vs} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  image: {resizeMode: 'contain', alignSelf: 'center', height: vs(300)},
  alertText: {
    marginVertical: vs(20),
    textAlign: 'center',
    fontFamily: Fonts.family.PoppinsRegular,
    fontSize: 22,
    backgroundColor: 'black',
    color: Colors.black,
    lineHeight: vs(30),
    marginHorizontal: s(40),
  },
  alertButtonContainer: {
    flexDirection: 'row',
    marginTop: vs(20),
    borderRadius: 12,
    backgroundColor: Colors.nileBlue,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    margin: 14,
    height: vs(50),
    padding: 12,
  },
  alertMContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: vs(10),
    backgroundColor: Colors.black,
  },
  refreshIcon: {
    alignSelf: 'center',
    resizeMode: 'contain',
    tintColor: 'white',
    height: vs(15),
  },
  alertButtonText: {
    alignSelf: 'center',
    fontFamily: Fonts.family.PoppinsSemiBold,
    color: 'white',
    fontSize: 18,
    marginHorizontal: s(20),
  },
});
