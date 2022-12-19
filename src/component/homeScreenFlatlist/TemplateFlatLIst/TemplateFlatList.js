import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonStyles} from '../../../styles/CommonStyles';
import {Images} from '../../../utils/Images';
import {s} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const DATA = [
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
];

const TemplateFlatList = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          item.id == 0
            ? navigation.navigate('HomeScnTemplateScreen1')
            : item.id == 1
            ? navigation.navigate('HomeScnTemplateScreen2')
            : item.id == 2
            ? navigation.navigate('HomeScnTemplateScreen3')
            : item.id == 3
            ? navigation.navigate('HomeScnTemplateScreen4')
            : item.id == 4
            ? navigation.navigate('HomeScnTemplateScreen5')
            : // : item.id == 5
              null;
        }}
        style={styles.TemplateImagView}
        key={index}>
        <Image style={{marginRight: 15}} source={item.TemplateImage} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.TemplateFlatListMainView}>
      <View style={[CommonStyles.spaceBetween, styles.flatListHeadding]}>
        <Text style={styles.categoryFlatListTitle}>Templates</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TemplateScreen')}>
          <Text style={styles.categorySeeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{paddingLeft: 20, paddingRight: s(20)}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TemplateFlatList;
