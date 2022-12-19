import React, {useState} from 'react';
import {View, FlatList, Pressable, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {s, vs} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import UnsplashSearch, {UnsplashPhoto} from 'react-native-unsplash';
import {TEMPLATES} from '../../utils/Constant';

export const FirstRoute = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const onOnlinePhotoSelect = (photo: UnsplashPhoto) => {
    navigation.navigate('MakeYourQuoteScreen', {
      imageUrl: photo?.urls?.regular,
    });
  };

  const renderTemplate = ({item, index}) => {
    return (
      <View key={index} style={{backgroundColor: 'red'}}>
        <TouchableOpacity
          onPress={() =>
            handleCreateMode(item.type, item.startColor, item.endColor)
          }>
          <View style={styles.card}>
            <FastImage
              source={item.image}
              style={styles.templateCard}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: s(4),
        }}>
        <View style={styles.row}>
          <Pressable onPress={() => toggleTab(0)} text={'Background'} />
        </View>

        {active === 0 ? (
          <UnsplashSearch
            style={{backgroundColor: '#EDF4F6'}}
            searchBarStyle={styles.searchContainer}
            accessKey={'MgllgRq7xd3TYgttzB1esqxfnFvC90sn9HLbUTRWclw'}
            onPhotoSelect={onOnlinePhotoSelect}
          />
        ) : null}
        {active === 1 ? (
          <FlatList
            style={{backgroundColor: 'red'}}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: isIphoneX() ? vs(110) : vs(200),
              alignSelf: isIphoneX() ? 'auto' : 'center',
            }}
            data={TEMPLATES}
            numColumns={3}
            renderItem={renderTemplate}
            keyExtractor={item => item.type}
          />
        ) : null}
      </View>
    </View>
  );
};
