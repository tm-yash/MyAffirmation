import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  PermissionsAndroid,
  FlatList,
  Share,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {FetchCategoriesQuote} from '../../actions/Quotes';
import {styles} from './styles';
import {CommonStyles} from '../../styles/CommonStyles';
import {Images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {showToast} from '../common/TostMassage';
import Clipboard from '@react-native-clipboard/clipboard';
import {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import {vs} from 'react-native-size-matters';

const CategoriesReel = () => {
  const [categories, setCategories] = useState([]);

  const route = useRoute();

  const navigation = useNavigation();

  const _containerRef = useRef(null);

  useEffect(() => {
    getCategoriesQuote(route?.params?.categories._id ?? '');
  }, []);

  const getCategoriesQuote = async id => {
    const categoriesQuote = await FetchCategoriesQuote(id);
    setCategories(categoriesQuote.data);
    console.log('setCategories: ', setCategories);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      console.log('err', err);
    }
  };

  const downloadImage = async () => {
    setTimeout(async () => {
      try {
        const uri = await captureRef(_containerRef, {
          format: 'jpg',
          quality: 1,
        });
        if (Platform.OS === 'android') {
          const granted = await getPermissionAndroid();
          if (!granted) {
            return;
          }
        }
        const image = CameraRoll.save(uri, 'photo');
        if (image) {
          showToast('Image saved successfully.');
        }
      } catch (error) {
        console.log('error', error);
      }
    }, 1000);
  };

  const clipboard = () => {
    Clipboard.setString(item.quotes);
    showToast('Quote copied');
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={[
          styles.quoteOfTHeDayScreen,
          {backgroundColor: item.category.colour},
        ]}>
        <View style={styles.goBackHeaderView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[CommonStyles.center, styles.goBackIconBorder]}>
            <Image
              style={{tintColor: '#ffffff'}}
              source={Images.goBackButton}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: vs(35)}}>
          <View style={styles.authorInfo}>
            <FastImage
              style={styles.authorImag}
              source={{uri: item.author.image[0]}}
            />
            <Text style={styles.authorName}>{item.author.name} </Text>
          </View>

          <Image style={styles.bgObject1} source={Images.reelSectionObject1} />
          <View style={styles.quoteViewStyle}>
            <Image style={styles.leftQuote} source={Images.leftQuoteIcon} />
            <View>
              <Text style={styles.quoteStyles}>{item.quotes}</Text>
            </View>
            <Image style={styles.rightQuote} source={Images.rightQuoteIcon} />
          </View>
          <Image style={styles.bgObject2} source={Images.reelSectionObject2} />
        </View>

        <View style={styles.footer}>
          <SafeAreaView
            style={[CommonStyles.spaceBetween, styles.QuoteFoThaDayFooter]}>
            <View style={CommonStyles.center}>
              <TouchableOpacity
                onPress={clipboard}
                style={[CommonStyles.center, styles.QuoteFoThaDayFooterBorder]}>
                <Image style={{tintColor: '#ffffff'}} source={Images.copy} />
              </TouchableOpacity>
              <Text style={styles.footerIconText}>copy</Text>
            </View>
            <View style={CommonStyles.center}>
              <TouchableOpacity
                onPress={downloadImage}
                style={[CommonStyles.center, styles.QuoteFoThaDayFooterBorder]}>
                <Image
                  style={{tintColor: '#ffffff'}}
                  source={Images.download}
                />
              </TouchableOpacity>
              <Text style={styles.footerIconText}>Download</Text>
            </View>
            <View style={CommonStyles.center}>
              <TouchableOpacity
                onPress={onShare}
                style={[CommonStyles.center, styles.QuoteFoThaDayFooterBorder]}>
                <Image style={{tintColor: '#ffffff'}} source={Images.share} />
              </TouchableOpacity>
              <Text style={styles.footerIconText}>Share</Text>
            </View>
          </SafeAreaView>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={renderItem}
        pagingEnabled={true}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default CategoriesReel;
