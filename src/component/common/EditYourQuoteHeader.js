import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonStyles} from '../../styles/CommonStyles';
import {Images} from '../../utils/Images';

const EditYourQuoteHeader = props => {
  return (
    <View style={[CommonStyles.spaceBetween, styles.galleryHeader]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[CommonStyles.center, styles.goBackIconBorder]}>
        <Image style={styles.goBackButton} source={Images.goBackButton} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchScreen')}
        style={[CommonStyles.center, styles.goBackIconBorder]}>
        <Image source={Images.rightIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default EditYourQuoteHeader;
