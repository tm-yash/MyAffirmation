import {StyleSheet, Platform} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  headerFlex: {
    paddingTop: vs(10),
    paddingHorizontal: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'center',
  },
  settingHeaderTitle: {
    fontSize: 26,
    fontWeight: '500',
    justifyContent: 'center',
    color: Platform.OS === 'ios' ? '#000000' : '#000000',
  },
  settingHeaderSubTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  settingIconBorder: {
    borderColor: '#283244',
    borderWidth: 1,
    width: ms(50),
    height: ms(50),
    borderRadius: 12,
  },
  goBackHeaderView: {
    marginHorizontal: Platform.OS === 'ios' ? s(20) : s(22),
    flexDirection: 'row',
    alignItems: 'center',
  },
  QuoteOftheDayHeaderView: {
    marginHorizontal: Platform.OS === 'ios' ? s(20) : s(22),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? vs(10) : vs(30),
    marginBottom: Platform.OS === 'ios' ? vs(10) : vs(20),
  },
  QuoteFoThaDayFooterBorder: {
    borderColor: '#ffffff',
    borderWidth: 2,
    width: Platform.OS === 'ios' ? ms(58) : ms(52),
    height: Platform.OS === 'ios' ? ms(58) : ms(52),
    borderRadius: 17,
  },
  QuoteFoThaDayFooter: {
    marginHorizontal: Platform.OS === 'ios' ? s(20) : s(22),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? vs(0) : vs(20),
  },
  goBackIconBorder: {
    borderColor: '#283244',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
  },
  goBackIconBorderQuoteFoThaDay: {
    borderColor: '#ffffff',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
  },
  goBackHEaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: s(60),
  },
  selectColorView: {
    width: ms(45),
    height: ms(45),
    borderRadius: 30,
    marginHorizontal: s(5),
  },
  closeIconBorder: {
    borderColor: '#ffffff',
    borderWidth: 1,
    width: ms(50),
    height: ms(50),
    borderRadius: 12,
  },
  goBackButton: {
    tintColor: '#000000',
  },
  goBackIconBorder: {
    borderColor: '#283244',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ms(50) : ms(45),
    height: Platform.OS === 'ios' ? ms(50) : ms(45),
    borderRadius: 12,
  },
  galleryHeader: {
    paddingHorizontal: Platform.OS === 'ios' ? s(20) : s(20),
    paddingTop: Platform.OS === 'ios' ? vs(10) : vs(19),
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Platform.OS === 'ios' ? '#000000' : '#000000',
    position: 'absolute',
    left: '40%',
  },
  footerIconText: {
    fontSize: 18,
    color: '#ffffff',
    paddingTop: 5,
  },

  // button style
});
