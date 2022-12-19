import {View, Image, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Images} from '../../utils/Images';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const QuoteOftheDayHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView
        style={[CommonStyles.spaceBetween, styles.QuoteOftheDayHeaderView]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[CommonStyles.center, styles.goBackIconBorderQuoteFoThaDay]}>
          <Image style={{tintColor: '#ffffff'}} source={Images.goBackButton} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[CommonStyles.center, styles.goBackIconBorderQuoteFoThaDay]}>
          <Image style={{tintColor: '#ffffff'}} source={Images.random} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default QuoteOftheDayHeader;
