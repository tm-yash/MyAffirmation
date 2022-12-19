import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonStyles} from '../../styles/CommonStyles';
import {Images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';

const SettingHeader = props => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SettingScreen')}
        style={[CommonStyles.center, styles.settingIconBorder]}>
        <Image source={Images.appSettingIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingHeader;
