import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoBackHeader from '../common/GoBackHeader';
import {styles} from './styles';
import {s, ms, vs} from 'react-native-size-matters';
import {CategoriesCall} from '../../actions/CategoriesCall';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';
import {AllCategorySkeleton} from '../skelton/SkeltonComponent';

const CategoryComponent = () => {
  const [allCategories, setAllCategories] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    const allCategoriesRes = await CategoriesCall();
    console.log('allCategoriesRes: ', allCategoriesRes.data);
    setAllCategories(allCategoriesRes.data);
  };

  const handelCategories = item => {
    navigation.navigate('CategoriesReelScreen', {categories: item});
  };

  const renderItem = ({item, index}) => {
    return (
      <DropShadow key={index} style={styles.shadowProp}>
        <TouchableOpacity
          onPress={() => handelCategories(item)}
          style={styles.allCatrgoriesFlatLisView}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.categoriesImag}>
              <FastImage
                style={{width: ms(40), height: ms(40)}}
                source={{uri: item.icon[0]}}
              />
            </View>
            <Text style={styles.categoriesName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </DropShadow>
    );
  };

  return (
    <>
      {loading ? (
        <AllCategorySkeleton />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#EDF4F6',
          }}>
          <View style={{paddingBottom: vs(40)}}>
            <View style={styles.allCategoriesMainView}>
              <View style={styles.goBackHeaderFlax}>
                <GoBackHeader />
                <Text style={styles.goBackHEaderTitle}>Categories</Text>
              </View>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: Platform.OS === 'ios' ? s(20) : s(18),
                paddingBottom: Platform.OS === 'ios' ? vs(80) : vs(40),
              }}
              numColumns={3}
              data={allCategories}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              key={item => item.id}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default CategoryComponent;
