import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CommonStyles} from '../../../styles/CommonStyles';
import {useNavigation} from '@react-navigation/native';
import {CategoriesCall} from '../../../actions/CategoriesCall';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../utils/Images';
import {s} from 'react-native-size-matters';

const CategoryFlatList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories('');
  }, []);

  const getCategories = async () => {
    const res = await CategoriesCall(categories);
    console.log('res: ', res);
    if (res) {
      setCategories(res.data);
    }
  };

  const handelCategories = item => {
    console.log('item: ', item);
    navigation.navigate('CategoriesReelScreen', {categories: item});
  };

  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => handelCategories(item)}
        style={styles.categoriesFlatListView}>
        <View style={styles.categoriesImagView}>
          <FastImage
            style={styles.categoriesIcon}
            source={{uri: item.icon[0]}}
          />
        </View>
        <Text style={styles.categoriesName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={[CommonStyles.spaceBetween, styles.flatListHeadding]}>
        <Text style={styles.categoryFlatListTitle}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
          <Text style={styles.categorySeeMore}>See More</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginLeft: s(20)}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CategoriesReelScreen')}
          style={styles.categoriesRandomView}>
          <View style={styles.categoriesImagView}>
            <Image style={styles.categoriesIcon} source={Images.random} />
          </View>
          <Text style={styles.categoriesName}>Random</Text>
        </TouchableOpacity>

        <FlatList
          contentContainerStyle={{paddingLeft: 0, paddingRight: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categories.slice(0, 9)}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default CategoryFlatList;
