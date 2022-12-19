import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Share,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../utils/Images';
import {FetchAllQuote} from '../../actions/Quotes';
import FastImage from 'react-native-fast-image';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation} from '@react-navigation/native';
import {showToast} from '../common/TostMassage';
import {captureRef} from 'react-native-view-shot';
import Clipboard from '@react-native-clipboard/clipboard';
import {Template1Skeleton} from '../skelton/SkeltonComponent';

const ITEM_HEIGHT = Dimensions.get('window').height;

const HomeScnTemplate1 = () => {
  const [Template1, setTemplate1] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const _containerRef = useRef(null);
  const flatListRef = useRef(null);
  useEffect(() => {
    getAllQuote();
  }, []);

  const getAllQuote = async () => {
    setLoading(true);
    const res = await FetchAllQuote();
    console.log('res all of quote: ', res);
    if (res) {
      setTemplate1(res.data);
      setLoading(false);
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

  const clipboard = () => {
    Clipboard.setString(item.quotes);
    showToast('Quote copied');
  };
  const renderItem = ({item, index}) => {
    return (
      <LinearGradient key={index} colors={['#F87099', '#AA67DD']}>
        <View
          style={[CommonStyles.spaceBetween, CommonStyles.goBackHeaderView]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[CommonStyles.center, CommonStyles.goBackIconBorder]}>
            <Image
              style={{tintColor: '#ffffff'}}
              source={Images.goBackButton}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[CommonStyles.center, CommonStyles.goBackIconBorder]}>
            <Image style={{tintColor: '#ffffff'}} source={Images.random} />
          </TouchableOpacity>
        </View>
        <View style={[CommonStyles.quoteOfTHeDayScreen]}>
          <Image
            style={styles.bgObject1}
            source={Images.homeScreenTemplateQuote1}
          />
          <View style={CommonStyles.quoteViewStyle}>
            <View style={styles.authorInfo}>
              {/* <FastImage
                style={styles.authorImag}
                source={{uri: item.author.image[0]}}
              /> */}

              <View>
                <Text style={styles.quoteStyles}>{item.quotes}</Text>
              </View>
              {/* <View style={[CommonStyles.spaceBetween, styles.authorNameView]}>
                <View style={styles.authorNameDash} />
                <Text style={styles.authorName}>{item.author.name} </Text>
              </View> */}
            </View>
          </View>
          <Image
            style={styles.bgObject2}
            source={Images.homeScreenTemplateQuote2}
          />
          <View style={CommonStyles.footer}>
            <SafeAreaView style={CommonStyles.spaceBetween}>
              <View style={CommonStyles.center}>
                <TouchableOpacity
                  onPress={clipboard}
                  style={[
                    CommonStyles.center,
                    CommonStyles.QuoteFoThaDayFooterBorder,
                  ]}>
                  <Image style={{tintColor: '#ffffff'}} source={Images.copy} />
                </TouchableOpacity>
                <Text style={CommonStyles.footerIconText}>copy</Text>
              </View>
              <View style={CommonStyles.center}>
                <TouchableOpacity
                  onPress={downloadImage}
                  style={[
                    CommonStyles.center,
                    CommonStyles.QuoteFoThaDayFooterBorder,
                  ]}>
                  <Image
                    style={{tintColor: '#ffffff'}}
                    source={Images.download}
                  />
                </TouchableOpacity>
                <Text style={CommonStyles.footerIconText}>Download</Text>
              </View>
              <View style={CommonStyles.center}>
                <TouchableOpacity
                  onPress={onShare}
                  style={[
                    CommonStyles.center,
                    CommonStyles.QuoteFoThaDayFooterBorder,
                  ]}>
                  <Image style={{tintColor: '#ffffff'}} source={Images.share} />
                </TouchableOpacity>
                <Text style={CommonStyles.footerIconText}>Share</Text>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <>
      {loading ? (
        <Template1Skeleton />
      ) : (
        <View>
          <FlatList
            data={Template1}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            pagingEnabled={true}
            keyExtractor={item => item._id}
          />
        </View>
      )}
    </>
  );
};

export default HomeScnTemplate1;
