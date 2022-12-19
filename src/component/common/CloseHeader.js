import {TouchableOpacity, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Images} from '../../utils/Images';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function CloseHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[CommonStyles.center, styles.closeIconBorder]}>
        <Image source={Images.closeIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
