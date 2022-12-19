import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {CommonStyles} from '../../../styles/CommonStyles';
import {ms} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {AutherCall} from '../../../actions/AutherCall';
import FastImage from 'react-native-fast-image';

const AuthorFlatList = () => {
  const [authors, setAuthor] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    setLoading(true);
    const res = await AutherCall();
    setLoading(false);
    if (res) {
      setAuthor(res.data);
      console.log('setAuthor: ', setAuthor);
    }
  };

  const handelAuthor = item => {
    navigation.navigate('AuthorReelScreen', {author: item});
  };

  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => handelAuthor(item)}
          style={styles.authorsFlatListView}
          key={index}>
          <View style={styles.authorImagView}>
            <FastImage
              style={{width: ms(70), height: ms(70), borderRadius: 40}}
              source={{uri: item.image[0]}}
            />
          </View>
          <Text style={styles.authorName}>{item.name}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.authorsFlatListMainView}>
      <View style={[CommonStyles.spaceBetween, styles.flatListHeadding]}>
        <Text style={styles.categoryFlatListTitle}>Authors</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AuthorsScreen')}>
          <Text style={styles.categorySeeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{paddingLeft: 20, paddingRight: 20}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={authors.slice(0, 7)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AuthorFlatList;
