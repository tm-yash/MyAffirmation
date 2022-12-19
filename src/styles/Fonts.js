import {isIphoneX} from 'react-native-iphone-x-helper';
import {Platform, StatusBar, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const deviceHeight = isIphoneX()
  ? height - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === 'android'
  ? height - Number(StatusBar.currentHeight)
  : height;

export function FontPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
export function FontValue(fontSize) {
  // guideline height for standard 5" device screen
  const standardScreenHeight = 680;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export const Fonts = {
  family: {
    PoppinsBlack: 'Poppins-Black',
    PoppinsBlackItalic: 'Poppins-BlackItalic',
    PoppinsBold: 'Poppins-Bold',
    PoppinsBoldItalic: 'Poppins-BoldItalic',
    PoppinsExtraBold: 'Poppins-ExtraBold',
    PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
    PoppinsExtraLight: 'Poppins-ExtraLight',
    PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
    PoppinsItalic: 'Poppins-Italic',
    PoppinsLight: 'Poppins-Light',
    PoppinsLightItalic: 'Poppins-LightItalic',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsMediumItalic: 'Poppins-MediumItalic',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
    PoppinsThin: 'Poppins-Thin',
    PoppinsThinItalic: 'Poppins-ThinItalic',
    Anton: 'Anton-Regular',
    BebasNeue: 'BebasNeue-Regular',
    DancingScript: 'DancingScript-VariableFont_wght',
    JosefinSans: 'JosefinSans-Italic-VariableFont_wght',
    Monoton: 'Monoton-Regular',
    Roboto: 'Roboto-Bold',
    SourceCodePro: 'SourceCodePro-Bold',
    Aclonico: 'Aclonica-Regular',
    AmaticScBold: 'AmaticSC-Bold',
    ArchitectsDaughter: 'ArchitectsDaughter-Regular',
    RobotoBold: 'Roboto-Bold',
    RobotoItalic: 'Roboto-BoldItalic',
    SourceCodeBlack: 'SourceCodePro-Black',
    Pacifico: 'Pacifico-Regular',
    LobSter: 'Lobster-Regular',
    AbrilFatFace: 'AbrilFatface-Regular',
  },
  size: {
    xxs: FontValue(8),
    xs: FontValue(10),
    s: FontValue(12),
    m: FontValue(14),
    l: FontValue(16),
    xl: FontValue(18),
    xxl: FontValue(20),
    xxxl: FontValue(24),
    title: FontValue(28),
  },
};
