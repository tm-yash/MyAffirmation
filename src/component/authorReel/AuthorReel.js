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
import {FetchAuthorQuote} from '../../actions/Quotes';
import {useRoute} from '@react-navigation/native';
import GoBackHeader from '../common/GoBackHeader';
import {styles} from './styles';
import {Images} from '../../utils/Images';
import FastImage from 'react-native-fast-image';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import {showToast} from '../common/TostMassage';

const AuthorReel = () => {
  const [quote, setQuote] = useState([]);
  const [copiedText, setCopiedText] = useState('');
  const route = useRoute();
  const _containerRef = useRef(null);
  const navigation = useNavigation();
  // const flatListRef = useRef(null);

  useEffect(() => {
    getAuthorQuote();
  }, []);

  const getAuthorQuote = async () => {
    var id = route?.params?.author._id;
    const authorQuote = await FetchAuthorQuote(id);
    if (authorQuote) {
      setQuote(authorQuote.data);
      setCopiedText(authorQuote.data.quotes);
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
        // cameraroll saves image
        const image = CameraRoll.save(uri, 'photo');
        if (image) {
          showToast('Image saved successfully.');
        }
      } catch (error) {
        console.log('error', error);
      }
    }, 1000);
    // setTimeout(async () => {
    //   interstitial.show();
    // });
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
        <View ref={_containerRef} style={styles.authorInfo}>
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
        data={quote}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled={true}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default AuthorReel;
