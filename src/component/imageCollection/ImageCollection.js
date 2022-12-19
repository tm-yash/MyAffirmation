import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CategoriesCall} from '../../actions/CategoriesCall';
import {styles} from './styles';
import SettingHeader from '../common/SettingHeader';
import {CommonStyles} from '../../styles/CommonStyles';
import FastImage from 'react-native-fast-image';
import {ms, s, vs} from 'react-native-size-matters';
import {QuotImage} from '../../actions/QuotImag';
import {ImageCollectionSkeleton} from '../skelton/SkeltonComponent';

const ImageCollection = () => {
  const [Categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [all, setAll] = useState(true);

  useEffect(() => {
    getCategories();
    getImage('');
  }, []);

  const getCategories = async () => {
    const response = await CategoriesCall();
    console.log('getCategories by id response: ', response);
    setCategories(response.data);
    console.log('setCategories: ', setCategories);
  };

  const getImage = async id => {
    setLoading(true);
    const ImagResponse = await QuotImage(id);
    console.log('ImagResponse: ', ImagResponse);
    setImg(ImagResponse.data);
    console.log('setImg: ', setImg);
    setLoading(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.categoriesBtn,
          {backgroundColor: selected === item._id ? '#AA67DD' : '#FFFFFF'},
        ]}
        onPress={() => {
          setSelected(item._id), getImage(item._id), setAll(false);
        }}>
        <Text
          style={[
            styles.categoriesTitle,
            {color: selected === item._id ? '#FFFFFF' : '#CCCCCC'},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const getAllImage = ({item, index}) => {
    return (
      <View key={index} style={{alignSelf: 'center', marginVertical: s(10)}}>
        <FastImage
          style={{width: ms(326), borderRadius: 20, height: ms(326)}}
          source={{uri: item.image[0]}}
        />
      </View>
    );
  };

  return (
    <>
      {loading ? (
        <ImageCollectionSkeleton />
      ) : (
        <View style={styles.ImageCollectionScreen}>
          <View
            style={[CommonStyles.spaceBetween, styles.ImageCollectionHeader]}>
            <Text style={styles.ImageCollectionTitle}>Image Collection</Text>
            <SettingHeader />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  style={[
                    styles.categoriesBtn,
                    {
                      backgroundColor: all === true ? '#AA67DD' : '#FFFFFF',
                      marginLeft: s(20),
                    },
                  ]}
                  onPress={() => {
                    setAll(true), setSelected(false), getImage('');
                  }}>
                  <Text
                    style={[
                      styles.categoriesTitle,
                      {color: all === true ? '#FFFFFF' : '#CCCCCC'},
                    ]}>
                    All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                contentContainerStyle={{
                  marginBottom: vs(10),
                  paddingRight: s(20),
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Categories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={img}
            renderItem={getAllImage}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </>
  );
};

export default ImageCollection;
