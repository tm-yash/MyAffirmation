import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../utils/Images';
import {styles} from './styles';

export function NoData({handleViewMore}) {
  return (
    <View style={styles.alertMContainer}>
      <Image source={Images.nodataImage} style={styles.image} />
      <Text style={styles.alertText}>
        No more quotes found for this category or author. Click on Refresh Now
        to see more quotes
      </Text>
      <TouchableOpacity
        onPress={handleViewMore}
        style={styles.alertButtonContainer}>
        <Image source={Images.refresh} style={styles.refreshIcon} />
        <Text style={styles.alertButtonText}>Refresh Now</Text>
      </TouchableOpacity>
    </View>
  );
}
