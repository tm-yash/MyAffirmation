import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../utils/Images';
import {styles} from './styles';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation} from '@react-navigation/native';

const GalleryComponentHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={[CommonStyles.spaceBetween, styles.galleryHeader]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[CommonStyles.center, styles.goBackIconBorder]}>
        <Image style={styles.goBackButton} source={Images.goBackButton} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default GalleryComponentHeader;
