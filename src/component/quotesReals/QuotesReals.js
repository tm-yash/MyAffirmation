import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  FlatList,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import {HomeSliderImage} from '../../actions/homeSliderImage';
import {Images} from '../../utils/Images';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation} from '@react-navigation/native';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import CameraRoll from '@react-native-community/cameraroll';
import {showToast} from '../CommonItem/ToastMsg/ToastMsg';
import {vs} from 'react-native-size-matters';
import Clipboard from '@react-native-clipboard/clipboard';

const ITEM_HEIGHT = Dimensions.get('window').height;

const QuotesReals = () => {
  const _containerRef = useRef(null);
  const [images, setImage] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    // setTimeout(() => {
    //   if (route?.params?.imageItem) {
    //     if (flatListRef.current) {
    //       if (images) {
    //         const index = images.indexOf(route?.params?.imageItem);
    //         if (index > -1) {
    //           flatListRef.current.scrollToIndex({animated: true, index: index});
    //         }
    //       }
    //     }
    //   }
    // }, 2000);
    getImage();
  }, []);

  const getImage = async () => {
    const imageResponse = await HomeSliderImage();
    setImage(imageResponse.data);
  };

  const renderItem = ({item, index}) => {
    const clipboard = () => {
      Clipboard.setString(item.quotes);
      showToast('Quote copied');
    };

    const getPermissionAndroid = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Image Download Permission',
            message:
              'Your permission is required to save images to your device',
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
          console.log('uri: ', uri);
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

    const handleShare = () => {
      setTimeout(async () => {
        if (_containerRef) {
          try {
            const uri = await captureRef(_containerRef, {
              format: 'jpg',
              quality: 1,
            });
            console.log('->>>>>', uri);
            await Share.open({
              url: uri,
            });
          } catch (e) {
            if (e.error !== 'User did not share') {
              console.log(
                'We are so sorry, but something unexpected happened :(',
              );
            }
          }
        }
      }, 1000);
    };

    return (
      <View
        key={index}
        ref={_containerRef}
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

        <View style={{marginVertical: vs(40)}}>
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
                onPress={handleShare}
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
  const onRefreshing = () => {
    setRefreshing(true);
    getImage();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        key={item => item.id}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        pagingEnabled={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
        }
      />
    </View>
  );
};

export default QuotesReals;
