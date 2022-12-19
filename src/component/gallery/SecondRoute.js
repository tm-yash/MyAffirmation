import React, {useState} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {vs} from 'react-native-size-matters';

const TemplateData = [
  {
    id: '0',
    TemplateImage: Images.template1,
  },
  {
    id: '1',
    TemplateImage: Images.template2,
  },
  {
    id: '2',
    TemplateImage: Images.template3,
  },
  {
    id: '3',
    TemplateImage: Images.template4,
  },
  {
    id: '4',
    TemplateImage: Images.template5,
  },
  {
    id: '5',
    TemplateImage: Images.template6,
  },
  {
    id: '6',
    TemplateImage: Images.template7,
  },
  {
    id: '7',
    TemplateImage: Images.template8,
  },
];

export const SecondRoute = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          if (index == 0) {
            navigation.navigate('SelectTemplate1Screen');
          } else if (index == 1) {
            navigation.navigate('SelectTemplate2Screen');
          } else if (index == 2) {
            navigation.navigate('SelectTemplate3Screen');
          } else if (index == 3) {
            navigation.navigate('SelectTemplate4Screen');
          } else if (index == 4) {
            navigation.navigate('SelectTemplate5Screen');
          } else if (index == 5) {
            navigation.navigate('SelectTemplate6Screen');
          } else if (index == 6) {
            navigation.navigate('SelectTemplate7Screen');
          } else if (index == 7) {
            navigation.navigate('SelectTemplate8Screen');
          }
        }}
        style={styles.TemplateBackground}>
        <Image style={styles.BackgroundImag} source={item.TemplateImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        contentContainerStyle={{paddingBottom: vs(30)}}
        numColumns={2}
        data={TemplateData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        key={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
