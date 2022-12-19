import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import GoBackHeader from '../common/GoBackHeader';
import {AutherCall} from '../../actions/AutherCall';
import FastImage from 'react-native-fast-image';
import DropShadow from 'react-native-drop-shadow';
import {useNavigation} from '@react-navigation/native';
import {vs} from 'react-native-size-matters';
import {AuthorAllList} from '../skelton/SkeltonComponent';

const AuthorsComponent = () => {
  const [getAllAuthor, setGetAllAuthor] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getAllAuhtors();
  }, []);

  const getAllAuhtors = async () => {
    const response = await AutherCall();
    console.log('getAllAuhtors response: ', response.data);
    setGetAllAuthor(response.data);
  };

  const authorScreen = item => {
    navigation.navigate('AuthorReelScreen', {author: item});
  };

  const renderItem = ({item, index}) => {
    return (
      <DropShadow key={index} style={styles.shadowProp}>
        <TouchableOpacity
          onPress={() => authorScreen(item)}
          style={styles.authorFlatListView}>
          <FastImage style={styles.authorImag} source={{uri: item.image[0]}} />
          <View>
            <Text style={styles.authorName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </DropShadow>
    );
  };

  return (
    <>
      {loading ? (
        <AuthorAllList />
      ) : (
        <View style={styles.authorScreen}>
          <SafeAreaView style={styles.goBackHeaderFlax}>
            <GoBackHeader />
            <Text style={styles.goBackHeaderTitle}>Authors</Text>
          </SafeAreaView>
          <FlatList
            contentContainerStyle={{paddingBottom: vs(30)}}
            data={getAllAuthor}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </>
  );
};

export default AuthorsComponent;
