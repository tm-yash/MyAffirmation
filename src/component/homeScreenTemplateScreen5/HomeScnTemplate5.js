import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Share,
  Image,
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
import Clipboard from '@react-native-clipboard/clipboard';
import {Template5Skeleton} from '../skelton/SkeltonComponent';

const HomeScnTemplate5 = () => {
  const [Template5, setTemplate5] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);
  useEffect(() => {
    getAllQuote();
  }, []);

  const getAllQuote = async () => {
    setLoading(true);
    const res = await FetchAllQuote();
    console.log('res all of quote: ', res);
    if (res) {
      setTemplate5(res.data);
      setLoading(false);
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

  const clipboard = () => {
    Clipboard.setString(item.quotes);
    showToast('Quote copied');
  };
  const renderItem = ({item, index}) => {
    return (
      <LinearGradient key={index} colors={['#773B9E', '#BC3098']}>
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
        <View style={CommonStyles.quoteOfTHeDayScreen}>
          <View style={CommonStyles.quoteViewStyle}>
            <View style={styles.authorInfo}>
              <Text style={styles.quoteStyles}>{item.quotes}</Text>
              <View style={styles.authorNameView}>
                {/* <Text style={styles.authorName}>{item.author.name}</Text> */}
                {/* <FastImage
                  style={styles.authorImag}
                  source={{uri: item.author.image[0]}}
                /> */}
              </View>
            </View>
          </View>
          <Image
            style={styles.bgObject2}
            source={Images.homeScreenTemplateWaterMark}
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
                  // onPress={DownloadBtn}
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
        <Template5Skeleton />
      ) : (
        <FlatList
          data={Template5}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
        />
      )}
    </>
  );
};

export default HomeScnTemplate5;
