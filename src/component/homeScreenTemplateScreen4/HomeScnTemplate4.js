import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {Images} from '../../utils/Images';
import LinearGradient from 'react-native-linear-gradient';
import {FetchAllQuote} from '../../actions/Quotes';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {CommonStyles} from '../../styles/CommonStyles';
import {showToast} from '../common/TostMassage';
import Clipboard from '@react-native-clipboard/clipboard';
import {Template4Skeleton} from '../skelton/SkeltonComponent';

const HomeScnTemplate4 = () => {
  const [Template4, setTemplate4] = useState([]);
  const flatListRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getAllQuote();
  }, []);

  const getAllQuote = async () => {
    setLoading(true);
    const res = await FetchAllQuote();
    console.log('res all of quote: ', res);
    if (res) {
      setTemplate4(res.data);
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
      <LinearGradient colors={['#2A59CE', '#6E87CD']}>
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
              <Image source={Images.homeScreenTemplate4Image} />
              <Text style={styles.quoteStyles}>{item.quotes}</Text>
              <View style={styles.authorNameView}>
                {/* <FastImage
                  style={styles.authorImag}
                  source={{uri: item.author.image[0]}}
                /> */}
                {/* <Text style={styles.authorName}>{item.author.name}</Text> */}
              </View>
            </View>
          </View>
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
        <Template4Skeleton />
      ) : (
        <View>
          <FlatList
            ref={flatListRef}
            data={Template4}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            pagingEnabled={true}
          />
        </View>
      )}
    </>
  );
};

export default HomeScnTemplate4;
