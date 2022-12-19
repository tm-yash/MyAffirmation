import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  settingScreen: {
    flex: 1,
    backgroundColor: '#EDF4F6',
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? vs(10) : vs(19),
  },
  settingHeaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 60,
    color: '#000000',
  },
  notificationHeading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '400',
  },
  notificationSubHeading: {
    color: '#767A7B',
    fontSize: 14,
    fontWeight: '400',
    width: s(200),
  },
  SettingOptions: {
    paddingHorizontal: s(20),
    marginTop: vs(25),
  },
  timeBtn: {
    height: vs(30),
    marginTop: vs(10),
    borderRadius: 10,
    width: s(75),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  timeStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 18,
    // fontFamily: Fonts.family.PoppinsRegular,
  },
});
