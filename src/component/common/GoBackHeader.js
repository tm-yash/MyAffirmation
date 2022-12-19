import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Images} from '../../utils/Images';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const GoBackHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView style={styles.goBackHeaderView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[CommonStyles.center, styles.goBackIconBorder]}>
          <Image style={{tintColor: '#000000'}} source={Images.goBackButton} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default GoBackHeader;
