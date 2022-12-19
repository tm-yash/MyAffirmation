import {StyleSheet} from 'react-native';
import {vs, s} from 'react-native-size-matters';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {Colors} from '../../styles/Colors';

export const styles = StyleSheet.create({
  tabIcon: {
    height: vs(20),
    width: s(20),
    resizeMode: 'contain',
  },
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: vs(10),
    borderTopWidth: 0,
    height: vs(65),
    alignItems: 'center',
    paddingVertical: isIphoneX() ? vs(32) : vs(12),
    borderRadius: 20,
    marginHorizontal: 20,
    shadowRadius: 5,
    shadowOpacity: 3,
    shadowOffset: {height: 2, width: 2},
    elevation: 8,
    activeTintColor: '#2F7C6E',
    inactiveTintColor: '#222222',
    paddingTop: 300,
  },
});
